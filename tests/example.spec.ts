import { test, expect } from '@playwright/test';

test.only('has title', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  //await expect(page.getByRole('heading',{name:'Automation Testing Practice'})).toBeVisible();
  //let txt=await page.getByLabel('Email:').innerText();
  //console.log(txt);
  //await page.getByPlaceholder('Enter EMail').fill('abcde@gmail.com');
  //await page.getByText('Data Entry Form',{exact:true}).click();
  //await page.getByAltText('playwright logo').click();
  //await expect(page.getByTitle('Automation Testing Practice')
  //.nth(0)).toHaveText('Automation Testing Practice');
  //await page.getByTestId('directions').click();
  //const button = page.getByRole('button').and(page.getByTitle('Subscribe')); 
  /*const newEmail = page.getByRole('button', { name: 'New' });
const dialog = page.getByText('Confirm security settings');
await expect(newEmail.or(dialog).first()).toBeVisible();*/
/*await page
    .getByRole('listitem')
    .filter({ hasText: 'orange' })
    .click();*/
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
