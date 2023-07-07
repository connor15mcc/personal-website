import './Project.css';

import classNames from 'classnames';
import { usePalette } from 'color-thief-react';

export interface ProjectProp {
  weight?: number;
  title: string;
  imagePath: string;
  date: Date;
  link?: string;
  resumeDesc?: string;
  desc: string;
  category?: string;
}

function hslArraytoVal(arr: string) {
  return (
    'hsl(' +
    arr[0] +
    ', ' +
    Math.min(+arr[1], 40) +
    '%, ' +
    Math.max(+arr[2], 80) +
    '%)'
  );
}

const Project = (props: ProjectProp) => {
  function openLink() {
    if (props.link) {
      window.open("/" + props.link);
    }
  }
  let { data } = usePalette(props.imagePath, 10, 'hslArray');
  let titleStyle = {};
  if (data) {
    data = data.filter((arr) => +arr[1] > 50);
    if (data.length > 0) {
      const color = hslArraytoVal(data[0]);
      titleStyle = {
        backgroundColor: color,
      };
    }
  }

  const dateFormat = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }).format;
  const date = new Date(props.date);

  return (
    <div
      className={classNames('project-card', {
        'project-card-wide': props.weight == 2,
        'project-card-tall': props.weight == 3,
        'project-card-big': props.weight == 4,
        'project-card-hover': props.link,
      })}
      id={props.title}
      onClick={openLink}
      onKeyDown={openLink}
      role="button"
      tabIndex={0}
    >
      <img
        className="project-card-image"
        src={props.imagePath}
        alt={props.title}
      />
      <div className="project-card-content" style={titleStyle}>
        <h3 className="project-card-title">{props.title}</h3>
        <div className="project-card-secondrow">
          <span className="project-card-date">{dateFormat(date)}</span>
          {props.category == 'Coursework' && (
            <span className="project-card-tag">Coursework</span>
          )}
        </div>
        <p className="project-card-desc">{props.desc}</p>
      </div>
    </div>
  );
};

export default Project;
