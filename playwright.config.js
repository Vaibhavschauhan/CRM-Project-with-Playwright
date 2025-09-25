// @ts-check
import { defineConfig, devices } from '@playwright/test';

/*
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  // retries:1,
  timeout : 40*1000,
  expect:{
    timeout: 40*1000,
  },
  reporter:'html',
  use: {
    browserName: 'chromium',
    screenshot: 'on',
    trace: 'on',
    headless: false,
    video: 'on',
    
  },

  /* Configure projects for major browsers */
 

  workers: 5,
});

