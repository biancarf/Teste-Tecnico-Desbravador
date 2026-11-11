import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './playwright-tests',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  retries: 0,
  workers: 4,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report' }],
  ],
});