import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home' },
    { path: '/cv', label: 'CV' },
    { path: '/blog', label: 'Blog' },
  ];

  return (
    <nav style={{
      padding: '1.5rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backgroundColor: 'rgba(249, 250, 251, 0.8)', /* Off-white with opacity */
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--color-border)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{
          fontFamily: 'var(--font-header)',
          fontSize: '1.25rem',
          fontWeight: '700',
          letterSpacing: '-0.02em',
          color: 'var(--color-text-primary)'
        }}>
          Jaime Doussinague
        </Link>
        <ul style={{
          display: 'flex',
          gap: '2.5rem',
          listStyle: 'none'
        }}>
          {links.map(({ path, label }) => (
            <li key={path}>
              <Link to={path} style={{
                fontSize: '1rem',
                color: location.pathname === path ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                fontWeight: location.pathname === path ? '600' : '500',
                padding: '0.5rem 0' /* Touch target */
              }}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
