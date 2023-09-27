describe('Mandatory Fields', () => {
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
  
     // cy.get('#add-to-cart-sauce-labs-backpack')
      cy.get('#add-to-cart-sauce-labs-backpack').click()
      cy.get('#add-to-cart-sauce-labs-bike-light').click()
  
      // verificar que se hayan agregado al carrito
  
      cy.get('.shopping_cart_link').click()
  
      // Continuar con proceso de compra
      cy.get('#checkout').click()
  
      //Sin first-name
      cy.get('#last-name').type('Ramirez');
      cy.get('#postal-code').type('36541')
  
      cy.get('#continue').click();

      //Verificar que se despliega el mensaje de error

      cy.get('h3[data-test="error"]').should('be.visible');
        cy.get('h3[data-test="error"]').should('have.text', 'Error: First Name is required');

        cy.get('#last-name').clear(); // Borra el campo last-name
        cy.get('#postal-code').clear(); // Borra el campo postal-code

        //Sin last-name

     cy.get('#first-name').type('Oscar');
     cy.get('#postal-code').type('36541');
        cy.get('#continue').click();
    
    //Verificar que se despliega el mensaje de error

    cy.get('h3[data-test="error"]').should('be.visible');
    cy.get('h3[data-test="error"]').should('have.text', 'Error: Last Name is required');

        cy.get('#first-name').clear(); // Borra el campo first-name
        cy.get('#postal-code').clear(); // Borra el campo postal-code



    //Sin postal-code

    cy.get('#first-name').type('Oscar');
    cy.get('#last-name').type('Ramirez');
        cy.get('#continue').click();

        //Verificar que se despliega el mensaje de error

    cy.get('h3[data-test="error"]').should('be.visible');
    cy.get('h3[data-test="error"]').should('have.text', 'Error: Postal Code is required');


      
    });
});