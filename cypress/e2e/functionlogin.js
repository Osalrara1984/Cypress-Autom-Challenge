export const loginWithValidCredentials = () => {
    // Visitar la página de inicio de sesión
    cy.visit('https://www.saucedemo.com/');
  
    // Ingresar el nombre de usuario y contraseña
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
  
    // Hacer clic en el botón de inicio de sesión
    cy.get('#login-button').click();
  };