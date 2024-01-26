// /app/posts/[id]/[commentId]/page.js
/*export function CommentPage({ params }) {
    return (
      <div>
        <h1>
          Post Page ID: {params.id}, Comment ID: {params.commentId}
        </h1>
        {/* Show comment details based on the IDs }
      </div>
    );
  }
  
  export async function getServerSideProps({ params }) {
    return {
      props: { params },
    };
  }*/

  // pages/post/[postId].js
import React, { useState } from 'react';

export default function PostDetail() {
  const [comment, setComment] = useState('');

  const handleSubmitComment = async (e) => {
    e.preventDefault();

    // Aquí deberías realizar la lógica para guardar el comentario en la base de datos
    // Puedes utilizar fetch o axios para enviar la información al servidor

    // Después de guardar, podrías recargar los comentarios o actualizar la página
    setComment(''); // Limpiar el campo de comentario después de enviarlo
  };

  return (
    <div>
      <h1>Detalle del Destino</h1>
      {/* Mostrar detalles del destino */}
      {/* ... */}
      
      {/* Formulario para agregar comentarios */}
      <form onSubmit={handleSubmitComment}>
        <label>
          Comentario:
          <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
        </label>
        <br />
        <button type="submit">Agregar Comentario</button>
      </form>
    </div>
  );
}




import { sql } from "@vercel/postgres";
import Link from 'next/link';

export default async function PostListPage({ searchParams }) {
  const posts = await sql`SELECT * FROM comments`;

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      {posts.rows.map((post) => (
        <div key={post.id} className="mt-4">
          <Link href={`/posts/${post.id}/${post.id}`} className="text-xl font-bold text-[#92400e] transition duration-300 transform hover:scale-105 hover:cursor-pointer">{post.title}</Link>
        </div>
      ))}
    </div>
  );
}