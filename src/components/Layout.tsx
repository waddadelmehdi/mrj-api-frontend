import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="app-container">
      <div className="main-card">
        <div className="sidebar">
          <div className="logo-section">
            
                <img src="/images/logo.png" alt="Logo" className="logo-image" />
                
        
          </div>
          <nav className="nav-menu">
            <Link 
              to="/" 
              className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/accounts" 
              className={`nav-item ${location.pathname === '/accounts' ? 'active' : ''}`}
            >
              Accounts
            </Link>
            <Link 
              to="/about" 
              className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}
            >
              About
            </Link>
          </nav>
          <div className="footer-text">
            all right reserve 2025 w.mehdi
          </div>
        </div>
        <div className="content-area">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;