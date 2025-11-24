const Footer = () => {
    return (
        <footer style={{
            padding: '2rem 0',
            marginTop: 'auto',
            borderTop: '1px solid var(--color-border)',
            textAlign: 'center',
            color: 'var(--color-text-secondary)'
        }}>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Web Dous. All rights reserved.</p>
                <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="mailto:contact@example.com">Email</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
