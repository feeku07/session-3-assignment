*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${URL}        https://www.saucedemo.com/
${BROWSER}    Chrome
${USERNAME}   standard_user
${PASSWORD}   secret_sauce

*** Test Cases ***
Valid Login Navigates To Inventory
    Open Browser    ${URL}    ${BROWSER}
    Maximize Browser Window
    Input Text      id:user-name       ${USERNAME}
    Input Text      id:password        ${PASSWORD}
    Click Button    id:login-button
    Wait Until Page Contains    Products
    Page Should Contain    Products
    Capture Page Screenshot    robot_login_success.png
    [Teardown]    Close Browser