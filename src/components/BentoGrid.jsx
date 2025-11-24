import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const BentoItem = ({ children, className, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay }}
        className={`clean-panel ${className}`}
        style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}
    >
        {children}
    </motion.div>
);

const BentoGrid = () => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'auto auto',
            gap: '1rem',
            padding: '2rem 0'
        }}>
            {/* Hero Section - Large */}
            <BentoItem className="hero" delay={0} style={{ gridColumn: 'span 2', gridRow: 'span 1' }}>
                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h1 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: '500' }}>
                        Technical Program Manager<br />
                        <span style={{ color: 'var(--color-text-secondary)' }}>Cybersecurity & Cloud Architecture</span>
                    </h1>
                    <p style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '90%' }}>
                        Specializing in securing high-assurance environments, Zero Trust architecture, and cloud risk management at enterprise scale.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <Link to="/cv" className="btn">View Experience</Link>
                        <a href="mailto:jaimedoussinague@gmail.com" className="btn btn-outline">Contact</a>
                    </div>
                </div>
            </BentoItem>

            {/* Current Role */}
            <BentoItem delay={0.1} style={{ gridColumn: 'span 1' }}>
                <h3 style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>Current Role</h3>
                <div style={{ marginTop: 'auto' }}>
                    <p style={{ fontSize: '1.25rem', fontWeight: '500', marginBottom: '0.25rem' }}>Google</p>
                    <p style={{ fontSize: '1rem' }}>TPM - Google Cloud CISO Security</p>
                </div>
            </BentoItem>

            {/* Tech Stack - Simplified */}
            <BentoItem delay={0.2} style={{ gridColumn: 'span 1' }}>
                <h3 style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>Expertise</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <li>Cloud Security (Azure/GCP)</li>
                    <li>Zero Trust Architecture</li>
                    <li>Risk Management</li>
                    <li>DevSecOps</li>
                </ul>
            </BentoItem>

            {/* Certifications */}
            <BentoItem delay={0.3} style={{ gridColumn: 'span 1' }}>
                <h3 style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>Certifications</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {['CISSP', 'CCSP', 'AZ-500', 'AZ-305'].map(cert => (
                        <span key={cert} style={{
                            fontSize: '0.85rem',
                            padding: '0.25rem 0.5rem',
                            border: '1px solid var(--color-border)',
                            borderRadius: '0.25rem'
                        }}>
                            {cert}
                        </span>
                    ))}
                </div>
            </BentoItem>

            {/* Socials/Links */}
            <BentoItem delay={0.4} style={{ gridColumn: 'span 1' }}>
                <h3 style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>Connect</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        LinkedIn <ArrowUpRight size={16} />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        GitHub <ArrowUpRight size={16} />
                    </a>
                </div>
            </BentoItem>
        </div>
    );
};

export default BentoGrid;
