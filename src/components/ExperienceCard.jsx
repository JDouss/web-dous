import { ArrowUpRight } from 'lucide-react';

const ExperienceCard = ({ date, title, company, description, skills, link }) => {
    return (
        <div className="experience-card" onClick={() => link && window.open(link, '_blank')}>
            <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                <div style={{
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-secondary)',
                    letterSpacing: '0.05em',
                    marginBottom: '0.25rem'
                }}>
                    {date}
                </div>

                <div>
                    <h3 style={{
                        fontSize: '1rem',
                        marginBottom: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        {title} · {company}
                        {link && <ArrowUpRight size={14} style={{ marginTop: '2px' }} />}
                    </h3>
                    <div style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
                        {description}
                    </div>

                    {skills && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {skills.map(skill => (
                                <span key={skill} style={{
                                    fontSize: '0.75rem',
                                    padding: '0.25rem 0.75rem',
                                    backgroundColor: 'rgba(15, 23, 42, 0.05)',
                                    color: 'var(--color-accent)',
                                    borderRadius: '1rem',
                                    fontWeight: '500'
                                }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
