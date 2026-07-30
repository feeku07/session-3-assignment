# Selenium vs Robot Framework — Notes

**Scenarios automated:** Valid login → inventory page, Add to cart → badge verification, Invalid login → error message (bonus)

## Which felt easier?

Selenium with Python (using pytest + Page Object Model) felt more natural since it's just regular Python code — full control over logic, easy to add conditions, loops, or custom assertions. Debugging is straightforward since it's plain code with normal Python tracebacks.

Robot Framework's keyword-driven syntax (`Open Browser`, `Input Text`, `Click Button`) was easier to *read*, even for someone unfamiliar with programming — it looks almost like plain English instructions. However, it took a bit more time to learn its specific syntax rules (spacing-sensitive, keyword libraries like SeleniumLibrary) compared to just writing Python directly.

**Conclusion:** Selenium (Python) is better for developers who want full control and are comfortable with code. Robot Framework is better suited for teams with non-technical testers who need to read/write tests in a more natural, keyword-based format.