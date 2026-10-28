import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('has title', async ({ page }) => {
  await expect(page).toHaveTitle('Todo Demo');
  await expect(page.getByRole('heading', { name: 'Todo Demo' })).toBeVisible();
});

test('adds an item', async ({ page }) => {
  await page.getByLabel('New item').fill('Write tests');
  await page.getByRole('button', { name: 'Add' }).click();

  await expect(page.getByRole('list', { name: 'Todo list' })).toContainText('Write tests');
  await expect(page.getByLabel('New item')).toBeEmpty();
});

test('ignores blank items', async ({ page }) => {
  await page.getByLabel('New item').fill('   ');
  await page.getByRole('button', { name: 'Add' }).click();

  await expect(page.getByRole('listitem')).toHaveCount(0);
});
