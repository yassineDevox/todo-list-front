import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Track from "components/track";
import { loadTracks } from "redux/ducks/track";
import Spinner from "Theme/shared/spinner";
import "assets/style/track.css";

const ListTrack = ({ list }) => (
  <>
    {list.map((t) => (
      <Track key={t.id} id={t.id} tm={t.attributes} />
    ))}
  </>
);

export const StorePage = () => {
  //dispatch redux
  const call = useDispatch();

  //select track state
  let isLoading = useSelector((s) => s.track.isLoading);
  const allTracks = useSelector((s) => s.track.list);

  //on cmp didmount
  useEffect(() => {
    call(loadTracks());
  }, []);

  return (
    <div style={{ padding: "10px"}}>
      <div className=" list-tracks">
        {isLoading ? <Spinner /> : <ListTrack list={allTracks} />}
      </div>
    </div>
  );
};
