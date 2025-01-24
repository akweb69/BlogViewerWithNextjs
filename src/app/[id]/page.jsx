import Link from "next/link";

export async function generateStaticParams() {
    // Pre-generate paths for specific IDs
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    return posts.map((post) => ({
        id: post.id.toString(),
    }));
}

export default async function BlogDetails({ params }) {
    const { id } = params;

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (!response.ok) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-red-500">Error: Post not found</h1>
                    <Link href="/" className="text-orange-400 hover:underline mt-4 block">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    const post = await response.json();

    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
            <div className="max-w-3xl w-full bg-gray-800 rounded-lg shadow-lg p-6">
                <h1 className="text-4xl font-bold text-orange-400 mb-4">{post.title}</h1>
                <p className="text-lg leading-relaxed mb-6">{post.body}</p>
                <Link
                    href="/"
                    className="inline-block px-6 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 transition text-white font-semibold shadow-md"
                >
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
}
