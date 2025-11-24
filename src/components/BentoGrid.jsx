import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Shield, Database, Cloud } from 'lucide-react';

const BentoItem = ({ children, className, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay }}
        className={`clean-panel ${className}`}
        style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}
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
            gap: '1.5rem',
            padding: '4rem 0'
        }}>
            {/* Hero Section - Large */}
            <BentoItem className="hero" delay={0} style={{ gridColumn: 'span 2', gridRow: 'span 1' }}>
                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: '700', letterSpacing: '-0.03em' }}>
                        Technical Program Manager<br />
                        <span style={{ color: 'var(--color-text-secondary)', fontWeight: '400' }}>Cybersecurity & Cloud Architecture</span>
                    </h1>
                    <p style={{ fontSize: '1.15rem', marginBottom: '2.5rem', maxWidth: '90%', lineHeight: '1.7' }}>
                        Driving security strategy for high-assurance environments. Specializing in Zero Trust architecture, supply chain security, and cloud risk management at enterprise scale.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <Link to="/cv" className="btn">View Experience</Link>
                        <a href="mailto:jaimedoussinague@gmail.com" className="btn btn-outline">Contact</a>
                    </div>
                </div>
            </BentoItem>

            {/* Current Role */}
            <BentoItem delay={0.1} style={{ gridColumn: 'span 1' }}>
                <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>Current Role</h3>
                <div style={{ marginTop: 'auto' }}>
                    <p style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>Google</p>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)' }}>TPM - Google Cloud CISO Security</p>
                </div>
            </BentoItem>

            {/* Expertise */}
            <BentoItem delay={0.2} style={{ gridColumn: 'span 1' }}>
                <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>Core Competencies</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem' }}>
                        <Cloud size={18} color="var(--color-accent)" /> Cloud Security (Azure/GCP)
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem' }}>
                        <Shield size={18} color="var(--color-accent)" /> Zero Trust Architecture
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem' }}>
                        <Database size={18} color="var(--color-accent)" /> Risk Management
                    </li>
                </ul>
            </BentoItem>

            {/* Certifications */}
            <BentoItem delay={0.3} style={{ gridColumn: 'span 1' }}>
                <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>Certifications</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {['CISSP', 'CCSP', 'AZ-500', 'AZ-305', 'DP-203', 'AI-100'].map(cert => (
                        <span key={cert} style={{
                            fontSize: '0.9rem',
                            padding: '0.35rem 0.75rem',
                            border: '1px solid var(--color-border)',
                            borderRadius: '0.25rem',
                            fontWeight: '500',
                            color: 'var(--color-text-primary)',
                            background: 'var(--color-bg-primary)'
                        }}>
                            {cert}
                        </span>
                    ))}
                </div>
            </BentoItem>

            {/* Connect */}
            <BentoItem delay={0.4} style={{ gridColumn: 'span 1' }}>
                <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>Connect</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '1rem', fontWeight: '500' }}>
                        LinkedIn <ArrowUpRight size={18} color="var(--color-text-secondary)" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '1rem', fontWeight: '500' }}>
                        GitHub <ArrowUpRight size={18} color="var(--color-text-secondary)" />
                    </a>
                </div>
            </BentoItem>
        </div>
    );
};

export default BentoGrid;
