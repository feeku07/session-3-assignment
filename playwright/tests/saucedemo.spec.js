const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');

test.describe('SauceDemo Automation Suite', () => {

  test('1. Website loads and title is correct', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await expect(page).toHaveTitle('Swag Labs');
  });

  test('2. Valid login navigates to inventory page', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory.html/);
    await expect(inventory.pageTitle).toHaveText('Products');
  });

  test('3. Invalid login shows error message', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('wrong_user', 'wrong_password');
    await expect(login.errorMessage).toBeVisible();
    await expect(login.errorMessage).toContainText('Username and password do not match');
  });

  test('4. Locked out user shows locked error', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('locked_out_user', 'secret_sauce');
    await expect(login.errorMessage).toContainText('locked out');
  });

  test('5. Add item to cart updates cart badge', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    await inventory.addFirstItemToCart();
    await expect(inventory.cartBadge).toHaveText('1');
  });

  test('6. Burger menu opens and logout works', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    await inventory.menuButton.click();
    await expect(inventory.logoutLink).toBeVisible();
    await inventory.logoutLink.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });

});