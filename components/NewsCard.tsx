import { TeslaApi } from "@/types/tesla-api";
import Image from "next/image";
import { Clock } from "lucide-react";
import Link from "next/link";
import { slugify } from "@/libs/slug";

interface NewsCardProps {
  article: TeslaApi;
}

export default function NewsCard({ article }: NewsCardProps) {
  const slug = slugify(article.title);
  return (
    <>
      <Link className="flex flex-col bg-white gap-3 " href={`/${slug}`}>
        <div className="relative w-full aspect-video">
          <Image
            src={
              article.urlToImage ||
              "https://cdndark.darkhorizons.com/wp-content/uploads/2026/02/sony-considers-a-ps6-delay-to-2028-2029.jpg"
            }
            fill
            sizes="(max-width: 48rem) 92vw, 30vw"
            className="object-cover"
            alt={`${article.title}Image`}
          />
        </div>
        <div className="px-2 flex flex-col gap-3 pb-4">
          <h1 className="text-lg font-black"> {article.title} </h1>
          <div className="flex items-center gap-2">
            <Clock />
            <p className="text-sm"> {article.publishedAt} </p>
          </div>
        </div>
      </Link>
    </>
  );
}
