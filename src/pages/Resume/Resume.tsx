import './Resume.css';

import Education from './Education';
import Experience from './Experience';
import SkillsInterests from './SkillsInterests';

const Resume = (props: {
  name: string;
  data: {
    university: {
      institution: string;
      college: string;
      location: string;
      degree: string;
      end_date: string;
      link?: string;
      coursework: {
        type: string;
        classes: {
          name: string;
          number: string;
          link?: string;
        }[];
      }[];
    };
    professional_experience: {
      name: string;
      date: string;
      company: string;
      location: string;
      title: string;
      start_date: string;
      end_date: string;
      link?: string;
      highlights?: string[];
      tech_recap?: string;
    }[];
    extracurricular_experience: {
      name: string;
      date: string;
      company: string;
      location: string;
      title: string;
      start_date: string;
      end_date: string;
      link?: string;
      highlights?: string[];
      tech_recap?: string;
    }[];
    skills: string[];
    projects: {
      weight?: number;
      title: string;
      imagePath: string;
      date: Date;
      link?: string;
      resumeDesc?: string;
      desc?: string;
    }[];
    other: string;
  };
}) => {
  return (
    <div className="resume-section" id="experience">
      <h1 className="resume-title">{props.name}</h1>
      <Education data={props.data.university} />
      <Experience
        type="Professional"
        data={props.data.professional_experience}
      />
      <Experience
        type="Extracurricular"
        data={props.data.extracurricular_experience}
      />
      <SkillsInterests
        skills={props.data.skills}
        projects={props.data.projects}
        other={props.data.other}
      />
    </div>
  );
};

export default Resume;
