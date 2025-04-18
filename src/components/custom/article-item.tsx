import { Article } from "@/interfaces";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const ArticleItem = ({ article }: { article: Article }) => {
  const imageUrl =
    article.media?.[0]?.["media-metadata"]?.[2]?.url ||
    "https://via.placeholder.com/440x293";

  return (
    <Card className="overflow-hidden rounded-none shadow-md border border-gray-100 flex items-center justify-between flex-col">
      <div className="w-full">
        <img
          src={imageUrl}
          alt={article.title}
          className="w-full h-48 flex object-cover"
        />
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-800">
            {article.title}
          </CardTitle>
        </CardHeader>
      </div>
      <div className="w-full">
        <CardContent className="w-full py-0">
          <div className="text-sm text-gray-500">
            <p>{article.byline},</p>
            <p>{new Date(article.published_date).toLocaleDateString()}</p>
          </div>
        </CardContent>
        <div className="divider bg-[#DBDCE0] h-[1px] my-5" />
        <CardFooter className="flex items-center justify-between">
          <Button className="bg-gray-600 text-white px-5 py-2 mt-1 rounded-none text-sm hover:underline">
            <Link to={`/${article.id}`} state={article} key={article.id}>
              Read more
            </Link>
          </Button>
          <Button className="bg-transparent hover:bg-gray-100 mt-1 border border-gray-600 text-gray-600 px-5 py-2 rounded-none text-sm hover:underline">
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Visit Site
            </a>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default ArticleItem;
