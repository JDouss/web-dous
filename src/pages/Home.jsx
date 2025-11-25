import ExperienceCard from '../components/ExperienceCard';
import { ArrowRight } from 'lucide-react';

const Home = () => {
    const experiences = [
        {
            date: 'PRESENT',
            title: 'Technical Program Manager',
            company: 'Google',
            description: 'Driving security strategy for Google Cloud CISO. Leading programs for proactive security detection and monitoring in high-assurance environments.',
            skills: ['Google Cloud', 'Security Strategy', 'Risk Management', 'Zero Trust'],
            link: 'https://google.com'
        },
        {
            date: 'PREVIOUS',
            title: 'Technical Program Manager',
            company: 'Microsoft',
            description: 'Led the Security Monitoring pillar for high-security environments. Defined code signing strategy and tenant isolation requirements for over 700 customers, achieving 94% adoption of secure auth methods.',
            skills: ['Azure', 'Security Monitoring', 'Compliance', 'Program Management'],
            link: 'https://microsoft.com'
        },
        {
            date: 'PREVIOUS',
            title: 'Cloud Solution Architect',
            company: 'Microsoft',
            description: 'Architected tailored cloud solutions for Manufacturing and Energy sectors. Designed enterprise-scale secure landing zones and performed cybersecurity risk assessments for C-level executives.',
            skills: ['Cloud Architecture', 'Manufacturing', 'Cybersecurity Assessment'],
            link: 'https://microsoft.com'
        }
    ];

    const projects = [
        {
            date: '2024',
            title: 'Personal Website v6',
            company: 'Project',
            description: 'A minimalist, accessible personal portfolio designed with React and a custom light theme. Features a split-screen layout and scroll-spy navigation.',
            skills: ['React', 'Vite', 'CSS Modules', 'GitHub Pages'],
            link: 'https://github.com/jdouss/web-dous'
        }
    ];

    return (
        <div>
            {/* About Section */}
            <section id="about" style={{ marginBottom: '6rem', scrollMarginTop: '6rem' }}>
                <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--color-text-secondary)' }}>
                    Back in 2018, I started my journey in data analytics, which eventually led me to the world of <span style={{ color: 'var(--color-text-primary)', fontWeight: '600' }}>cloud security</span>. Fast-forward to today, and I’ve had the privilege of building security programs for two of the largest tech companies in the world: <span style={{ color: 'var(--color-text-primary)', fontWeight: '600' }}>Microsoft</span> and <span style={{ color: 'var(--color-text-primary)', fontWeight: '600' }}>Google</span>.
                </p>
                <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--color-text-secondary)' }}>
                    My main focus these days is bridging the gap between complex technical security requirements and strategic business goals. I enjoy securing high-assurance environments and defining the future of <span style={{ color: 'var(--color-text-primary)', fontWeight: '600' }}>Zero Trust architecture</span> at scale.
                </p>
                <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)' }}>
                    When I’m not at the computer, I’m usually hanging out with my family, reading about history, or exploring new cities with my camera.
                </p>
            </section>

            {/* Experience Section */}
            <section id="experience" style={{ marginBottom: '6rem', scrollMarginTop: '6rem' }}>
                <h2 style={{
                    fontSize: '0.9rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '2rem',
                    display: 'none' /* Hidden on desktop as per design, visible on mobile via CSS if needed */
                }} className="section-header">
                    Experience
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} {...exp} />
                    ))}
                </div>

                <div style={{ marginTop: '2rem' }}>
                    <a href="/web-dous/cv" className="nav-link" style={{ display: 'inline-flex', gap: '0.5rem' }}>
                        View Full Résumé <ArrowRight size={16} />
                    </a>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" style={{ marginBottom: '6rem', scrollMarginTop: '6rem' }}>
                <h2 style={{
                    fontSize: '0.9rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '2rem',
                    display: 'none'
                }} className="section-header">
                    Projects
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {projects.map((project, index) => (
                        <ExperienceCard key={index} {...project} />
                    ))}
                </div>
            </section>

            <footer style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', maxWidth: '400px' }}>
                <p>
                    Loosely designed in Figma and coded in Visual Studio Code. Built with React and Vite, deployed with GitHub Pages. All text is set in the Inter typeface.
                </p>
            </footer>
        </div>
    );
};

export default Home;
