from selenium.webdriver.common.by import By

class InventoryPage:
    PAGE_TITLE = (By.CLASS_NAME, "title")
    ADD_TO_CART_BACKPACK = (By.ID, "add-to-cart-sauce-labs-backpack")
    CART_BADGE = (By.CLASS_NAME, "shopping_cart_badge")

    def __init__(self, driver):
        self.driver = driver

    def get_title_text(self):
        return self.driver.find_element(*self.PAGE_TITLE).text

    def add_backpack_to_cart(self):
        self.driver.find_element(*self.ADD_TO_CART_BACKPACK).click()

    def get_cart_count(self):
        return self.driver.find_element(*self.CART_BADGE).text