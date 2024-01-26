import { sql } from "@vercel/postgres";
import Link from 'next/link';

export default async function PostListPage({ searchParams }) {
  const posts = await sql`SELECT * FROM posts`;
  if (searchParams.sort === "desc") {
    posts.rows.reverse();
  }

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Post List</h2>
      <Link href="/posts" className="text-[#92400e] mr-4 transition duration-300 transform hover:scale-105 hover:cursor-pointer">Sort to normal</Link>
      <Link href="/posts?sort=desc" className="text-[#92400e] transition duration-300 transform hover:scale-105 hover:cursor-pointer">Sort descending</Link>
      {posts.rows.map((post) => (
        <div key={post.id} className="mt-4">
          <Link href={`/posts/${post.id}`} className="text-xl font-bold text-[#92400e] transition duration-3000 transform hover:scale-105 hover:cursor-pointer block hover:underline hover:text-lg">{post.title}</Link>
        </div>
      ))}
    </div>
  );
}
