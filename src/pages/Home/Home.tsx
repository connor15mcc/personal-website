import './Home.css';

import { KeyboardArrowRight } from '@styled-icons/material-rounded/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';

const Home = (props: {
  data: {
    name: string;
    tagline: string;
  };
}) => {
  const navigate = useNavigate();

  const name = props.data.name.split(' ');
  return (
    <div id="home">
      <p className="home-intro">Hi, my name is</p>
      <div className="home-firstline">
        <img src="me.jpg" alt={props.data.name} className="home-picture" />
        <h1 className="home-name">
          {name[0]}
          <br></br>
          {name[1]}
        </h1>
      </div>
      <p className="home-tagline">{props.data.tagline}</p>
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
