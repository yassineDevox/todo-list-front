import { TrackModel } from "../model/track";

export default function Track({tm = new TrackModel()}) {
  return (
    <div className="card-track">
      <div className="card-thumbnail">
        <img src={tm.thumbnailURL} />
      </div>
      <div className="card-track-body">
        <h6 className="track-title">
          {tm.title}
        </h6>
        <p className="track-description">
          {tm.description}
        </p>
      </div>
      <div className="card-track-footer">
        <div className="list-participients">
          <p />
          <p />
          <p />
          <p />
        </div>
        <span>{tm.nbStudents} student(s) and {tm.nbInstructors} instructor(s)</span>
      </div>
    </div>
  );
}
