import { connect } from "react-redux";
import Track from "../../components/track";



import React from 'react';

const StoreUI = ({ listTrack }) => {
  return (
    <div style={{ padding: "10px" }}>
      <h2>Store</h2>

      <div className="d-flex">
        {
          listTrack?.map(t => <Track key={t.id} id={t.id} title={t.title} />)
        }
      </div>
    </div>

  )
};


export function Store() {
  return <StoreUI />
}

const Connection = connect(
    (state) => ({
      listTrack: state.tracks
    })
  )
export default Connection(StoreUI)


