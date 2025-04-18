import { RouteObject } from "react-router-dom";
import Articles from "@/pages/articles";
import ViewArticle from "@/pages/view-article";

export const rootRoute: RouteObject = {
  path: "/",
  children: [
    { path: "/", element: <Articles /> },
    { path: "/:id", element: <ViewArticle /> },
  ],
};
