import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ 
      padding: '1.5rem 0', 
      borderBottom: '1px solid var(--color-border)',
      marginBottom: '2rem'
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        <Link to="/" style={{ 
          fontSize: '1.5rem', 
          fontWeight: '700', 
          color: 'var(--color-text-primary)' 
        }}>
          Web Dous
        </Link>
        <ul style={{ 
          display: 'flex', 
          gap: '2rem', 
          listStyle: 'none' 
        }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cv">CV</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
