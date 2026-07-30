# Playwright vs Cypress — Comparison Summary

**Tested on:** SauceDemo (https://www.saucedemo.com)
**Scenarios covered in both tools:** Title check, valid login, invalid login, locked-out user, add to cart

## Ease of Setup
Both were quick to set up via npm. Playwright's `npm init playwright@latest` auto-installs browsers and scaffolds a config file. Cypress's setup was similarly fast, but required manually creating the `e2e` folder structure since I closed the first-run wizard early.

## Learning Curve
Cypress syntax felt more beginner-friendly — chained `cy.get().type().click()` commands read almost like plain English. Playwright's async/await syntax (`await page.locator(...).click()`) took a bit more getting used to but offers more explicit control.

## Browser Support
Playwright supports Chromium, Firefox, and WebKit out of the box, and easily runs the same tests across multiple browsers in one command. Cypress defaults to running in Electron (or Chrome/Edge if installed), and doesn't support WebKit at all — a real limitation for cross-browser testing.

## Execution Speed
Cypress ran all 5 tests in ~12 seconds. Playwright, run across 2 browsers (Chromium + WebKit) for 6 scenarios, took around 30 seconds total — a fair comparison given it was testing twice the browser coverage.

## Debugging Experience
Cypress's interactive Test Runner (opened via `npx cypress open`) shows a live, time-travel debugger with DOM snapshots at every step — genuinely excellent for debugging failing tests. Playwright's trace viewer and HTML report are also strong, but Cypress's real-time UI feels more immediate during active development.

## Reporting & Usability
Playwright's built-in HTML report is clean and easy to share (one static file, browsable). Cypress's default reporting is more terminal-focused, though it auto-generates screenshots and a full video recording of every run — useful evidence without extra config.

## Conclusion
Cypress is faster to write simple, readable tests for and has a better live-debugging experience. Playwright wins on cross-browser coverage and is better suited for larger, multi-browser test suites. For this project, I'd lean Playwright for its browser flexibility, but Cypress for quick, day-to-day test writing.