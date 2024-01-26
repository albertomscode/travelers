
import { sql } from "@vercel/postgres";
import DeletePostButton from "@/components/DeletePostButton";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export default async function SinglePostPage({ params }) {
    const posts = await sql `SELECT * FROM posts WHERE id = ${params.id}`;
    console.log("post:", posts.rows)

    /*async function handleDeletePost() {
        "use server";
    console.log("Deleted clicked")

    const posts = await sql `Delete FROM posts WHERE id = ${params.id}`;
    redirect("/posts");
    revalidatePath("/posts");
      <button onClick={handleDeletePost}>Delete</button>
    }*/

    
    return (
        <div>
          {posts.rows.map((post) => {
              return (
              <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
              </div>
            );
          })}
        </div>        
      );
    }