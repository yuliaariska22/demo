export class SignUpPage {
    visit() {
      cy.visit('https://www.demoblaze.com/index.html');
    }
  
    getSignupUsernameField() {
      return cy.get('#sign-username');
    }
  
    getSignupPasswordField() {
      return cy.get('#sign-password');
    }
  
    getSignUpButton() {
      return cy.get('#signInModal .btn-primary');
    }
  
    signUp(username, password) {
      this.getSignupUsernameField().type(username);
      this.getSignupPasswordField().type(password);
      this.getSignUpButton().click();
    }
  }
  