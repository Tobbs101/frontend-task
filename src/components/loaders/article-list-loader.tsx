import Each from "../misc/each";
import { Skeleton } from "../ui/skeleton";

const ArticleListLoader = () => {
  const loaderFill = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div
      data-testid="article-list-loader"
      className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 pt-10 p-4"
    >
      <Each
        of={loaderFill}
        render={(_, index: number) => (
          <Skeleton key={index} className="h-[350px]" />
        )}
      />
    </div>
  );
};

export default ArticleListLoader;
