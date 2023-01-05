import { Experience as ExperienceType } from './../../data';
import ResumeItem from './ResumeItem';

const Experience = (props: { experiences: ExperienceType[]; type: string }) => {
  return (
    <>
      <div className="resume-subsection">
        <div className="resume-subsection-title">{props.type} Experience</div>
        {props.experiences.map((elt) => (
          <ResumeItem
            key={elt.company + elt.start_date}
            name={elt.company}
            location={elt.location}
            title={elt.title}
            date={elt.start_date + ' – ' + elt.end_date}
            bottomMargin={true}
            link={elt.link}
            bullets={elt.highlights}
            skills={elt.tech_recap}
          />
        ))}
      </div>
    </>
  );
};

export default Experience;
