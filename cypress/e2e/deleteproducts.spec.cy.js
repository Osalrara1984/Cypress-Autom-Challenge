describe('Delete products', () => {
    it('Log in with valid credentials', () => {
      // Visitar la página de inicio de sesión
      cy.visit('https://www.saucedemo.com/');
  
      // Ingresar el nombre de usuario y contraseña
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
  
      // Hacer clic en el botón de inicio de sesión
      cy.get('#login-button').click();
  
      // Verificar que se haya redirigido a la página de productos
      cy.url().should('include', '/inventory.html');
      
      // Agregar productos al carrito
  
      cy.get('#add-to-cart-sauce-labs-backpack').click()
      cy.get('#add-to-cart-sauce-labs-bike-light').click()
  
      // verificar que se hayan agregado al carrito
  
      cy.get('.shopping_cart_link').click()

      // eliminar un producto del carrito

      cy.get('#remove-sauce-labs-backpack').click()

      // Verificar que el producto se haya eliminado correctamente
      cy.get('.cart_list')
      .contains('Sauce Labs Backpack') 
      .should('not.exist'); // Asegura que el elemento ya no exista en el carrito
    });
});