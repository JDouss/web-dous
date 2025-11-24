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
      padding: '2rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backgroundColor: 'var(--color-bg-primary)',
      borderBottom: '1px solid var(--color-border)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{
          fontSize: '1.1rem',
          fontWeight: '600',
          letterSpacing: '-0.02em'
        }}>
          Jaime Doussinague
        </Link>
        <ul style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none'
        }}>
          {links.map(({ path, label }) => (
            <li key={path}>
              <Link to={path} style={{
                fontSize: '0.95rem',
                color: location.pathname === path ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                fontWeight: location.pathname === path ? '500' : '400'
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
