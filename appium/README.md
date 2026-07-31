# Appium — Task 5 (Bonus/Introductory)

## Setup
1. Installed Android Platform Tools, added to PATH
2. Enabled USB Debugging on physical Android device, connected via USB
3. Installed Appium + UiAutomator2 driver:
```powershell
npm install -g appium
appium driver install uiautomator2
```
4. Set `ANDROID_HOME` environment variable to platform-tools parent folder
5. Python setup:
```powershell
python -m venv venv
venv\Scripts\activate
pip install Appium-Python-Client
```

## Run
Terminal 1:
```powershell
appium
```
Terminal 2:
```powershell
python test_appium_settings.py
```

## Result
- Session connected successfully to physical Android device
- App launch verified
- Screenshot captured (`appium_test_result.png`)
- Note: search bar element selector (`//*[contains(@text,'Search')]`) didn't match on this device/Android version — likely a manufacturer-specific UI difference. Session and app launch worked correctly regardless.

## Which felt easier: Selenium/Robot Framework vs Appium?
Appium setup was noticeably more involved than the web tools — required physical device debugging, environment variables (ANDROID_HOME), and driver installation, whereas Playwright/Cypress/Selenium worked almost immediately after `npm install`/`pip install`. Once set up, the actual test-writing syntax felt similar to Selenium (same WebDriver-style API).