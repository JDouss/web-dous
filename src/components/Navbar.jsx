import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Terminal, FileText, BookOpen } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home', icon: Terminal },
    { path: '/cv', label: 'CV', icon: FileText },
    { path: '/blog', label: 'Blog', icon: BookOpen },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1rem 0'
      }}
    >
      <div className="container glass-panel" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        borderRadius: '1rem'
      }}>
        <Link to="/" style={{
          fontSize: '1.25rem',
          fontWeight: '700',
          color: 'var(--color-text-primary)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <span style={{ color: 'var(--color-accent)' }}>&lt;</span>
          WebDous
          <span style={{ color: 'var(--color-accent)' }}>/&gt;</span>
        </Link>
        <ul style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none'
        }}>
          {links.map(({ path, label, icon: Icon }) => (
            <li key={path}>
              <Link to={path} style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: location.pathname === path ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                fontWeight: location.pathname === path ? '600' : '400'
              }}>
                <Icon size={18} />
                {label}
                {location.pathname === path && (
                  <motion.div
                    layoutId="underline"
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: 'var(--color-accent)',
                      borderRadius: '1px'
                    }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
