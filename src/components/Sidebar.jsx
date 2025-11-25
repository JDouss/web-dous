import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Sidebar = () => {
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'experience', 'projects'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveSection(section);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header style={{
            paddingTop: '6rem',
            paddingBottom: '6rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100vh',
            position: 'sticky',
            top: 0
        }}>
            <div>
                <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
                    Jaime Doussinague
                </h1>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '500', marginBottom: '1rem', color: 'var(--color-text-primary)' }}>
                    Technical Program Manager
                </h2>
                <p style={{ maxWidth: '300px', marginBottom: '4rem' }}>
                    I build accessible, pixel-perfect digital experiences that bridge complex security architecture with business strategy.
                </p>

                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {['About', 'Experience', 'Projects'].map((item) => {
                        const id = item.toLowerCase();
                        return (
                            <a
                                key={id}
                                href={`#${id}`}
                                className={`nav-link ${activeSection === id ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(id);
                                }}
                            >
                                <span className="nav-link-line"></span>
                                {item}
                            </a>
                        );
                    })}
                </nav>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', marginTop: 'auto' }}>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin size={24} />
                </a>
                <a href="mailto:jaimedoussinague@gmail.com" aria-label="Email">
                    <Mail size={24} />
                </a>
            </div>
        </header>
    );
};

export default Sidebar;
