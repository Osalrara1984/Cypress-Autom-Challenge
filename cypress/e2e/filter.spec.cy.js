describe('Filter', () => {
    it('Filter products', () => {
      
      cy.visit('https://www.saucedemo.com/');

      cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');

    // Hacer clic en el botón de inicio de sesión
    cy.get('#login-button').click();

    // Verificar que se haya redirigido a la página de productos
    cy.url().should('include', '/inventory.html');

    // Ordenar la pagina por letra

    cy.get('.select_container').click()

    cy.get('.product_sort_container').select('lohi');
    cy.get('.product_sort_container').should('have.value', 'lohi')


  
    });
  });