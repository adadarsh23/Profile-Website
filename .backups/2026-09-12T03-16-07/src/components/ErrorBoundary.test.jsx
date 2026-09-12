import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { ErrorBoundary } from './ErrorBoundary';

function Bomb({ shouldThrow }) {
  if (shouldThrow) throw new Error('Test explosion');
  return React.createElement('span', null, 'Safe content');
}

describe('ErrorBoundary', () => {
  let container;
  let root;

  beforeEach(() => {
    globalThis.IS_REACT_ACT_ENVIRONMENT = true;
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(async () => {
    await act(async () => {
      root.unmount();
    });
    container.remove();
  });

  it('renders children when there is no error', async () => {
    await act(async () => {
      root.render(
        React.createElement(
          ErrorBoundary,
          null,
          React.createElement(Bomb, { shouldThrow: false })
        )
      );
    });
    expect(container.textContent).toContain('Safe content');
  });

  it('shows error UI and retry button when a child throws', async () => {
    const orig = console.error;
    console.error = () => {};
    await act(async () => {
      root.render(
        React.createElement(
          ErrorBoundary,
          null,
          React.createElement(Bomb, { shouldThrow: true })
        )
      );
    });
    console.error = orig;
    expect(container.querySelector('[role="alert"]')).not.toBeNull();
    expect(container.textContent).toMatch(/Unexpected error/i);
    const buttons = container.querySelectorAll('button');
    expect(buttons.length).toBeGreaterThanOrEqual(1);
    expect(buttons[0].textContent).toMatch(/Try again/i);
  });

  it('renders a custom fallback prop instead of the default UI', async () => {
    const orig = console.error;
    console.error = () => {};
    await act(async () => {
      root.render(
        React.createElement(
          ErrorBoundary,
          {
            fallback: React.createElement(
              'div',
              { id: 'custom-fallback' },
              'Custom!'
            ),
          },
          React.createElement(Bomb, { shouldThrow: true })
        )
      );
    });
    console.error = orig;
    expect(container.querySelector('#custom-fallback')).not.toBeNull();
  });

  it('renders nothing when fallback is null', async () => {
    const orig = console.error;
    console.error = () => {};
    await act(async () => {
      root.render(
        React.createElement(
          ErrorBoundary,
          { fallback: null },
          React.createElement(Bomb, { shouldThrow: true })
        )
      );
    });
    console.error = orig;
    expect(container.querySelector('[role="alert"]')).toBeNull();
  });
});
