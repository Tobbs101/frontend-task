import { Article } from "@/interfaces";
import Each from "../misc/each";
import ArticleItem from "./article-item";

const ArticleList = ({ articles }: { articles: Article[] }) => {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 pt-10 p-4"
      data-testid="article-list"
    >
      <Each
        of={articles}
        render={(article: Article) => (
          <ArticleItem key={article.id} article={article} />
        )}
      />
    </div>
  );
};

export default ArticleList;
