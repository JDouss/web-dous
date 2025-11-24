import { motion } from 'framer-motion';

const TimelineItem = ({ title, subtitle, date, description, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            style={{
                display: 'flex',
                gap: '3rem',
                marginBottom: '4rem',
                alignItems: 'flex-start',
                position: 'relative'
            }}
        >
            {/* Date Column */}
            <div style={{
                minWidth: '140px',
                textAlign: 'right',
                paddingTop: '0.25rem',
                color: 'var(--color-text-secondary)',
                fontSize: '0.95rem',
                fontWeight: '500',
                fontFamily: 'var(--font-header)'
            }}>
                {date}
            </div>

            {/* Content Column */}
            <div style={{ flex: 1, paddingBottom: '2rem', borderBottom: '1px solid var(--color-border)' }}>
                <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.25rem' }}>{title}</h3>
                <p style={{ color: 'var(--color-accent)', fontWeight: '600', marginBottom: '1rem', fontSize: '1rem' }}>{subtitle}</p>
                <div style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-primary)' }}>
                    {description}
                </div>
            </div>
        </motion.div>
    );
};

const Timeline = () => {
    const experiences = [
        {
            title: 'Technical Program Manager – Google Cloud CISO Security',
            subtitle: 'Google',
            date: 'Present',
            description: 'Securing Google Cloud.'
        },
        {
            title: 'Technical Program Manager – High Security Environments',
            subtitle: 'Microsoft',
            date: 'Previous',
            description: (
                <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                    <li style={{ marginBottom: '0.5rem' }}>Drove program strategy for proactive security detection and monitoring for high-value environments.</li>
                    <li style={{ marginBottom: '0.5rem' }}>Developed and led the adoption strategy for core security requirements across large-scale distributed services, mitigating supply chain risks across numerous tenant customers.</li>
                    <li>Managed risk assessments for High Security workloads, maintaining a risk register and ensuring compliance with strict security standards to support proactive risk management.</li>
                </ul>
            )
        },
        {
            title: 'Cloud Solution Architect - Manufacturing',
            subtitle: 'Microsoft',
            date: 'Previous',
            description: (
                <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                    <li style={{ marginBottom: '0.5rem' }}>Designed enterprise-scale cloud architectures compliant with strict security requirements, advising on secure landing zones and Zero Trust principles.</li>
                    <li style={{ marginBottom: '0.5rem' }}>Led the manufacturing vertical, architecting tailored cloud solutions for Infrastructure, Energy, and Industrial sectors.</li>
                    <li>Performed cybersecurity risk assessments for data and infrastructure, elaborating mitigation plans for C-level executives to ensure availability of critical applications.</li>
                </ul>
            )
        },
        {
            title: 'Data Analyst Intern',
            subtitle: 'CoverWallet',
            date: 'Previous',
            description: 'Data analysis and reporting.'
        },
        {
            title: 'GBS Analytics Intern',
            subtitle: 'IBM',
            date: 'Previous',
            description: 'Analytics support.'
        },
        {
            title: 'Double Master’s Degree in Industrial Engineering & Connected Industry',
            subtitle: 'Universidad Pontificia de Comillas (ICAI)',
            date: 'Education',
            description: 'Specialized in Connected Industry.'
        }
    ];

    return (
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 0' }}>
            {experiences.map((exp, index) => (
                <TimelineItem key={index} {...exp} index={index} />
            ))}
        </div>
    );
};

export default Timeline;
