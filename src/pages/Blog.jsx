const Blog = () => {
    const posts = [
        {
            id: 1,
            title: 'Building Modern Web Apps',
            date: 'November 24, 2025',
            excerpt: 'Exploring the latest trends in web development and how to apply them.'
        },
        {
            id: 2,
            title: 'Why Dark Mode Matters',
            date: 'November 10, 2025',
            excerpt: 'Understanding the benefits of dark mode for user experience and accessibility.'
        },
        {
            id: 3,
            title: 'Getting Started with React',
            date: 'October 15, 2025',
            excerpt: 'A comprehensive guide for beginners looking to learn React.'
        }
    ];

    return (
        <div className="container">
            <h1 style={{ marginBottom: '2rem' }}>Blog</h1>
            <div style={{ display: 'grid', gap: '2rem' }}>
                {posts.map(post => (
                    <article key={post.id} style={{
                        padding: '2rem',
                        backgroundColor: 'var(--color-bg-secondary)',
                        borderRadius: '0.5rem',
                        border: '1px solid var(--color-border)'
                    }}>
                        <h2 style={{ marginBottom: '0.5rem' }}>{post.title}</h2>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-accent)', marginBottom: '1rem' }}>{post.date}</p>
                        <p>{post.excerpt}</p>
                        <a href="#" style={{ display: 'inline-block', marginTop: '1rem' }}>Read more →</a>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Blog;
