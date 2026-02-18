import { TeslaApi, TeslaApiResponse } from "@/types/tesla-api";

export async function getTeslaNews(): Promise<TeslaApi[]> {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=tesla&from=2026-01-18&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`,
    { next: { revalidate: 1800 } },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }
  const data: TeslaApiResponse = await res.json();
//   console.log(data)
  return data.articles ?? [];
}
