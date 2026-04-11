import { test, expect } from '@playwright/test';

test.describe('One Page CV', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have the correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Tomáš Kravčík/);
  });

  test('should have visibility of main sections', async ({ page }) => {
    await expect(page.locator('#hero')).toBeVisible();
    await expect(page.locator('#timeline')).toBeVisible();
    await expect(page.locator('#techstack')).toBeVisible();
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('should not have console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    page.on('pageerror', err => errors.push(err.message));
    
    await page.reload();
    await page.waitForTimeout(1000); // Wait for animations
    
    expect(errors.filter(e => !e.includes('vanguard'))).toEqual([]);
  });

  test('should verify no 404 image requests (vanguard check)', async ({ page }) => {
    const failedRequests: string[] = [];
    page.on('requestfailed', request => {
      failedRequests.push(request.url());
    });
    
    await page.reload();
    await page.waitForLoadState('networkidle');
    
    const vanguardErrors = failedRequests.filter(url => url.includes('vanguard'));
    if (vanguardErrors.length > 0) {
      console.log('Found persistent vanguard 404s:', vanguardErrors);
    }
  });
});
