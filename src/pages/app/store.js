import { useState } from "react";
import Track from "../../components/track";

export  function Store() {

  const [listTrack,setListTrack] = useState([])
  
  
  return (
    <>
      <h2>Store</h2>
    
      <div className="d-flex">
        {
          listTrack.map(t=><Track key={t.id} id={t.id} title={t.title}/>)
        }
      </div>
    </>

  )


}