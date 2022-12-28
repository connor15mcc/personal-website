import './Template.css';

import { Github } from '@styled-icons/boxicons-logos/Github';
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin';
import { Mail } from '@styled-icons/entypo/Mail';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Navbar from './../../components/Navbar/Navbar';

const Template = (props: TemplateProps) => {
  return (
    <HelmetProvider>
      <Helmet
        titleTemplate="%s | Connor McCarthy"
        defaultTitle="Connor McCarthy"
        title={props.pageName}
      >
        <meta
          name="description"
          content={
            props.desc
              ? props.desc
              : "This is Connor McCarthy's portfolio website containing " +
                'his resume, projects, and contact information.'
          }
        />
      </Helmet>
      <Navbar />

      <div className="main-container">{props.children}</div>
      <footer className="about-contact-profiles">
        <a
          href="https://www.linkedin.com/in/connormccarthy15/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin size="1em"></Linkedin>
        </a>
        <a href="https://github.com/connor15mcc" target="_blank" rel="noreferrer">
          <Github size="1em"></Github>
        </a>
        <a href="mailto:connor15mcc@gmail.com" target="_blank" rel="noreferrer">
          <Mail size="1em"></Mail>
        </a>
      </footer>
    </HelmetProvider>
  );
};

export interface TemplateProps {
  pageName?: string;
  desc?: string;
  children?: React.ReactNode;
}

export default Template;
