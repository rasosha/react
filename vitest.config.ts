import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/tests/setup.ts',
      coverage: {
        include: ['src/**/*'],
        exclude: ['src/main.tsx', 'src/App.tsx', 'src/types/*'],
        enabled: true,
        reporter: ['text'],
        all: true,
      },
    },
  })
);
