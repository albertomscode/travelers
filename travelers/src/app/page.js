import Link from 'next/link';
import PostList from "@/components/PostList";

export default function HomePage() {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to everywhere</h1>
      <p className="text-gray-600 mb-8">Explore amazing destinations and share your travel experiences.</p>
      <h3 className="text-2xl font-bold mb-4">Latest Featured Posts</h3>
      <PostList />
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
        <p className="text-gray-600 mb-4">Explore the platform and share your travels with the community.</p>
        <Link href="/addpost" className="mx-2 text-lg hover:text-gray-700 transition duration-300 rounded bg-yellow-100 p-2 hover:underline">Add your travel experience</Link>
      </div>
    </div>
  );
}
