import './Resume.css';

import Education from './Education';
import ExtracurricularExp from './ExtracurricularExp';
import ProfessionalExp from './ProfessionalExp';
import SkillsInterests from './SkillsInterests';

const Experience = () => {
  return (
    <div className="resume-section" id="resume-section">
      <h1 className="resume-title">Connor McCarthy</h1>
      <Education></Education>
      <ProfessionalExp></ProfessionalExp>
      <ExtracurricularExp></ExtracurricularExp>
      <SkillsInterests></SkillsInterests>
    </div>
  );
};

export default Experience;
