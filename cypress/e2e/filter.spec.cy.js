import { loginWithValidCredentials } from './functionlogin'; // Function Login imported

describe('Filter Test', () => {
  it('Log in with valid credentials', () => {
    // Llama a la función para iniciar sesión
    loginWithValidCredentials();

    // Verificar que se haya redirigido a la página de productos
    cy.url().should('include', '/inventory.html');

    // Ordenar la pagina por letra

    cy.get('.select_container').click()

    cy.get('.product_sort_container').select('lohi');
    cy.get('.product_sort_container').should('have.value', 'lohi')


  
    });
  });