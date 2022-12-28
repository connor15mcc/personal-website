import './Home.css';

import { KeyboardArrowRight } from '@styled-icons/material-rounded/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div id="home">
      <p className="home-intro">Hi, my name is</p>
      <div className="home-firstline">
        <img src="me.jpg" alt="Connor McCarthy" className="home-picture" />
        <h1 className="home-name">
          Connor<br></br>McCarthy
        </h1>
      </div>
      <p className="home-tagline">
        I&apos;m a senior engineering student at Cornell University studying computer
        science and seeking industry experience. I&apos;m especially passionate about
        building robust, scalable software and in the intersection of software engineering
        and operations research.
      </p>
      <div>
        <button className="home-button" onClick={() => navigate('/#experience')}>
          View Experience
          <KeyboardArrowRight size="2em" className="arrow"></KeyboardArrowRight>
        </button>
      </div>
    </div>
  );
};

export default Home;
