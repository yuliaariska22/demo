export class CheckoutPage {
    visit() {
      cy.visit('https://www.demoblaze.com/index.html');
    }
  
    getProduct() {
      return cy.get('.hrefch');
    }
  
    getAddToCartButton() {
      return cy.get('.btn-success');
    }
  
    getCartButton() {
      return cy.get('#cartur');
    }
  
    getPlaceOrderButton() {
      return cy.get('.btn-primary');
    }
  
    getNameField() {
      return cy.get('#name');
    }
  
    getCountryField() {
      return cy.get('#country');
    }
  
    getCityField() {
      return cy.get('#city');
    }
  
    getCreditCardField() {
      return cy.get('#card');
    }
  
    getMonthField() {
      return cy.get('#month');
    }
  
    getYearField() {
      return cy.get('#year');
    }
  
    getOrderButton() {
      return cy.get('#orderModal .btn-primary');
    }
  
    addProductToCart() {
      this.getProduct().click();
      this.getAddToCartButton().click();
    }
  
    checkout(name, country, city, card, month, year) {
      this.getCartButton().click();
      this.getPlaceOrderButton().click();
      this.getNameField().type(name);
      this.getCountryField().type(country);
      this.getCityField().type(city);
      this.getCreditCardField().type(card);
      this.getMonthField().type(month);
      this.getYearField().type(year);
      this.getOrderButton().click();
    }
  }
  