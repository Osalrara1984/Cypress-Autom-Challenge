describe('Problem user Test', () => {
    it('Log in with problem user', () => {
      // Visitar la página de inicio de sesión
      cy.visit('https://www.saucedemo.com/');
  
      // Ingresar el nombre de usuario y contraseña
      cy.get('#user-name').type('problem_user');
      cy.get('#password').type('secret_sauce');
  
      // Hacer clic en el botón de inicio de sesión
      cy.get('#login-button').click();

      // Utiliza cy.get() para encontrar el elemento img por su clase CSS
cy.get('.inventory_item_img').invoke('attr', 'src').should('contain', '/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg');

    });
});