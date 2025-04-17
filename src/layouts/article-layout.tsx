import React from "react";
import { Article } from "@/interfaces";
import ArticleList from "@/components/custom/article-list";
import { API_KEY } from "@/static";
import ArticleListLoader from "@/components/loaders/article-list-loader";

interface ArticleListContainerProps {}

interface ArticleListContainerState {
  articles: Article[];
  loading: boolean;
  error: Error | null;
}

class ArticleListContainer extends React.Component<
  ArticleListContainerProps,
  ArticleListContainerState
> {
  constructor(props: ArticleListContainerProps) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    fetch(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ articles: data.results, loading: false }))
      .catch((error) => this.setState({ error, loading: false }));
  }

  render() {
    const { articles, loading, error } = this.state;

    if (loading) return <ArticleListLoader />;
    if (error) return <div>Error: {error.message}</div>;

    return <ArticleList articles={articles} />;
  }
}

export default ArticleListContainer;
