import './About.css';

const About = () => {
  return (
    <div id="about">
      <div className="about-content">
        <p className="about-paragraph">
          My name is Connor McCarthy and I am senior engineering student at Cornell
          University studying computer science. I&apos;m currently seeking a full-time
          opportunity to kickstart my career, gain additional real-world experience, and
          positively impact an organization.
        </p>
        <p className="about-paragraph">I have experience working with ...</p>
        <p className="about-paragraph" style={{ paddingBottom: 0 }}>
          Please feel free to reach out at{' '}
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
