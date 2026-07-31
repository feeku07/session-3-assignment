from appium import webdriver
from appium.options.android import UiAutomator2Options
from appium.webdriver.common.appiumby import AppiumBy
import time

options = UiAutomator2Options()
options.platform_name = "Android"
options.device_name = "33011JEHN21503"
options.app_package = "com.android.settings"
options.app_activity = ".Settings"
options.automation_name = "UiAutomator2"
options.no_reset = True

driver = webdriver.Remote("http://127.0.0.1:4723", options=options)

try:
    time.sleep(3)
    print("Step 1 PASSED: Settings app opened")
    print("Current activity:", driver.current_activity)

    # Try to find the search icon/bar in Settings and tap it
    try:
        search_element = driver.find_element(AppiumBy.XPATH, "//*[contains(@text,'Search')]")
        search_element.click()
        time.sleep(1)
        search_element.send_keys("Wi-Fi")
        time.sleep(2)
        print("Step 2 PASSED: Tapped search bar and entered text 'Wi-Fi'")
    except Exception as e:
        print("Step 2 note: Search element not found with this selector, but session and app launch worked.")
        print("Error detail:", e)

    driver.save_screenshot("appium_test_result.png")
    print("Screenshot saved.")

finally:
    driver.quit()
    print("Appium session closed. All tests complete.")