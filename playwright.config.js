// @ts-check

import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  // Where the test files are located
  testDir: './tests',

  // Run test files in parallel
  fullyParallel: true,

  // Fail the build if test.only is accidentally left in the code
  forbidOnly: !!process.env.CI,

  // Retry failed tests only on CI
  retries: process.env.CI ? 2 : 0,

  // Use one worker on CI
  workers: process.env.CI ? 1 : undefined,

  // HTML test report
  reporter: 'html',

  /*
   * Shared settings for all tests
   */
  use: {
    /*
     * Show the browser while we are debugging.
     * Later you can remove this or set it to true/false as needed.
     */
    headless: true,

    /*
     * Record a video for every test
     */
    video: 'on',

    /*
     * Take a screenshot for every test
     */
    screenshot: 'on',

    /*
     * Record Playwright trace
     */
    trace: 'on',
  },

  /*
   * Configure browser
   */
  projects: [
    {
      name: 'chromium',

      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});