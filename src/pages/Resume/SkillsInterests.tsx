import { useNavigate } from 'react-router-dom';

import Accordion from './../../components/Accordion/Accordion';
import DescList from './../../components/DescList/DescList';
import { Resume } from './../../data';

const SkillsInterests = (props: {
  skills: Resume['skills'];
  projects: Resume['projects'];
  other: Resume['other'];
}) => {
  const navigate = useNavigate();

  const displayedProjects = props.projects.filter(
    (elt) => elt.resumeDesc !== undefined
  );
  return (
    <>
      <div className="resume-subsection">
        <div className="resume-subsection-title">Skills &amp; Interests</div>
        <DescList
          items={[
            {
              label: 'Skills',
              content: props.skills.join(', ') + '.',
            },
            {
              label: 'Projects',
              content: (
                <Accordion
                  label={
                    displayedProjects.map((elt) => elt.resumeDesc).join('; ') +
                    '.'
                  }
                  expanded={props.projects
                    .filter((elt) => elt.resumeDesc !== undefined)
                    .map((elt) => (
                      // eslint-disable-next-line jsx-a11y/anchor-is-valid
                      <a
                        key={elt.resumeDesc}
                        onClick={() => navigate('/projects#' + elt.title)}
                        onKeyDown={() => navigate('/projects#' + elt.title)}
                        role="button"
                        tabIndex={-1}
                      >
                        {elt.resumeDesc}
                      </a>
                    ))}
                ></Accordion>
              ),
            },
            {
              label: 'Interests',
              content: props.other,
            },
          ]}
        ></DescList>
      </div>
    </>
  );
};

export default SkillsInterests;
