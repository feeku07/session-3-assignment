# Selenium + Robot Framework — Task 3

## Setup

```powershell
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

## Run Selenium tests (pytest)

```powershell
cd tests
pytest test_saucedemo.py -v
```

## Run Robot Framework tests

```powershell
cd robot-framework
robot saucedemo.robot
```

Reports auto-generate as `log.html`, `report.html`, `output.xml` in the same folder.

## Scenarios covered
1. Valid login → navigates to inventory page
2. Add item to cart → cart badge updates
3. Invalid login → error message shown (bonus/negative test)

See `NOTES.md` for a comparison between Selenium and Robot Framework.