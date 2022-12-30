import './Projects.css';

import Project, { ProjectProp } from './../../components/Project/Project';

interface Props {
  data?: Array<ProjectProp>;
}

const Projects = (props: Props) => {
  return (
    <>
      {props.data && (
        <div className="grid-container">
          {props.data.map((elt, idx) => (
            <Project {...elt} key={idx}></Project>
          ))}
        </div>
      )}
    </>
  );
};

export default Projects;
