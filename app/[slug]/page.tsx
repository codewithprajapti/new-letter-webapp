import { slugify } from "@/libs/slug";
import { getTeslaNews } from "@/libs/tesla-api-fetch";
import { TeslaApi } from "@/types/tesla-api";

interface NewsDetailProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const articles = await getTeslaNews();

  return articles.map((article) => ({
    slug: slugify(article.title),
  }));
}

export default async function NewsDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const articles: TeslaApi[] = await getTeslaNews();

  const article = articles.find((item) => slugify(item.title) === slug);

  if (!article) {
    throw new Error("Failed to fetch article");
  }

  return (
    <article className="px-2 md:px-20">
      <h1>{article.title}</h1>
    </article>
  );
}
