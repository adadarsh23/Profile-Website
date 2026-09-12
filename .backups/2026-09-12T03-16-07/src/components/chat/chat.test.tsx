import { act } from 'react';
import { createRoot } from 'react-dom/client';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { formatResponse } from './formatResponse';
import { QuickPromptChips } from './QuickPromptChips';
import { ChatHeader } from './ChatHeader';
import { ChatInput } from './ChatInput';
import { TypingIndicator } from './TypingIndicator';
import { queryLocalKnowledge } from './knowledgeEngine';

describe('Chat Logic and Formatting', () => {
  it('normalizes CRLF line endings and formats fenced code blocks', () => {
    const raw = 'Line 1\r\n```ts \r\nconst x = 1;\n```\nLine 2';
    const formatted = formatResponse(raw);
    expect(formatted).toContain('```ts\nconst x = 1;\n```');
    expect(formatted).not.toContain('\r');
  });

  it('handles null and undefined input gracefully', () => {
    expect(formatResponse(null)).toBe('');
    expect(formatResponse(undefined)).toBe('');
    expect(formatResponse('')).toBe('');
  });
});

describe('Local Knowledge Engine', () => {
  it('identifies greetings and provides helpful starter options', () => {
    const match = queryLocalKnowledge('Hello! What can you help me with?');
    expect(match.matched).toBe(true);
    expect(match.confidence).toBeGreaterThanOrEqual(0.9);
    expect(match.response).toContain('Âd Adarsh');
    expect(match.suggestedFollowUps).toBeDefined();
    expect(match.suggestedFollowUps?.length).toBeGreaterThan(0);
  });

  it('accurately matches queries about Silent Ritual album', () => {
    const match = queryLocalKnowledge('Tell me about Silent Ritual');
    expect(match.matched).toBe(true);
    expect(match.confidence).toBeGreaterThanOrEqual(0.95);
    expect(match.response).toContain('Silent Ritual');
    expect(match.response).toContain('10-track');
    expect(match.category).toBe('project-silent-ritual');
  });

  it('accurately matches queries about sample beats and store', () => {
    const match = queryLocalKnowledge('Where can I preview sample beats?');
    expect(match.matched).toBe(true);
    expect(match.response).toContain('Sample Beats');
    expect(match.response).toContain('BPM');
  });

  it('returns direct contact channels for booking queries', () => {
    const match = queryLocalKnowledge(
      'How do I contact Âd Adarsh for a collab?'
    );
    expect(match.matched).toBe(true);
    expect(match.response).toContain('adadarsh523@gmail.com');
    expect(match.response).toContain('Contact Page');
  });

  it('provides comprehensive intelligent fallback for miscellaneous queries', () => {
    const match = queryLocalKnowledge('Can you write a screenplay?');
    expect(match.matched).toBe(true);
    expect(match.response).toContain('AD Assistant');
    expect(match.suggestedFollowUps).toBeDefined();
  });
});

describe('Chat UI Components', () => {
  let container: HTMLDivElement;
  let root: ReturnType<typeof createRoot>;

  beforeEach(() => {
    (
      globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT: boolean }
    ).IS_REACT_ACT_ENVIRONMENT = true;
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

  it('renders QuickPromptChips and fires selection handler', async () => {
    const handleSelect = vi.fn();
    const testPrompts = [
      { label: 'Test Beat', text: 'Tell me about beats' },
      { label: 'Test Album', text: 'Tell me about albums' },
    ];

    await act(async () => {
      root.render(
        <QuickPromptChips prompts={testPrompts} onSelect={handleSelect} />
      );
    });

    expect(container.textContent).toContain('Test Beat');
    expect(container.textContent).toContain('Test Album');

    const buttons = container.querySelectorAll('button');
    expect(buttons.length).toBe(2);

    await act(async () => {
      buttons[0].click();
    });

    expect(handleSelect).toHaveBeenCalledWith('Tell me about beats');
  });

  it('renders ChatHeader with title, status and close button', async () => {
    const handleClose = vi.fn();
    const handleShare = vi.fn();
    const handleExport = vi.fn();
    const handleClear = vi.fn();

    await act(async () => {
      root.render(
        <ChatHeader
          onShare={handleShare}
          onExport={handleExport}
          onClear={handleClear}
          onClose={handleClose}
          isBusy={false}
        />
      );
    });

    expect(container.textContent).toContain('Âd Assistant');
    expect(container.textContent).toContain('Creative & Music Guide');

    const closeBtn = container.querySelector('button[title="Close chat"]');
    expect(closeBtn).not.toBeNull();

    await act(async () => {
      (closeBtn as HTMLButtonElement).click();
    });

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('renders ChatInput with Stop button when busy and Send button when idle', async () => {
    const handleSend = vi.fn();
    const handleStop = vi.fn();
    const handleChange = vi.fn();

    // 1. Idle state with text -> Send button visible
    await act(async () => {
      root.render(
        <ChatInput
          value="Hello AI"
          onChange={handleChange}
          onSend={handleSend}
          onStop={handleStop}
          disabled={false}
          isBusy={false}
        />
      );
    });

    const sendBtn = container.querySelector('button[title="Send message"]');
    expect(sendBtn).not.toBeNull();

    // 2. Busy state -> Stop button visible
    await act(async () => {
      root.render(
        <ChatInput
          value="Hello AI"
          onChange={handleChange}
          onSend={handleSend}
          onStop={handleStop}
          disabled={false}
          isBusy={true}
        />
      );
    });

    const stopBtn = container.querySelector('button[title="Stop generating"]');
    expect(stopBtn).not.toBeNull();

    await act(async () => {
      (stopBtn as HTMLButtonElement).click();
    });
    expect(handleStop).toHaveBeenCalledTimes(1);
  });

  it('renders TypingIndicator returning null per user preference', async () => {
    await act(async () => {
      root.render(<TypingIndicator status="idle" />);
    });
    expect(container.innerHTML).toBe('');

    await act(async () => {
      root.render(<TypingIndicator status="generating" />);
    });
    expect(container.innerHTML).toBe('');
  });

  it('renders RobotFaceAvatar with responsive SVG and animated elements', async () => {
    const { RobotFaceAvatar } = await import('./RobotFaceAvatar');
    await act(async () => {
      root.render(
        <RobotFaceAvatar size={24} isThinking={true} isSpeaking={true} />
      );
    });
    const svg = container.querySelector('svg');
    expect(svg).not.toBeNull();
    expect(container.querySelector('.robot-eye')).not.toBeNull();
    expect(container.querySelector('.antenna-tip')).not.toBeNull();
  });
});
