import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code, Shield, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const BentoItem = ({ children, className, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className={`glass-panel ${className}`}
        style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}
    >
        {children}
    </motion.div>
);

const BentoGrid = () => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(3, auto)',
            gap: '1.5rem',
            padding: '2rem 0'
        }}>
            {/* Hero Section - Large */}
            <BentoItem className="hero" delay={0} style={{ gridColumn: 'span 2', gridRow: 'span 2' }}>
                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h1 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Cybersecurity TPM &<br />Web Engineer
                    </h1>
                    <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                        Bridging the gap between complex security architecture and seamless user experience.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <Link to="/cv" className="btn">View Experience</Link>
                        <a href="mailto:contact@example.com" className="btn" style={{ background: 'transparent', border: '1px solid var(--color-border)' }}>Contact Me</a>
                    </div>
                </div>
            </BentoItem>

            {/* Tech Stack */}
            <BentoItem delay={0.1} style={{ gridColumn: 'span 1' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Code size={20} color="var(--color-accent)" /> Stack
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                    {['React', 'Node.js', 'Python', 'AWS', 'Docker'].map(tech => (
                        <span key={tech} style={{
                            fontSize: '0.8rem',
                            padding: '0.25rem 0.75rem',
                            background: 'var(--color-bg-primary)',
                            borderRadius: '1rem',
                            border: '1px solid var(--color-border)'
                        }}>
                            {tech}
                        </span>
                    ))}
                </div>
            </BentoItem>

            {/* Security Focus */}
            <BentoItem delay={0.2} style={{ gridColumn: 'span 1' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Shield size={20} color="var(--color-accent-secondary)" /> Security
                </h3>
                <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
                    Focusing on AppSec, Cloud Security, and Zero Trust Architecture.
                </p>
            </BentoItem>

            {/* Socials */}
            <BentoItem delay={0.3} style={{ gridColumn: 'span 1' }}>
                <h3>Connect</h3>
                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                    <a href="#" style={{ color: 'var(--color-text-secondary)' }}><Github /></a>
                    <a href="#" style={{ color: 'var(--color-text-secondary)' }}><Linkedin /></a>
                    <a href="#" style={{ color: 'var(--color-text-secondary)' }}><Mail /></a>
                </div>
            </BentoItem>

            {/* Current Role */}
            <BentoItem delay={0.4} style={{ gridColumn: 'span 1' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Cpu size={20} /> Current
                </h3>
                <div style={{ marginTop: 'auto' }}>
                    <p style={{ fontWeight: '600', color: 'var(--color-text-primary)', marginBottom: '0' }}>TPM @ Big Tech</p>
                    <p style={{ fontSize: '0.8rem' }}>Driving security initiatives</p>
                </div>
            </BentoItem>

            {/* Blog Preview */}
            <BentoItem delay={0.5} style={{ gridColumn: 'span 4' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h3>Latest Insights</h3>
                    <Link to="/blog" style={{ fontSize: '0.9rem' }}>View all &rarr;</Link>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                    {[1, 2, 3].map(i => (
                        <div key={i} style={{
                            background: 'var(--color-bg-primary)',
                            padding: '1rem',
                            borderRadius: '0.5rem',
                            border: '1px solid var(--color-border)'
                        }}>
                            <p style={{ fontSize: '0.8rem', color: 'var(--color-accent)' }}>Nov 24, 2025</p>
                            <p style={{ fontWeight: '600' }}>The Future of AI in Cybersecurity</p>
                        </div>
                    ))}
                </div>
            </BentoItem>
        </div>
    );
};

export default BentoGrid;
