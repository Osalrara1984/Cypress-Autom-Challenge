import { loginWithValidCredentials } from './functionlogin'; // Function Login imported

describe('Empty Cart Test', () => {
  it('Log in with valid credentials', () => {
    // Llama a la función para iniciar sesión
    loginWithValidCredentials();

  
      // Verificar que se haya redirigido a la página de productos
      cy.url().should('include', '/inventory.html');
      
      // Agregar productos al carrito
  
     // cy.get('#add-to-cart-sauce-labs-backpack')
      cy.get('#add-to-cart-sauce-labs-backpack').click()
      cy.get('#add-to-cart-sauce-labs-bike-light').click()

        // cerrar sesion
      cy.get('#react-burger-menu-btn').click();
          cy.get('#logout_sidebar_link').click();

          //Ingresar con otro usuario

    cy.get('#user-name').type('problem_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click()

      //Verificar que el carrito esta vacio

      cy.get('span.shopping_cart_badge').should('have.text', '');

    });
});