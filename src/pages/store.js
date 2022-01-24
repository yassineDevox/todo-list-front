import Track from "../components/track";

export default function Store() {

  return (
    <>
      <h2>Store</h2>
      <hr />
      <div className="d-flex">
        <Track title="js bootcamp" id={1}/>
        <Track title=" ui design" id={2}/>
        <Track title=" Hacking with python" id={3}/>
      </div>
    </>

  )


}