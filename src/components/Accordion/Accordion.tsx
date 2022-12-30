import './Accordion.css';

import { ArrowsAngleContract } from '@styled-icons/bootstrap/ArrowsAngleContract';
import { ArrowsAngleExpand } from '@styled-icons/bootstrap/ArrowsAngleExpand';
import classNames from 'classnames';
import { useState } from 'react';

const Accordion = (props: { label: string; expanded: React.ReactFragment[] }) => {
  const [open, setOpen] = useState(false);

  const closedAccordion = (
    <>
      {props.label}
      <ArrowsAngleExpand size="1em" className="accordion-icon" />
    </>
  );
  const openAccordion = (
    <>
      <ul className="accordion-list">
        {props.expanded.map((elt, idx) => (
          <li key={idx} className="accordion-list-item">
            {elt}
          </li>
        ))}
      </ul>
      <ArrowsAngleContract size="1em" className="accordion-icon" />
    </>
  );

  return (
    <>
      <button
        className={classNames('accordion', { open: open })}
        onClick={() => setOpen(!open)}
      >
        {open ? openAccordion : closedAccordion}
      </button>
    </>
  );
};

export default Accordion;
