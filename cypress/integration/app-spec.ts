// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Google', function() {
  it('Successfully loads Google.com', () => {
    cy.visit('https://www.google.com') 
});

})
describe("App", function() {

  beforeEach(function() {
    cy.visit("/");
  });

  it("renders the app", function() {
    cy.get(".App-link").should("contain", "Learn React");
  });
});
