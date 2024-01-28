import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-yellow-500 text-gray-800 p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Travel the world</h1>
      <nav className="flex justify-center my-2 p-2">
        <Link href="/" className="mx-2 text-lg hover:text-gray-700 transition duration-300 rounded bg-yellow-100 p-2">Home</Link>
        <Link href="/posts" className="mx-2 text-lg hover:text-gray-700 transition duration-300 rounded bg-yellow-100 p-2">Posts</Link>
        <Link href="/addpost" className="mx-2 text-lg hover:text-gray-700 transition duration-300 rounded bg-yellow-100 p-2">Add Travel Experience</Link>
      </nav>
    </header>
  );
}
