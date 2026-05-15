import { expect, test } from '@playwright/test';

test.describe('Home visual regression', () => {
  test('home page desktop/mobile', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.addStyleTag({
      content: `
        *,:before,:after { animation: none !important; transition: none !important; }
        html { scroll-behavior: auto !important; }
      `,
    });

    await expect(page).toHaveScreenshot('home-page.png', {
      fullPage: true,
    });
  });
});

