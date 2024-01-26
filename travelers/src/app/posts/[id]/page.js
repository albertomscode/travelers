import { sql } from "@vercel/postgres";

export default async function SinglePostPage({ params }) {
  const posts = await sql`SELECT * FROM posts WHERE id = ${params.id}`;
  console.log("post:", posts.rows);

  return (
    <div className="container mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      {posts.rows.map((post) => (
        <div key={post.id} className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-yellow-500">{post.title}</h2>
          <p className="text-gray-700">{post.content}</p>
        </div>
      ))}
    </div>
  );
}
