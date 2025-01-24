"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [loading, setLoading] = useState(true); // Loading state
  const postsPerPage = 8;

  // Fetch posts from the API with pagination
  const fetchPosts = async (page) => {
    setLoading(true); // Start loading
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${postsPerPage}`
    );
    const data = await response.json();
    const total = response.headers.get("X-Total-Count");
    setPosts(data);
    setTotalPosts(total);
    setLoading(false); // End loading
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return (
    <div className="w-full mx-auto py-14 bg-gray-900 text-white">
      <main className="w-10/12 mx-auto min-h-screen">
        <h1 className="text-3xl font-bold mb-8 text-center text-orange-500">
          Blog Posts
        </h1>

        {/* Loading Indicator */}
        {loading ? (
          <div className="flex justify-center items-center w-full min-h-[50vh]">
            <div className="spinner-border animate-spin w-12 h-12 border-t-4 border-orange-500 border-solid rounded-full"></div>
          </div>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {posts.map((post) => (
              <li
                key={post.id}
                className="transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-lg bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 p-6 hover:from-orange-400 hover:via-orange-500 hover:to-orange-600 hover:text-white flex flex-col justify-between"
              >
                <p className="text-sm text-gray-400">Blog No: {post?.id}</p>
                <Link
                  href={`/${post.id}`}
                  className="text-xl font-semibold text-orange-300 hover:text-white mb-4"
                >
                  {post.title}
                </Link>
                <Link
                  href={`/${post.id}`}
                  className="mt-auto text-center bg-orange-500 text-white rounded-lg py-2 hover:bg-orange-600"
                >
                  View Details
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* Pagination */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-orange-400">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
}
