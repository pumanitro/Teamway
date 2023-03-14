import { ROUTES } from "../../utils/routes";

describe(`Teamway`, () => {
  it("should go through entire personality trait journey and go to be introvert", () => {
    cy.visit(ROUTES.HOME);
    cy.get('[data-test-id="startTest"]').click();
    cy.contains("Spend time alone").click();
    cy.contains("Next").click();
    cy.contains("Feel more comfortable with people you already know").click();
    cy.contains("Next").click();
    cy.contains("Cautious person who avoids risks").click();
    cy.contains("Next").click();
    cy.contains("Logic and reasoning").click();
    cy.contains("Next").click();
    cy.contains("Reserved and quiet").click();
    cy.contains("Finish").click();
    cy.contains("You are an Introvert!").should("exist");
  });
});
