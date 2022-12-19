import './Navbar.css';

import React from 'react';

const Navbar = () => {
  const routes = [
    {
      index: true,
      label: 'Connor McCarthy',
      path: '/resume',
    },
    {
      label: 'Experience',
      path: '/experience',
    },
    {
      label: 'Projects',
      path: '/projects',
    },
    {
      label: 'About',
      path: '/contact',
    },
  ];

  return (
    <header id="header">
      <nav>
        <div className="nav-left">
          {routes
            .filter((l) => l.index)
            .map((l) => (
              <a key={l.label} href={l.path}>
                {l.label}
              </a>
            ))}
        </div>
        <div className="nav-right">
          {routes
            .filter((l) => !l.index)
            .map((l) => (
              <a key={l.label} href={l.path}>
                {l.label}
              </a>
            ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
