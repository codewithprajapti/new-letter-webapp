import { slugify } from "@/libs/slug";
import { fetchApis } from "@/libs/api-fetch";
import { Api } from "@/types/apis";
import NewsDetailComponent from "@/components/NewsDetailComponent";

interface NewsDetailProps {
  params: {
    slug: string;
  };
}

const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`;
export async function generateStaticParams() {
  const articles = await fetchApis(url);

  return articles.map((article) => ({
    slug: slugify(article.title),
  }));
}

export default async function NewsDetail({ params }: NewsDetailProps) {
  const { slug } = await params;

  const articles: Api[] = await fetchApis(url);

  const article = articles.find((item) => slugify(item.title) === slug);

  if (!article) {
    throw new Error("Article not found");
  }

  return (
    <article className="px-2 md:px-20">
      <NewsDetailComponent article={article} />
    </article>
  );
}
