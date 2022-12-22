import ResumeItem from './ResumeItem';

const ExtracurricularExp = () => {
  return (
    <>
      <div className="resume-subsection">
        <div className="resume-subsection-title">Extracurricular Experience</div>
        <ResumeItem
          name="Cornell Rocketry Team"
          location="Ithaca, NY"
          title="Electronics & Software Member"
          date="Sept. 2019 &mdash; May 2022"
          bottomMargin={true}
          bullets={['Tested a bunch of things', 'Made things explode']}
          skills="Explosions, TNT, Dynamite"
        ></ResumeItem>
        <ResumeItem
          name="Cayuga Capital Cornell"
          location="Ithaca, NY"
          title="Algorithmic Trading Team Lead, VP of Team Leads and Allocation"
          date="Aug. 2019 &mdash; Jan. 2022"
          bottomMargin={true}
        ></ResumeItem>
      </div>
    </>
  );
};

export default ExtracurricularExp;
