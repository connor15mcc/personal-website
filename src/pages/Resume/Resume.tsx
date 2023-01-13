import './Resume.css';

import { Resume as ResumeType } from './../../data';
import Education from './Education';
import Experience from './Experience';
import SkillsInterests from './SkillsInterests';

const Resume = (props: ResumeType & { name: string }) => {
  return (
    <div className="resume-section" id="experience">
      <h1 className="resume-title">{props.name}</h1>
      <Education {...props.university} />
      <Experience
        experiences={props.professional_experience}
        type="Professional Experience"
      />
      <Experience
        experiences={props.extracurricular_experience}
        type="Extracurricular Experience"
      />
      <Experience
        experiences={props.other_experience}
        type="Continual Learning"
      />
      <SkillsInterests
        skills={props.skills}
        projects={props.projects}
        other={props.other}
      />
    </div>
  );
};

export default Resume;
