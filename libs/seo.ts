import { Api } from "@/types/apis";

export function generateArticleMetadata(article: Api, slug: string) {
  return {
    title: article.title,
    description: article.description || article.content?.slice(0, 160),

    alternates: {
      canonical: `/${slug}`,
    },

    openGraph: {
      type: "article",
      title: article.title,
      description: article.description || article.content?.slice(0, 160),
      url: `/${slug}`,
      images: article.urlToImage
        ? [
            {
              url: article.urlToImage,
              width: 1200,
              height: 630,
              alt: article.title,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description || article.content?.slice(0, 160),
      images: article.urlToImage ? [article.urlToImage] : [],
    },
  };
}
