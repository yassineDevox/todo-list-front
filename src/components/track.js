import { TrackModel } from "../model/track";
import getTitlesTwoFirstLetters  from "../model/track";

export default function Track({tm = new TrackModel()}) {
  
  return (
    <div className="card-track">
      <div className="card-thumbnail" style={{backgroundColor:tm.thumbnailColor}}>
        <img src={tm.thumbnail.data.attributes.name} />
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
          {
            [1,2,3].map(_=><p>{getTitlesTwoFirstLetters(tm.title)}</p>)
          }
          <p>+{tm.title.length}</p> 
        </div>
        <span>{tm.nbStudents} student(s) and {tm.nbInstructors} instructor(s)</span>
      </div>
    </div>
  );
}
