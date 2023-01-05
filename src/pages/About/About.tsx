import './About.css';

import { Link } from 'react-router-dom';

const About = () => {
  // const navigate = useNavigate();
  return (
    <div id="about">
      <div className="about-content">
        <p className="about-paragraph">
          My name is Connor McCarthy and I am senior engineering student at
          Cornell University currently looking for a full-time software
          engineering opportunity to join upon my graduation in May.
        </p>
        <p className="about-paragraph">
          I have experience working with large scale distributed systems at{' '}
          <Link to="/#Lyft">Lyft</Link>, where I worked with the GraphQL team to
          improve the quality of experience for engineers interacting with
          Lyft&apos;s federated GraphQL service. The summer prior, I joined the
          Places team at <Link to="/#SafeGraph">SafeGraph</Link>, helping to
          improve the deduplication algorithm and pipeline responsible for their{' '}
          <a href="https://www.safegraph.com/blog/the-importance-of-reliable-accurate-and-timely-open-and-close-metadata-for-pois">
            &quot;open/closed&quot;
          </a>{' '}
          product.
        </p>
        <p className="about-paragraph">
          I have greatly enjoyed the classes I&apos;ve taken{' '}
          <Link to="/#Cornell">thus far at Cornell</Link> and have excelled in
          them. I find problems related to optimizing the efficenciency of
          marketplaces through incentives particularly interesting and have
          organized minors in{' '}
          <a href="https://business.cornell.edu/programs/undergraduate/minors/business-engineers/">
            business
          </a>{' '}
          and{' '}
          <a href="https://www.orie.cornell.edu/orie/programs/undergraduate-programs/ore-minors">
            operations research
          </a>{' '}
          research to pursue this interest. In addition, I&apos;ve taken
          advanced classes in machine learning, computer vision, algorithms, and
          database systems, which I look forward to applying throughout my
          career.
        </p>
        <p className="about-paragraph">
          I am interested in building elegant solutions to complex problems, but
          more importantly, I like to learn, and I learn well. I&apos;m curious
          by nature, and an engineer by trade. These two attributes drive me to
          be a lifelong learner, continually in the search for more effective
          solutions to problems.
        </p>
        <p className="about-paragraph" style={{ paddingBottom: 0 }}>
          Please feel free to reach out to me at{' '}
          <a href="mailto:connor15mcc@gmail.com">connor15mcc@gmail.com</a> or{' '}
          <a href="https://www.linkedin.com/in/connormccarthy15/">
            connect with me on Linkedin
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
