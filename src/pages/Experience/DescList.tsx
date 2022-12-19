import './DescList.css';

import React from 'react';

const DescList = (props: DescriptionList) => {
  return (
    <dl className="desc-list">
      {props.items.map((p, idx) => (
        <React.Fragment key={idx}>
          <dt className="desc-label">{p.label}</dt>
          <dd className="desc-content">{p.content}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
};

interface DescriptionItem {
  label: string;
  content: string;
}

interface DescriptionList {
  items: Array<DescriptionItem>;
}

export default DescList;
