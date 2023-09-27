describe('Verificación de usuarios en SauceDemo', () => {
    beforeEach(() => {
      // Visita la página de inicio de sesión
      cy.visit('https://www.saucedemo.com/');
    });
  
    it('Iniciar sesión con usuarios válidos', () => {
      const usuarios = [
        { username: 'standard_user', password: 'secret_sauce' },
        { username: 'problem_user', password: 'secret_sauce' },
        { username: 'performance_glitch_user', password: 'secret_sauce'},
    
      ];
  
      // Itera a través de la lista de usuarios y realiza el inicio de sesión
      usuarios.forEach((usuario) => {
        cy.get('[data-test=username]').type(usuario.username);
        cy.get('[data-test=password]').type(usuario.password);
        cy.get('[data-test=login-button]').click();
  
        // Verifica si el usuario está bloqueado o si se inicia sesión correctamente
        if (usuario.username === 'locked_out_user') {
          // Verifica que se muestre un mensaje de error para el usuario bloqueado
          cy.get('[data-test=error]').should('be.visible');
        } else {
          // Verifica que el inicio de sesión sea exitoso
          cy.url().should('include', '/inventory.html');
          // Cierra la sesión solo si el inicio de sesión es exitoso
          cy.get('#react-burger-menu-btn').click();
          cy.get('#logout_sidebar_link').click();
        }
      });
    });
  
  });
  describe('Verificación de usuario bloqueado', () => {
    it('Intento de inicio de sesión con usuario bloqueado', () => {
      // Visita la página de inicio de sesión
      cy.visit('https://www.saucedemo.com/');
  
      // Ingresa las credenciales del usuario bloqueado
      cy.get('[data-test=username]').type('locked_out_user');
      cy.get('[data-test=password]').type('secret_sauce');
      cy.get('[data-test=login-button]').click();
  
      // Verifica que se muestre un mensaje de error
      cy.get('[data-test=error]').should('be.visible');
    });
  });