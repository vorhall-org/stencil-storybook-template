import {
  devices,
  expect,
} from '@playwright/test';
import {
  createConfig,
  matchers,
} from '@stencil/playwright';

expect.extend(matchers);

const projects = [
  {
    name: 'chromium',
    use: devices['Desktop Chrome'],
  },
  {
    name: 'Microsoft Edge',
    use: {
      ...devices['Desktop Edge'],
      channel: 'msedge',
    },
  },
  {
    name: 'chromium',
    use: {
      ...devices['Desktop Chrome'],
      viewport: {
        height: 480,
        width: 800,
      },
    },
  },
  {
    name: 'firefox',
    use: devices['Desktop Firefox'],
  },
  {
    name: 'firefox',
    use: {
      ...devices['Desktop Firefox'],
      viewport: {
        height: 480,
        width: 800,
      },
    },
  },
  {
    name: 'Mobile Chrome',
    use: devices['Pixel 5'],
  },
];

export default createConfig({
  fullyParallel: true,

  /**
   * during development of tests, it makes senese to not run test in every
   * browser config.
   */
  projects: [projects[0]],
  testDir: './src/',
});

