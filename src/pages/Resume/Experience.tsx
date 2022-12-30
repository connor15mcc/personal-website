import ResumeItem from './ResumeItem';

const Experience = (props: {
  type: string;
  data: {
    name: string;
    date: string;
    company: string;
    location: string;
    title: string;
    start_date: string;
    end_date: string;
    highlights?: string[];
    tech_recap?: string;
  }[];
}) => {
  return (
    <>
      <div className="resume-subsection">
        <div className="resume-subsection-title">{props.type} Experience</div>
        {props.data.map(
          (elt: {
            name: string;
            date: string;
            company: string;
            location: string;
            title: string;
            start_date: string;
            end_date: string;
            highlights?: string[];
            tech_recap?: string;
          }) => (
            <ResumeItem
              key={elt.company + elt.start_date}
              name={elt.company}
              location={elt.location}
              title={elt.title}
              date={elt.start_date + ' – ' + elt.end_date}
              bottomMargin={true}
              bullets={elt.highlights}
              skills={elt.tech_recap}
            />
          ),
        )}
      </div>
    </>
  );
};

export default Experience;
