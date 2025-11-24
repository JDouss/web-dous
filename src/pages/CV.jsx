const CV = () => {
    return (
        <div className="container">
            <h1 style={{ marginBottom: '2rem' }}>Curriculum Vitae</h1>

            <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: 'var(--color-accent)' }}>Experience</h2>
                <div style={{
                    borderLeft: '2px solid var(--color-border)',
                    paddingLeft: '1.5rem',
                    marginBottom: '2rem'
                }}>
                    <h3>Senior Web Developer</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Tech Corp | 2020 - Present</p>
                    <p>Leading frontend development for enterprise applications using React and TypeScript.</p>
                </div>
                <div style={{
                    borderLeft: '2px solid var(--color-border)',
                    paddingLeft: '1.5rem'
                }}>
                    <h3>Web Developer</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>StartUp Inc | 2018 - 2020</p>
                    <p>Full stack development using Node.js and React.</p>
                </div>
            </div>

            <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: 'var(--color-accent)' }}>Education</h2>
                <div style={{
                    borderLeft: '2px solid var(--color-border)',
                    paddingLeft: '1.5rem'
                }}>
                    <h3>BSc Computer Science</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>University of Technology | 2014 - 2018</p>
                </div>
            </div>

            <div>
                <h2 style={{ color: 'var(--color-accent)' }}>Skills</h2>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    {['React', 'JavaScript', 'TypeScript', 'Node.js', 'CSS', 'HTML', 'Git'].map(skill => (
                        <span key={skill} style={{
                            padding: '0.5rem 1rem',
                            backgroundColor: 'var(--color-bg-secondary)',
                            borderRadius: '2rem',
                            fontSize: '0.9rem'
                        }}>
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CV;
