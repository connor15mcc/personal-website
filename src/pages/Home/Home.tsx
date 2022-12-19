import './Home.css';

import { KeyboardArrowRight } from '@styled-icons/material-rounded/KeyboardArrowRight';
import React from 'react';

const Home = () => {
  return (
    <div id="home">
      <p className="intro">Hi, my name is</p>
      <h1 className="name">
        Connor<br></br>McCarthy
      </h1>
      <p className="tagline">
        I&apos;m a senior engineering student at Cornell University studying Computer
        Science and seeking industry experience. I&apos;m especially passionate about
        building robust, scalable software and in the intersection of software engineering
        and operations research.
      </p>
      <div>
        <button>
          View Experience
          <KeyboardArrowRight size="2em" className="arrow"></KeyboardArrowRight>
        </button>
      </div>
    </div>
  );
};

export default Home;
