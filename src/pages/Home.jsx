import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
            <section style={{
                padding: '6rem 0',
                textAlign: 'center'
            }}>
                <h1 style={{
                    fontSize: '3.5rem',
                    fontWeight: '800',
                    marginBottom: '1.5rem',
                    background: 'linear-gradient(to right, var(--color-text-primary), var(--color-accent))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Hello, I'm Web Dous
                </h1>
                <p style={{
                    fontSize: '1.25rem',
                    maxWidth: '600px',
                    margin: '0 auto 2.5rem',
                    color: 'var(--color-text-secondary)'
                }}>
                    I build modern, accessible, and performant web applications.
                    Welcome to my digital garden.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <Link to="/cv" className="btn">View CV</Link>
                    <Link to="/blog" className="btn" style={{
                        backgroundColor: 'transparent',
                        border: '1px solid var(--color-border)',
                        color: 'var(--color-text-primary)'
                    }}>Read Blog</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
