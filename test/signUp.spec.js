import { SignUpPage } from '../pages/signUpPage';

describe('Sign Up Tests', () => {
  const signUpPage = new SignUpPage();

  beforeEach(() => {
    signUpPage.visit();
  });

  it('should sign up successfully with valid credentials', () => {
    signUpPage.signUp('newUser', 'newPassword');
    cy.get('#login2').should('be.visible');
  });
});
