import ResumeItem from './ResumeItem';

const ProfessionalExp = () => {
  return (
    <>
      <div className="resume-subsection">
        <div className="resume-subsection-title">Professional Experience</div>
        <ResumeItem
          name="Lyft"
          location="San Francisco, CA"
          title="Software Engineer Intern"
          date="May 2022 &mdash; Aug. 2022"
          bottomMargin={true}
          bullets={['Tested a bunch of things', 'Made things explode']}
          skills="Explosions, TNT, Dynamite"
        ></ResumeItem>
        <ResumeItem
          name="SafeGraph"
          location="New York, NY (remote)"
          title="Software Engineer Intern"
          date="June 2021 &mdash; Aug. 2021"
          bottomMargin={true}
        ></ResumeItem>
      </div>
    </>
  );
};

export default ProfessionalExp;
