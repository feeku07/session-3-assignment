describe('SauceDemo Automation Suite - Cypress', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('1. Website loads and title is correct', () => {
    cy.title().should('eq', 'Swag Labs');
    cy.screenshot('cypress-01-title-check');
  });

  it('2. Valid login navigates to inventory page', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('have.text', 'Products');
    cy.screenshot('cypress-02-valid-login');
  });

  it('3. Invalid login shows error message (negative test)', () => {
    cy.get('#user-name').type('wrong_user');
    cy.get('#password').type('wrong_password');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'do not match');
    cy.screenshot('cypress-03-invalid-login-error');
  });

  it('4. Locked out user shows locked error (negative test)', () => {
    cy.get('#user-name').type('locked_out_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]')
      .should('contain.text', 'locked out');
    cy.screenshot('cypress-04-locked-out-error');
  });

  it('5. Add item to cart updates cart badge (positive test)', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('button[data-test^="add-to-cart"]').first().click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
    cy.screenshot('cypress-05-add-to-cart');
  });

});