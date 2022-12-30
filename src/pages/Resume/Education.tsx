import Accordion from './../../components/Accordion/Accordion';
import DescList from './../../components/DescList/DescList';
import ResumeItem from './ResumeItem';

const Education = (props: {
  data: {
    institution: string;
    college: string;
    location: string;
    degree: string;
    end_date: string;
    coursework: {
      type: string;
      classes: {
        name: string;
        number: string;
        link: string;
      }[];
    }[];
  };
}) => {
  return (
    <>
      <div className="resume-subsection">
        <div className="resume-subsection-title">Education</div>
        <ResumeItem
          name={props.data.institution + ', ' + props.data.college}
          location={props.data.location}
          title={props.data.degree}
          date={props.data.end_date}
        ></ResumeItem>
        <DescList
          items={props.data.coursework.map((elt) => ({
            label: elt.type + ' Coursework',
            content: (
              <Accordion
                label={elt.classes.map((e) => e.name).join('; ') + '.'}
                expanded={elt.classes.map((e) => (
                  <a
                    key={e.name}
                    href={e.link}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(evt) => evt.stopPropagation()}
                  >
                    {e.number + ': ' + e.name}
                  </a>
                ))}
              ></Accordion>
            ),
          }))}
        ></DescList>
      </div>
    </>
  );
};

export default Education;
