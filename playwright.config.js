// @ts-check
import fs from 'fs';
import path from 'path';
import { defineConfig, devices } from '@playwright/test';

const browserCacheRoot = process.env.LOCALAPPDATA
  ? path.join(process.env.LOCALAPPDATA, 'ms-playwright')
  : '';

/**
 * @param {...string} segments
 * @returns {string}
 */
function browserPath(...segments) {
  return browserCacheRoot ? path.join(browserCacheRoot, ...segments) : '';
}

/**
 * @param {string[]} candidates
 * @returns {string | undefined}
 */
function pickExecutable(candidates) {
  return candidates.find((candidate) => candidate && fs.existsSync(candidate));
}

/**
 * @param {{ launchOptions?: { executablePath?: string } } & Record<string, unknown>} use
 * @param {string | undefined} executablePath
 */
function withExecutablePath(use, executablePath) {
  if (!executablePath) return use;
  return {
    ...use,
    launchOptions: {
      ...(use.launchOptions || {}),
      executablePath,
    },
  };
}

const chromiumExecutablePath = pickExecutable([
  browserPath('chromium-1243', 'chrome-win64', 'chrome.exe'),
  browserPath('chromium-1234', 'chrome-win64', 'chrome.exe'),
]);

// const webkitExecutablePath = pickExecutable([
//   browserPath('webkit-2359', 'Playwright.exe'),
//   browserPath('webkit-2336', 'Playwright.exe'),
// ]);

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: withExecutablePath({ ...devices['Desktop Chrome'] }, chromiumExecutablePath),
    },

    // {
    //   name: 'webkit',
    //   use: withExecutablePath({ ...devices['Desktop Safari'] }, webkitExecutablePath),
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
