import { Experience as ExperienceType } from './../../data';
import ResumeItem from './ResumeItem';

const Experience = (props: { experiences: ExperienceType[]; type: string }) => {
  return (
    <>
      <div className="resume-subsection">
        <div className="resume-subsection-title">{props.type}</div>
        {props.experiences.map((elt) => (
          <ResumeItem
            key={elt.company + elt.start_date}
            company={elt.company}
            location={elt.location}
            title={elt.title}
            start_date={elt.start_date}
            end_date={elt.end_date}
            link={elt.link}
            highlights={elt.highlights}
            tech_recap={elt.tech_recap}
          />
        ))}
      </div>
    </>
  );
};

export default Experience;
