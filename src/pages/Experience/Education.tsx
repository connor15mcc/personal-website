import './Education.css';

import DescList from './DescList';
import ResumeItem from './ResumeItem';

const Education = () => {
  return (
    <>
      <div className="education-section">
        <div className="section-title">Education</div>
        <ResumeItem
          name="Cornell University, College of Engineering"
          location="Ithaca, NY"
          title="B.S. in Computer Science, Double Minors in Operations Research & Business"
          date="Expected May 2023"
        ></ResumeItem>
        <div className="class-info"></div>
        <DescList
          items={[
            {
              label: 'CS Coursework',
              content:
                'Analysis of Algorithms; Machine Learning; Computer Vision; ' +
                'Database Systems; Data Structures & Functional Programming; ' +
                'Object-Oriented Programming & Data Structures; Computer ' +
                'System Organization; Operating Systems',
            },
            {
              label: 'Math Coursework',
              content:
                'Linear Algebra; Discrete Math; Differential Equations; ' +
                'Calculus I, II, III; Probability & Statistics',
            },
            {
              label: 'ORIE Coursework',
              content:
                'Optimization I, II; ' +
                'Tools for OR, ML, & DS; Data-Driven Web Applications',
            },
          ]}
        ></DescList>
      </div>
    </>
  );
};

export default Education;
