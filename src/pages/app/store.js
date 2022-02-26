import { connect } from "react-redux";
import Track from "../../components/track";



import "./../../assets/style/track.css"

const StoreUI = ({ listTrack }) => {
  return (
    <div style={{ padding: "10px" }}>

      <div className="d-flex">
        {/* {
          listTrack?.map(t => <Track key={t.id} id={t.id} title={t.title} />)
        } */}
        <Track/>
        <Track/>
        <Track/>
        <Track/>
        <Track/>
        <Track/>
        <Track/>
        <Track/>
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


