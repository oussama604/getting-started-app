// @ts-check
import { test, expect } from '@playwright/test';

test('homepage loads and has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Todo App');
});
