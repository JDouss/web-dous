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
                gap: '2rem',
                marginBottom: '3rem',
                alignItems: 'flex-start'
            }}
        >
            <div style={{
                minWidth: '120px',
                textAlign: 'right',
                paddingTop: '0.25rem',
                color: 'var(--color-text-secondary)',
                fontSize: '0.9rem'
            }}>
                {date}
            </div>

            <div style={{ flex: 1 }}>
                <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '600' }}>{title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.75rem' }}>{subtitle}</p>
                <div style={{ fontSize: '1rem', lineHeight: '1.6', color: 'var(--color-text-primary)' }}>
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
                <ul style={{ paddingLeft: '1rem', margin: 0 }}>
                    <li>Led the Security Monitoring pillar for the organization, driving detection strategy and KPI compliance for critical high-security environments.</li>
                    <li>Defined code signing client strategy and set tenant isolation security requirements for over 700 customers. Achieved 94% adoption of secure auth methods, significantly mitigating supply chain risks.</li>
                    <li>Managed risk assessments for High Security workloads, maintaining a risk register and ensuring compliance with strict security standards to support proactive risk management.</li>
                </ul>
            )
        },
        {
            title: 'Cloud Solution Architect - Manufacturing',
            subtitle: 'Microsoft',
            date: 'Previous',
            description: (
                <ul style={{ paddingLeft: '1rem', margin: 0 }}>
                    <li>Designed enterprise-scale cloud architectures compliant with strict security requirements, advising on secure landing zones and Zero Trust principles.</li>
                    <li>Led the manufacturing vertical, architecting tailored cloud solutions for Infrastructure, Energy, and Industrial sectors.</li>
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
            title: 'Double Master’s Degree in Industrial Engineering',
            subtitle: 'Universidad Pontificia de Comillas (ICAI)',
            date: 'Education',
            description: 'Specialized in Connected Industry.'
        }
    ];

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 0' }}>
            {experiences.map((exp, index) => (
                <TimelineItem key={index} {...exp} index={index} />
            ))}
        </div>
    );
};

export default Timeline;
