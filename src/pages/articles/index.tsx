import ArticlesListContainer from "@/containers/articles-container";
import PageLayout from "@/layouts/page-layout";

const Articles = () => {
  return (
    <PageLayout
      pageTitle="View Articles"
      pageDescription="Have a look at recent articles here..."
    >
      <ArticlesListContainer />
    </PageLayout>
  );
};

export default Articles;
