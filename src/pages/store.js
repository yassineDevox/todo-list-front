import { useState } from "react";
import Track from "../components/track";
import { TrackModel } from "../model/track";

export default function Store() {

  const [listTrack,setListTrack] = useState(
    [
      // {id:1,title:"js bootcamp"},
      new TrackModel(1,"js bootcamp"),
      new TrackModel(2,"Ui / Ux"),
      new TrackModel(3,"hacking with python")
    ]
  )
  
  
  return (
    <>
      <h2>Store</h2>
      <hr />
      <div className="d-flex">
        {/* <Track title="js bootcamp" id={1}/>
        <Track title=" ui design" id={2}/>
        <Track title=" Hacking with python" id={3}/> */}
        {
          listTrack.map(t=><Track key={t.id} id={t.id} title={t.title}/>)
        }
      </div>
    </>

  )


}