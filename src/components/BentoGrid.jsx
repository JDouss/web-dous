import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Shield, Database, Cloud, MapPin, Camera } from 'lucide-react';

const BentoItem = ({ children, className, delay = 0, style }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay }}
        className={`clean-panel ${className}`}
        style={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            position: 'relative',
            ...style
        }}
    >
        {children}
    </motion.div>
);

const BentoGrid = () => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            autoRows: 'minmax(300px, auto)',
            gap: '1.5rem',
            padding: '4rem 0'
        }}>

            {/* Profile / Hero Section - Name Focused */}
            <BentoItem style={{ gridColumn: 'span 8', minHeight: '500px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', zIndex: 2 }}>
                    <div>
                        <h1 style={{
                            fontSize: '4.5rem',
                            fontWeight: '700',
                            letterSpacing: '-0.04em',
                            lineHeight: '1',
                            marginBottom: '1.5rem'
                        }}>
                            Jaime<br />Doussinague
                        </h1>
                        <p style={{ fontSize: '1.25rem', maxWidth: '80%', color: 'var(--color-text-secondary)' }}>
                            Technical Program Manager based in Spain.
                            <br />
                            Bridging complex security architecture with business strategy.
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <Link to="/cv" className="btn">View Experience</Link>
                        <a href="mailto:jaimedoussinague@gmail.com" className="btn btn-outline">Get in Touch</a>
                    </div>
                </div>
            </BentoItem>

            {/* Profile Image */}
            <BentoItem style={{ gridColumn: 'span 4', padding: 0, border: 'none', background: 'transparent' }} delay={0.1}>
                <img
                    src="/web-dous/images/profile.jpg"
                    alt="Jaime Doussinague"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '0.5rem',
                        filter: 'grayscale(20%) contrast(110%)'
                    }}
                />
            </BentoItem>

            {/* Current Role - Wide Bar */}
            <BentoItem style={{ gridColumn: 'span 12', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', minHeight: 'auto', padding: '2.5rem' }} delay={0.2}>
                <div>
                    <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>Current Role</h3>
                    <p style={{ fontSize: '1.75rem', fontWeight: '600' }}>Google Cloud CISO Security</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)' }}>Technical Program Manager</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Securing the Cloud</p>
                </div>
            </BentoItem>

            {/* Aesthetic Image 1 - Temple */}
            <BentoItem style={{ gridColumn: 'span 6', padding: 0, minHeight: '400px' }} delay={0.3}>
                <img
                    src="/web-dous/images/travel-temple.jpg"
                    alt="Travel Photography"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                    }}
                />
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '2rem',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                    color: 'white'
                }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500' }}>
                        <Camera size={18} /> Photography
                    </p>
                </div>
            </BentoItem>

            {/* Core Competencies - Vertical List */}
            <BentoItem style={{ gridColumn: 'span 6' }} delay={0.4}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Core Competencies</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div style={{ padding: '0.5rem', background: 'var(--color-bg-primary)', borderRadius: '0.25rem' }}>
                            <Cloud size={20} color="var(--color-accent)" />
                        </div>
                        <div>
                            <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Cloud Security</h4>
                            <p style={{ fontSize: '0.9rem', margin: 0 }}>Azure & GCP Architecture</p>
                        </div>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div style={{ padding: '0.5rem', background: 'var(--color-bg-primary)', borderRadius: '0.25rem' }}>
                            <Shield size={20} color="var(--color-accent)" />
                        </div>
                        <div>
                            <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Zero Trust</h4>
                            <p style={{ fontSize: '0.9rem', margin: 0 }}>Identity & Access Strategy</p>
                        </div>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div style={{ padding: '0.5rem', background: 'var(--color-bg-primary)', borderRadius: '0.25rem' }}>
                            <Database size={20} color="var(--color-accent)" />
                        </div>
                        <div>
                            <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Risk Management</h4>
                            <p style={{ fontSize: '0.9rem', margin: 0 }}>High Assurance Environments</p>
                        </div>
                    </li>
                </ul>
            </BentoItem>

            {/* Aesthetic Image 2 - City */}
            <BentoItem style={{ gridColumn: 'span 4', padding: 0, minHeight: '300px' }} delay={0.5}>
                <img
                    src="/web-dous/images/travel-city.jpg"
                    alt="City Photography"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </BentoItem>

            {/* Location / Connect */}
            <BentoItem style={{ gridColumn: 'span 4', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} delay={0.6}>
                <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'var(--color-bg-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                }}>
                    <MapPin size={24} color="var(--color-accent)" />
                </div>
                <h3 style={{ marginBottom: '0.5rem' }}>Based in Spain</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>Available for global opportunities.</p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-primary)' }}>LinkedIn</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-primary)' }}>GitHub</a>
                </div>
            </BentoItem>

            {/* Certifications - Compact */}
            <BentoItem style={{ gridColumn: 'span 4' }} delay={0.7}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>Certifications</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {['CISSP', 'CCSP', 'AZ-500', 'AZ-305', 'DP-203'].map(cert => (
                        <span key={cert} style={{
                            fontSize: '0.8rem',
                            padding: '0.25rem 0.5rem',
                            border: '1px solid var(--color-border)',
                            borderRadius: '0.25rem',
                            background: 'var(--color-bg-primary)'
                        }}>
                            {cert}
                        </span>
                    ))}
                </div>
            </BentoItem>

        </div>
    );
};

export default BentoGrid;
