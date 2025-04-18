import PageLayout from "@/layouts/page-layout";
import { useLocation, useNavigate } from "react-router-dom";
import { Article } from "@/interfaces";
import { ArrowRight, ChevronLeft } from "lucide-react";

const ViewArticle = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state as Article;

  const handleReturn = () => {
    navigate("/");
  };

  if (!article) {
    navigate("/");
    return null;
  }

  return (
    <PageLayout
      pageTitle="View Articles"
      pageDescription="Have a look at recent articles here..."
    >
      <div className="w-full">
        <div className="">
          <button
            onClick={handleReturn}
            className="h-[40px] bg-white border border-gray-20 shadow-md hover:shadow-none duration-200 hover:w-[50px] w-[40px] flex items-center justify-center text-gray-600 rounded-full"
          >
            {/* <Icon icon="lucide:chevron-left" className="w-4" /> */}
            <ChevronLeft className="w-4" />
          </button>
        </div>
        <div className="max-w-3xl mx-auto p-4">
          <img
            src={
              article.media?.[0]?.["media-metadata"]?.[2]?.url ||
              "https://via.placeholder.com/440x293"
            }
            alt={article.title}
            className="w-full h-64 object-cover rounded"
          />
          <h1 className="text-2xl font-bold mt-4">{article.title}</h1>
          <p className="text-gray-600 mt-2">{article.byline}</p>
          <p className="text-gray-500 text-sm">
            {new Date(article.published_date).toLocaleDateString()}
          </p>
          <p className="mt-4">{article.abstract}</p>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-start gap-1 text-blue-600 hover:underline"
          >
            Read full article <ArrowRight className="w-4 mt-[2px]" />
          </a>
        </div>
      </div>
    </PageLayout>
  );
};

export default ViewArticle;
