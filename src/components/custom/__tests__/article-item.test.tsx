import React from "react";
import { render, screen } from "@testing-library/react";
import { Article } from "@/interfaces";
import ArticleItem from "../article-item";
import { BrowserRouter } from "react-router-dom";

const mockArticle: Article = {
  id: 1,
  title: "Test Article",
  abstract: "This is a test abstract.",
  byline: "By Test Author",
  published_date: "2025-04-14",
  url: "https://example.com/test-article",
  media: [],
};

test("renders articles", () => {
  render(<ArticleItem article={mockArticle} />, { wrapper: BrowserRouter });
  expect(screen.getByText(mockArticle.title)).toBeInTheDocument();
});
