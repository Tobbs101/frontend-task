const apiKey = Cypress.env("VITE_APP_API_KEY");

describe("Article List", () => {
  it("should display the article list", () => {
    cy.visit("http://localhost:5173");
    cy.get('[data-testid="article-list"]').should("exist");
  });

  it("should display articles after data is loaded", () => {
    // Mocking the api response here
    cy.intercept(
      "GET",
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`,
      {
        statusCode: 200,
        body: {
          results: [
            {
              id: 1,
              title: "Test Article 1",
              abstract: "Test Abstract 1",
              byline: "By John Doe",
              published_date: "2025-04-18T00:00:00Z",
              url: "https://www.nytimes.com/article1",
              media: [
                {
                  "media-metadata": [
                    {
                      url: "https://via.placeholder.com/440x293",
                      format: "medium",
                    },
                    {
                      url: "https://via.placeholder.com/800x533",
                      format: "large",
                    },
                  ],
                },
              ],
            },
            {
              id: 2,
              title: "Test Article 2",
              abstract: "Test Abstract 2",
              byline: "By Jane Smith",
              published_date: "2025-04-17T00:00:00Z",
              url: "https://www.nytimes.com/article2",
              media: [
                {
                  "media-metadata": [
                    {
                      url: "https://via.placeholder.com/440x293",
                      format: "medium",
                    },
                    {
                      url: "https://via.placeholder.com/800x533",
                      format: "large",
                    },
                  ],
                },
              ],
            },
          ],
        },
      }
    ).as("fetchArticles");

    cy.visit("http://localhost:5173");

    cy.wait("@fetchArticles");

    cy.get('[data-testid="article-list"]').should("exist");

    cy.get('[data-testid="article-list"]')
      .children()
      .first()
      .should("be.visible")
      .and("contain.text", "Test Article 1");

    cy.get('[data-testid="article-list"]')
      .children()
      .eq(1)
      .should("be.visible")
      .and("contain.text", "Test Article 2");
  });
});
