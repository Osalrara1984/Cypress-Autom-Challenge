import { loginWithValidCredentials } from './functionlogin'; // Function Login imported

describe('Login Test', () => {
  it('Log in with valid credentials', () => {
    // Llama a la función para iniciar sesión
    loginWithValidCredentials();

    // Verificar que se haya redirigido a la página de productos
    cy.url().should('include', '/inventory.html');
    
    // Agregar productos al carrito

   // cy.get('#add-to-cart-sauce-labs-backpack')
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#add-to-cart-sauce-labs-bike-light').click()

    // verificar que se hayan agregado al carrito

    cy.get('.shopping_cart_link').click()

    // Continuar con proceso de compra
    cy.get('#checkout').click()

    cy.get('#first-name').type('Oscar');
    cy.get('#last-name').type('Ramirez');
    cy.get('#postal-code').type('36541')

    cy.get('#continue').click()
    cy.get('#finish').click()
    
    // corroborar que la compra se realizo exitosamente

    cy.get('.pony_express').should('be.visible')
  });
});