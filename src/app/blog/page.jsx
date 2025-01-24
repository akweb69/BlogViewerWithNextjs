export default async function BlogDetails({ params }) {
    const { id } = params;

    // Fetch the blog post details based on the ID from the URL
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        cache: "no-store", // Ensure fresh data
    });

    if (!response.ok) {
        // Handle error if the post does not exist
        return (
            <div className="min-h-screen p-8">
                <h1 className="text-2xl font-bold text-red-600">Error: Post not found</h1>
                <a href="/" className="text-blue-600 hover:underline mt-4 block">
                    ← Back to Home
                </a>
            </div>
        );
    }

    const post = await response.json();

    return (
        <div className="min-h-screen p-8">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-lg mb-8">{post.body}</p>
            <a
                href="/"
                className="inline-block text-blue-600 hover:underline"
            >
                ← Back to Home
            </a>
        </div>
    );
}
