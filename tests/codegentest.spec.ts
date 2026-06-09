import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.kapruka.com/shops/customerAccounts/accountNew.jsp?origination=regular');


  await page.getByText('firstName').click()
 /*  await page.getByRole('combobox', { name: 'From' }).fill('pune');
  await page.getByRole('heading', { name: 'Swargate, Pune' }).click();
  await page.getByRole('heading', { name: 'Mumbai' }).click();
  await page.getByRole('combobox', { name: 'Select Date of Journey.' }).click();
  await page.getByRole('button', { name: 'Wednesday, June 24,' }).click();
  await page.getByLabel('', { exact: true }).check();
  await page.getByLabel('Got it').click();
  await page.getByRole('button', { name: 'Search buses' }).click();
  await expect(page.getByRole('status', { name: 'Search results update' })).toContainText('buses found'); */

  await page.waitForTimeout(5000)
});


//npx playwright test  tests/codegentest.spec.ts --headed
