import { CheckoutPage } from '../pages/checkoutPage';

describe('Checkout Tests', () => {
  const checkoutPage = new CheckoutPage();

  beforeEach(() => {
    checkoutPage.visit();
  });

  it('should complete checkout process successfully', () => {
    checkoutPage.addProductToCart();
    checkoutPage.checkout('John Doe', 'USA', 'New York', '1234567890123456', '12', '2024');
    cy.get('.sweet-alert').should('contain', 'Thank you for your purchase!');
  });
});
