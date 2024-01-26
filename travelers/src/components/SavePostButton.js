"use client";
import { useFormStatus } from "react-dom";

export default function SavePostButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className={`mt-4 bg-gradient-to-r from-yellow-600 to-yellow-400 text-white font-semibold py-1 px-6 rounded-md transition duration-300 ${
        pending
          ? "cursor-not-allowed bg-gray-400 hover:opacity-75"
          : "hover:bg-yellow-600 hover:shadow-md"
      }`}
    >
      {pending ? "Adding your travel experience..." : "Add it!"}
    </button>
  );
}
