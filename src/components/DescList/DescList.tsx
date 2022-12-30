import './DescList.css';

import React from 'react';

const DescList = (props: { items: DescriptionItem[] }) => {
  return (
    <dl className="desc-list">
      {props.items.map((p, idx) => (
        <React.Fragment key={idx + p.label}>
          <dt className="desc-label">{p.label}</dt>
          <dd className="desc-content">{p.content}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
};

export interface DescriptionItem {
  label: string;
  content: string | React.ReactFragment;
}

export default DescList;
