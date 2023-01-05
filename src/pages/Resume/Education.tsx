import Accordion from './../../components/Accordion/Accordion';
import DescList from './../../components/DescList/DescList';
import { Education as EducationType } from './../../data';
import ResumeItem from './ResumeItem';

const Education = (props: EducationType) => {
  return (
    <>
      <div className="resume-subsection">
        <div className="resume-subsection-title">Education</div>
        <ResumeItem
          id={props.institution.split(' ')[0]}
          name={props.institution + ', ' + props.college}
          location={props.location}
          title={props.degree}
          date={props.end_date}
          link={props.link}
        ></ResumeItem>
        <DescList
          items={props.coursework.map((elt) => ({
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
