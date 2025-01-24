import Link from "next/link";

export default async function Home() {
  // Fetch data from the API
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store", // Disable caching if you want fresh data on every request
  });
  const posts = await response.json();

  return (
    <div className="w-10/12 mx-auto py-14">
      <main>
        <h1 className="text-2xl font-bold mb-6">Blog Posts</h1>
        <ul className="list-disc pl-5 space-y-3 ">
          {posts.map((post) => (
            <li key={post.id}>
              <Link
                href={`/blog/${post.id}`}
                className="text-blue-600 hover:underline"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
