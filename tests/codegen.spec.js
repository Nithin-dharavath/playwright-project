import { test, expect } from '@playwright/test';

test('codegen testing', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'Username' }).fill('Admin', {delay:400});

  await page.getByRole('textbox', { name: 'Password' }).fill('admin123', {delay:200});

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/dahboard/);

  await page.getByRole('banner').getByRole('img', { name: 'profile picture' }).click();

  await page.getByRole('menuitem', { name: 'Logout' }).click();

  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});