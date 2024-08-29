import { LoginPage } from '../pages/loginPage';

describe('Login Tests', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('should login successfully with valid credentials', () => {
    loginPage.login('validUsername', 'validPassword');
    cy.get('#loggedInUser').should('contain', 'validUsername');
  });

  it('should logout successfully', () => {
    loginPage.login('validUsername', 'validPassword');
    cy.get('#loggedInUser').should('contain', 'validUsername');
    loginPage.getLogoutButton().click();
    cy.get('#login2').should('be.visible');
  });
});
