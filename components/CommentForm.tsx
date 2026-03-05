"use client";

import { addComment } from "@/libs/addComment";
import { Api } from "@/types/apis";
import { useRouter } from "next/navigation";

interface NewsDetailProps {
  article: Api;
}

export default function CommentForm({ article }: NewsDetailProps) {
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    await addComment(formData);
    router.refresh();
  }

  return (
    <form action={handleSubmit} className="flex flex-col gap-3 mt-6">
      <input type="hidden" name="postId" value={article.url} />

      <textarea
        name="text"
        placeholder="Write a comment..."
        required
        className="border p-3 rounded"
      />

      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded cursor-pointer"
      >
        Comment
      </button>
    </form>
  );
}
