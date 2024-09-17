import {
  devices,
  expect,
} from '@playwright/test';
import {
  createConfig,
  matchers,
} from '@stencil/playwright';

expect.extend(matchers);

export default createConfig({
  fullyParallel: true,
  projects: [
    {
      name: 'chromium',
      use: devices['Desktop Chrome'],
    },
    {
      name: 'firefox',
      use: devices['Desktop Firefox'],
    },
    {
      name: 'Mobile Chrome',
      use: devices['Pixel 5'],
    },
  ],
  testDir: './src/',
});

