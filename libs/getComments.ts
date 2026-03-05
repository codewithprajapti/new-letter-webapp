import fs from "fs/promises";
import path from "path";

export async function getComments(postId: string) {
  const filePath = path.join(process.cwd(), "libs/comments.json");

  const file = await fs.readFile(filePath, "utf-8");
  const comments = JSON.parse(file);

  return comments
    .filter((c: any) => c.postId === postId)
    .sort(
      (a: any, b: any) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
}
