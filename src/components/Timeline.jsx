import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const TimelineItem = ({ title, subtitle, date, description, type = 'work', index }) => {
    const Icon = type === 'work' ? Briefcase : GraduationCap;

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            style={{
                display: 'flex',
                gap: '1.5rem',
                marginBottom: '2rem',
                position: 'relative'
            }}
        >
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2
                }}>
                    <Icon size={20} color="var(--color-accent)" />
                </div>
                <div style={{
                    width: '2px',
                    flex: 1,
                    background: 'var(--color-border)',
                    marginTop: '0.5rem'
                }} />
            </div>

            <div className="glass-panel" style={{ flex: 1, padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <h3 style={{ margin: 0 }}>{title}</h3>
                    <span style={{
                        fontSize: '0.85rem',
                        padding: '0.25rem 0.75rem',
                        background: 'var(--color-bg-primary)',
                        borderRadius: '1rem',
                        color: 'var(--color-accent)'
                    }}>
                        {date}
                    </span>
                </div>
                <p style={{ color: 'var(--color-text-primary)', fontWeight: '500', marginBottom: '0.5rem' }}>{subtitle}</p>
                <p style={{ fontSize: '0.95rem' }}>{description}</p>
            </div>
        </motion.div>
    );
};

const Timeline = () => {
    const experiences = [
        {
            title: 'Senior TPM - Cybersecurity',
            subtitle: 'Big Tech Corp',
            date: '2022 - Present',
            description: 'Leading cross-functional security initiatives, implementing Zero Trust architecture, and managing risk compliance for cloud infrastructure.',
            type: 'work'
        },
        {
            title: 'Security Engineer',
            subtitle: 'CyberDefense Inc',
            date: '2019 - 2022',
            description: 'Conducted penetration testing, vulnerability assessments, and automated security pipelines (DevSecOps).',
            type: 'work'
        },
        {
            title: 'MSc Cybersecurity',
            subtitle: 'Tech University',
            date: '2017 - 2019',
            description: 'Specialized in Cryptography and Network Security. Graduated with Distinction.',
            type: 'education'
        }
    ];

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {experiences.map((exp, index) => (
                <TimelineItem key={index} {...exp} index={index} />
            ))}
        </div>
    );
};

export default Timeline;
