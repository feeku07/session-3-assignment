# Playwright — Task 1

## Setup
```powershell
npm install
npx playwright install
```

## Run tests
```powershell
npx playwright test --project=chromium --project=webkit
```

## View HTML report
```powershell
npx playwright show-report ../reports/playwright-report
```

## Coverage
- 6 scenarios on SauceDemo (title check, valid/invalid login, locked-out user, add to cart, logout)
- Page Object Model (`pages/LoginPage.js`, `pages/InventoryPage.js`)
- Ran on Chromium + WebKit (2 browsers)
- Screenshots + video on failure, HTML report generated