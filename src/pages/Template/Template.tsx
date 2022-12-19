import './Template.css';

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
    </HelmetProvider>
  );
};

export interface TemplateProps {
  pageName?: string;
  desc?: string;
  children?: React.ReactNode;
}

export default Template;
