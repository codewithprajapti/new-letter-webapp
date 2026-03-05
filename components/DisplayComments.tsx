import Image from "next/image";
import { getComments } from "@/libs/getComments";
import { Api } from "@/types/apis";

interface NewsDetailProps {
  article: Api;
}

export default async function DisplayComments({ article }: NewsDetailProps) {
  const comments = await getComments(article.url);

  return (
    <>
      <div className="flex flex-col gap-4 mt-6">
        {comments.map((comment: any) => (
          <div
            key={comment.id}
            className="flex gap-3 border p-3 rounded-lg"
          >
            {/* Optimized Profile Image */}
            <div className="relative w-8 h-8 shrink-0">
              <Image
                src={comment.user.image || '/Avatar.png'}
                alt={comment.user.name || "User"}
                fill
                sizes="(max-width: 48em) 6vw, 2rem"
                className="rounded-full object-cover"
              />
            </div>

            <div>
              <p className="font-medium">{comment.user.name}</p>

              <p>{comment.text}</p>

              <span className="text-[0.75rem] text-gray-500">
                {new Date(comment.createdAt).toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
