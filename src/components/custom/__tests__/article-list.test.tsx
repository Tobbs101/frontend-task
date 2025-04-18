import { render, screen } from "@testing-library/react";
import { Article } from "@/interfaces";
import ArticleList from "../article-list";
import { BrowserRouter } from "react-router-dom";

const articles: Article[] = [
  {
    id: 1,
    title: "Test Article",
    abstract: "This is a test abstract.",
    byline: "By Test Author",
    published_date: "2025-04-14",
    url: "https://example.com/test-article",
    media: [],
  },
];

test("renders articles", () => {
  render(<ArticleList articles={articles} />, { wrapper: BrowserRouter });
  expect(screen.getByText("Test Article")).toBeInTheDocument();
});
