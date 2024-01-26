import SavePostButton from "@/components/SavePostButton";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function AddPost() {
  async function handleAddPost(formData) {
    "use server";

    // get the things from our formData object
    const title = formData.get("title");
    const content = formData.get("content");
    const name = formData.get("name");

    // make our sql request
    await sql`INSERT INTO posts (title, content) VALUES (${title}, ${content})`;
    await sql`INSERT INTO categories (name) VALUES (${name})`;

    // revalidate the path so the new item shows
    revalidatePath("/posts");

    // take me to the home page
    redirect("/posts");
  }

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center p-7">Tell me everything you did</h2>
      <form action={handleAddPost} className="max-w-md mx-auto p-8">
        <label htmlFor="title" className="block mt-4 text-lg text-center font-bold text-[#92400e]">Where did you go? ✈</label>
        <input
          name="title"
          id="title"
          placeholder="Title"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full text-center"
        />

        <label htmlFor="content" className="block mt-4 text-lg text-center font-bold text-[#92400e]">Tell your story</label>
        <textarea
          name="content"
          id="content"
          placeholder="Content"
          rows="4"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full text-center"
        />

        <label htmlFor="name" className="block mt-4 text-lg text-center font-bold text-[#92400e]">Category</label>
        <input
          name="name"
          id="name"
          placeholder="Cities, beaches, mountains"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full text-center"
        />

        <SavePostButton />
      </form>
    </div>
  );
}
