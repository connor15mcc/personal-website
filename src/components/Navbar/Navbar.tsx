import './Navbar.css';

import classNames from 'classnames';
import { debounce } from 'lodash';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

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

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const debouncedNavVis = debounce(() => {
    const currentScrollPos = window.scrollY;

    setVisible(prevScrollPos >= currentScrollPos || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 50);

  const handleScroll = () => {
    debouncedNavVis();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <header id="header" className={classNames({ hidden: !visible })}>
      <nav>
        <div className="nav-left">
          {routes
            .filter((l) => l.index)
            .map((l) => (
              <NavLink key={l.label} to={l.path}>
                {l.label}
              </NavLink>
            ))}
        </div>
        <div className="nav-right">
          {routes
            .filter((l) => !l.index)
            .map((l) => (
              <NavLink
                key={l.label}
                to={l.path}
                className={({ isActive }) => (isActive ? 'nav-active' : 'nav-inactive')}
              >
                {l.label}
              </NavLink>
            ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
