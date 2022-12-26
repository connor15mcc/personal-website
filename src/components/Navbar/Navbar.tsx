import './Navbar.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const routes = [
    {
      index: true,
      label: 'Connor McCarthy',
      path: '/',
    },
    {
      label: 'Experience',
      path: '/#experience',
    },
    {
      label: 'Projects',
      path: '/projects',
    },
    {
      label: 'About',
      path: '/about',
    },
  ];

  return (
    <header id="header">
      <nav>
        <div className="nav-left">
          {routes
            .filter((l) => l.index)
            .map((l) => (
              <Link key={l.label} to={l.path}>
                {l.label}
              </Link>
            ))}
        </div>
        <div className="nav-right">
          {routes
            .filter((l) => !l.index)
            .map((l) => (
              <Link key={l.label} to={l.path}>
                {l.label}
              </Link>
            ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
