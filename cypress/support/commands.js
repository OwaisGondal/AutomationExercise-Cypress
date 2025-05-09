// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("clickLink", (label) => {
  cy.get("a").contains(label).click();
});

Cypress.Commands.add("login", (email, password) => {
  cy.clickLink("Login");
  cy.get('[data-qa="login-email"]').clear().type(email);
  cy.get('[data-qa="login-password"]').clear().type(password);
  cy.get("[data-qa='login-button']").click();
  cy.contains("Logout").should("be.visible");

});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
