import ArticleListContainer from "@/layouts/article-layout";
import PageLayout from "@/layouts/page-layout";

const Articles = () => {
  return (
    <PageLayout
      pageTitle="View Articles"
      pageDescription="Have a look at recent articles here..."
    >
      <ArticleListContainer />
    </PageLayout>
  );
};

export default Articles;
