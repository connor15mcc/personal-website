import React from 'react';

import DescList from './DescList';

const SkillsInterests = () => {
  return (
    <>
      <div className="resume-subsection">
        <div className="resume-subsection-title">Skills &amp; Interests</div>
        <DescList
          items={[
            {
              label: 'Skills',
              content: 'Nonsense',
            },
            {
              label: 'Projects',
              content: 'Learn more about my projects here',
            },
            {
              label: 'Interests',
              content: 'Not shopping for Christmas presents',
            },
          ]}
        ></DescList>
      </div>
    </>
  );
};

export default SkillsInterests;
