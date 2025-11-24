import Timeline from '../components/Timeline';
import { motion } from 'framer-motion';

const CV = () => {
    return (
        <div className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
                <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Professional Experience</h1>
                <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                    A timeline of my journey in Cybersecurity and Technical Program Management.
                </p>
            </motion.div>

            <Timeline />
        </div>
    );
};

export default CV;
