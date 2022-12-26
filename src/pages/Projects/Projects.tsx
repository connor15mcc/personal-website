import './Projects.css';

import Project, { ProjectProp } from './../../components/Project/Project';
import data from './projectData';

interface Props {
  items?: Array<ProjectProp>;
}

const Projects = (props: Props) => {
  const loadedProjects = data;
  return (
    <>
      {loadedProjects && (
        <div className="grid-container">
          {loadedProjects.map((elt, idx) => (
            <Project {...elt} key={idx}></Project>
          ))}
        </div>
      )}
    </>
  );
};

export default Projects;
