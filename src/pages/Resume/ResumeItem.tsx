import './ResumeItem.css';

import classNames from 'classnames';

const ResumeItem = (props: ItemProps) => {
  return (
    <div
      className={classNames('item-info', {
        'item-spacing': props.bottomMargin,
      })}
      id={props.id ? props.id : props.name}
    >
      <div className="item-header">
        {props.link ? (
          <a
            className="item-name"
            href={props.link}
            target="_blank"
            rel="noreferrer"
          >
            {props.name}
          </a>
        ) : (
          <span className="item-name">{props.name}</span>
        )}
        <span className="item-location">{props.location}</span>
        <hr></hr>
        <span className="item-title">{props.title}</span>
        <span className="item-date">{props.date}</span>
      </div>
      <ul className="item-bullets">
        {props.bullets &&
          props.bullets.map((b, i) => (
            <li key={i + b} className="item-bullet">
              {b}
            </li>
          ))}
        {props.skills && (
          <li className="item-bullet">
            <b>Used: </b>
            {props.skills}.
          </li>
        )}
      </ul>
    </div>
  );
};

export interface ItemProps {
  id?: string;
  name: string;
  location: string;
  title: string;
  date: string;
  link?: string;
  bottomMargin?: boolean;
  bullets?: string[];
  skills?: string;
}

export default ResumeItem;
