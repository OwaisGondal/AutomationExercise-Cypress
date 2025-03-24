/// <reference types="cypress"/>

describe("Login Tests", () => {
  it("should login with valid credentials", () => {
    cy.visit("/");
    cy.fixture("profile").then((profile) => {
      cy.login(profile.email, profile.password);
    });
  });
});
