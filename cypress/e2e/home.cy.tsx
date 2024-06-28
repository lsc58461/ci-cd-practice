describe("home", () => {
  beforeEach(() => {
    cy.intercept("POST", /ingest.de.sentry.io/i, {
      statusCode: 200,
      body: {},
    }).as("sentryPerformance");

    cy.visit("http://localhost:3000");
  });

  it('should contain "Get started by editing app/page.tsx" text', () => {
    cy.contains("Get started by editing app/page.tsx").should("exist");
  });

  it('should contain "Docs" text and link', () => {
    cy.contains("Docs").as("docs");
    cy.get("@docs").should("exist");
    cy.get("@docs")
      .should("have.attr", "href")
      .and("include", "https://nextjs.org/docs");
  });
});
