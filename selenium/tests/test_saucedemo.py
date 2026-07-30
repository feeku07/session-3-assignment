import sys, os, time
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import pytest
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from pages.login_page import LoginPage
from pages.inventory_page import InventoryPage

@pytest.fixture
def driver():
    service = Service(ChromeDriverManager().install())
    drv = webdriver.Chrome(service=service)
    drv.maximize_window()
    yield drv
    drv.quit()

def screenshot(driver, name):
    os.makedirs("screenshots", exist_ok=True)
    driver.save_screenshot(f"screenshots/{name}.png")

# Scenario 1: valid login -> navigates to inventory page
def test_valid_login_navigates_to_inventory(driver):
    login = LoginPage(driver)
    inventory = InventoryPage(driver)

    login.load()
    login.login("standard_user", "secret_sauce")

    assert "inventory.html" in driver.current_url
    assert inventory.get_title_text() == "Products"
    screenshot(driver, "01_valid_login_inventory")

# Scenario 2: form completion + verify result (add to cart, badge updates)
def test_add_to_cart_updates_badge(driver):
    login = LoginPage(driver)
    inventory = InventoryPage(driver)

    login.load()
    login.login("standard_user", "secret_sauce")
    inventory.add_backpack_to_cart()

    assert inventory.get_cart_count() == "1"
    screenshot(driver, "02_add_to_cart_badge")

# Scenario 3 (bonus/negative): invalid login shows error
def test_invalid_login_shows_error(driver):
    login = LoginPage(driver)

    login.load()
    login.login("invalid_user", "wrong_password")

    assert "Username and password do not match" in login.get_error_text()
    screenshot(driver, "03_invalid_login_error")