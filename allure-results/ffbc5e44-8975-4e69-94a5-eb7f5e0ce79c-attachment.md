# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: codegentest.spec.ts >> test
- Location: tests\codegentest.spec.ts:3:5

# Error details

```
Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.redbus.in/
Call log:
  - navigating to "https://www.redbus.in/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
> 4  |   await page.goto('https://www.redbus.in/');
     |              ^ Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.redbus.in/
  5  |   await page.getByText('From').click();
  6  |   await page.getByRole('combobox', { name: 'From' }).fill('pune');
  7  |   await page.getByRole('heading', { name: 'Swargate, Pune' }).click();
  8  |   await page.getByRole('heading', { name: 'Mumbai' }).click();
  9  |   await page.getByRole('combobox', { name: 'Select Date of Journey.' }).click();
  10 |   await page.getByRole('button', { name: 'Wednesday, June 24,' }).click();
  11 |   await page.getByLabel('', { exact: true }).check();
  12 |   await page.getByLabel('Got it').click();
  13 |   await page.getByRole('button', { name: 'Search buses' }).click();
  14 |   await page.getByText('buses found').nth(1).click();
  15 | });
```