import { sql } from "@vercel/postgres";
import Link from 'next/link';

export default async function PostLiss() {
  const posts = await sql`SELECT * FROM posts`;

  return (
    <div>
      {posts.rows.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`} className="text-xl font-bold text-[#92400e] transition duration-300 transform hover:scale-105 hover:cursor-pointer block hover:underline hover:text-lg">
              {post.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
