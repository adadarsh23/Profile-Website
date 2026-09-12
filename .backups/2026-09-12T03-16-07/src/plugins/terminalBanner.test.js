import { describe, expect, it, vi } from 'vitest';
import terminalBannerPlugin, {
  BannerStyles,
  BannerThemes,
  formatBytes,
  formatDuration,
  getRuntimeProcess,
} from './terminalBanner.jsx';

describe('terminalBannerPlugin utilities', () => {
  it('exposes a safe runtime accessor and consistent duration formatting', () => {
    const runtime = getRuntimeProcess();

    expect(runtime === undefined || typeof runtime === 'object').toBe(true);
    expect(formatDuration(90061000)).toBe('1d 1h 1m');
    expect(formatDuration(3665000)).toBe('1h 1m 5s');
    expect(formatDuration(65000)).toBe('1m 5s');
    expect(formatDuration(5000)).toBe('5s');
  });

  it('formats bytes into clean human-readable units', () => {
    expect(formatBytes(0)).toBe('0 B');
    expect(formatBytes(1024)).toBe('1 KB');
    expect(formatBytes(1024 * 1024 * 5.5)).toBe('5.5 MB');
    expect(formatBytes(1024 * 1024 * 1024 * 2.25)).toBe('2.25 GB');
  });

  it('exports valid themes and styles', () => {
    expect(BannerThemes.CYBERPUNK).toBe('cyberpunk');
    expect(BannerThemes.SYNTHWAVE).toBe('synthwave');
    expect(BannerThemes.AURORA).toBe('aurora');
    expect(BannerStyles.DASHBOARD).toBe('dashboard');
    expect(BannerStyles.MINIMAL).toBe('minimal');
  });

  it('instantiates plugin with all Vite hooks intact', () => {
    const plugin = terminalBannerPlugin({
      projectName: 'Test Suite',
      theme: BannerThemes.CYBERPUNK,
      bannerStyle: BannerStyles.DASHBOARD,
      artStyle: 'music',
      boxStyle: 'double',
      showPerformance: true,
    });

    expect(plugin.name).toBe('terminal-banner-enhanced');
    expect(typeof plugin.configureServer).toBe('function');
    expect(typeof plugin.buildStart).toBe('function');
    expect(typeof plugin.buildEnd).toBe('function');
    expect(typeof plugin.closeBundle).toBe('function');
    expect(typeof plugin.transformIndexHtml).toBe('function');
  });

  it('injects performance monitoring script into HTML when showPerformance is true', () => {
    const plugin = terminalBannerPlugin({ showPerformance: true });
    const transformed = plugin.transformIndexHtml(
      '<html><body><div>App</div></body></html>'
    );
    expect(transformed).toContain('performance.getEntriesByType');
  });

  it('does not inject script when showPerformance is false', () => {
    const plugin = terminalBannerPlugin({ showPerformance: false });
    const originalHtml = '<html><body><div>App</div></body></html>';
    expect(plugin.transformIndexHtml(originalHtml)).toBe(originalHtml);
  });

  it('triggers onBuildStart and onBuildEnd callbacks', () => {
    const onBuildStart = vi.fn();
    const onBuildEnd = vi.fn();
    const plugin = terminalBannerPlugin({ onBuildStart, onBuildEnd });

    plugin.buildStart();
    expect(onBuildStart).toHaveBeenCalledTimes(1);

    plugin.buildEnd();
    expect(onBuildEnd).toHaveBeenCalledTimes(1);
  });

  it('executes configureServer and renders banner cleanly', async () => {
    const plugin = terminalBannerPlugin({
      projectName: 'Test Suite',
      clearScreen: false,
      theme: BannerThemes.CYBERPUNK,
      artStyle: 'music',
      showGit: true,
      showProjectStats: true,
      showMediaStats: true,
      showDependencies: true,
      showStorage: true,
      showEnvironment: true,
      showSystemInfo: true,
    });

    const mockServer = {
      config: {
        server: { host: 'localhost', port: 5173 },
        mode: 'development',
        viteVersion: '6.0.0',
      },
      watcher: {
        on: vi.fn(),
      },
    };

    expect(() => plugin.configureServer(mockServer)).not.toThrow();
    await new Promise((resolve) => setTimeout(resolve, 50));
  }, 30000);
});
