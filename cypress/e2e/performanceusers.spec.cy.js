describe('Performance Glitch Test', () => {
    it('Log in with glitched user', () => {
      // Visitar la página de inicio de sesión
      cy.visit('https://www.saucedemo.com/');
  
      // Ingresar el nombre de usuario y contraseña
      cy.get('#user-name').type('performance_glitch_user');
      cy.get('#password').type('secret_sauce');
  
      // Obtener el tiempo de inicio antes de hacer clic en el botón de inicio de sesión
      let startTime;
      cy.window().then((win) => {
        startTime = win.performance.now();
      });
  
      // Hacer clic en el botón de inicio de sesión
      cy.get('#login-button').click();
  
      // Verificar la URL y que el tiempo de respuesta sea menor a 5000 ms (5 segundos)
      cy.url().should('include', '/inventory.html');
  
      cy.window().then((win) => {
        const endTime = win.performance.now();
        const loadTime = endTime - startTime;
        expect(loadTime).to.be.lessThan(2000); 
      });
    });
  });