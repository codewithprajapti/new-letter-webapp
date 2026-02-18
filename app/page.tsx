import NewsCard from "@/components/NewsCard";
import { getTeslaNews } from "@/libs/tesla-api-fetch";
import { TeslaApi } from "@/types/tesla-api";

export default async function page() {
  const articles: TeslaApi[] = await getTeslaNews();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 px-2 md:px-20 gap-2 md:gap-5">
        {articles.map((article, index) => {
          return <NewsCard key={index} article={article} />;
        })}
      </div>
    </>
  );
}
