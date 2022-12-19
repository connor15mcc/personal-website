import './ResumeItem.css';

const ResumeItem = (props: ItemProps) => {
  return (
    <div className="school-info">
      <span className="school-name">{props.name}</span>
      <span className="school-location">{props.location}</span>
      <hr></hr>
      <span className="school-major">{props.title}</span>
      <span className="school-dates">{props.date}</span>
    </div>
  );
};

export interface ItemProps {
  name: string;
  location: string;
  title: string;
  date: string;
}

export default ResumeItem;
