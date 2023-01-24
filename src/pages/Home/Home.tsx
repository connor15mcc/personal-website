import './Home.css';

import { KeyboardArrowRight } from '@styled-icons/material-rounded/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';

import { Basics } from './../../data';

const Home = (props: Basics) => {
  const navigate = useNavigate();

  const name = props.name.split(' ');
  return (
    <div id="home">
      <div className="home-firstline">
        <img src="me.jpg" alt={props.name} className="home-picture" />
        <h1 className="home-name">
          {name[0]}
          <br />
          {name[1]}
        </h1>
      </div>
      <p className="home-tagline">{props.tagline}</p>
      <div>
        <button
          className="home-button underline-hover"
          onClick={() => navigate('/#experience')}
        >
          View Experience
          <KeyboardArrowRight size="2em" className="arrow"></KeyboardArrowRight>
        </button>
      </div>
    </div>
  );
};

export default Home;
