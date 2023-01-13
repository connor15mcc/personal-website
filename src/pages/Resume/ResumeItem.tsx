import './ResumeItem.css';

import classNames from 'classnames';

import { Experience as ExperienceType } from './../../data';

const ResumeItem = (props: ExperienceType & { id?: string }) => {
  return (
    <div
      className={classNames('item-info', 'item-spacing')}
      id={props.id ? props.id : props.company}
    >
      <div className="item-header">
        {props.link ? (
          <a
            className="item-name"
            href={props.link}
            target="_blank"
            rel="noreferrer"
          >
            {props.company}
          </a>
        ) : (
          <span className="item-name">{props.company}</span>
        )}
        <span className="item-date">
          {props.start_date
            ? props.start_date + ' – ' + props.end_date
            : props.end_date}
        </span>
        <hr></hr>
        {props.title ? (
          <span className="item-title">{props.title}</span>
        ) : (
          <span className="item-title"></span>
        )}
        {props.location && (
          <span className="item-location">{props.location}</span>
        )}
      </div>
      <ul className="item-bullets">
        {props.highlights &&
          props.highlights.map((h, i) => (
            <li key={i + h} className="item-bullet">
              {h}
            </li>
          ))}
        {props.tech_recap && (
          <li className="item-bullet">
            <b>Used: </b>
            {props.tech_recap}.
          </li>
        )}
      </ul>
    </div>
  );
};

export default ResumeItem;
