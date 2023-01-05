import 'css-resetter';
import './App.css';

import { Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import data from './data';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Resume from './pages/Resume/Resume';
import Template from './pages/Template/Template';

function App() {
  // attr: https://stackoverflow.com/questions/40280369/use-anchors-with-react-router
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change

  const homePage = (
    <>
      <Home {...data.basics} />
      <Resume {...data} name={data.basics.name} />
    </>
  );

  return (
    <Template>
      <Suspense fallback={homePage}>
        <Routes>
          <Route path="/" element={homePage} />
          <Route path="/projects" element={<Projects data={data.projects} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Template>
  );
}

export default App;
