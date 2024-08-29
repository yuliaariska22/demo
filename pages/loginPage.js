export class LoginPage {
    visit() {
      cy.visit('https://www.demoblaze.com/index.html');
    }
  
    getUsernameField() {
      return cy.get('#loginusername');
    }
  
    getPasswordField() {
      return cy.get('#loginpassword');
    }
  
    getLoginButton() {
      return cy.get('#login2');
    }
  
    getLogoutButton() {
      return cy.get('#logout2');
    }
  
    login(username, password) {
      this.getUsernameField().type(username);
      this.getPasswordField().type(password);
      this.getLoginButton().click();
    }
  }
  