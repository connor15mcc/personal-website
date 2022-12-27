import 'css-resetter';
import './App.css';

import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import About from './pages/About/About';
import Resume from './pages/Experience/Resume';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
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
  return (
    <Template>
      <Suspense fallback={<Home />}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home></Home>
                <Resume></Resume>
              </>
            }
          />
          <Route path="/projects" element={<Projects></Projects>} />
          <Route path="/about" element={<About></About>} />
        </Routes>
      </Suspense>
    </Template>
  );
}

export default App;
