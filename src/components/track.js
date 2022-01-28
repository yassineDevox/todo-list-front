import React from 'react';
import { Link } from 'react-router-dom';

export default function Track(props) {
  return <div className=' p-1 m-1' style={{border:'1px solid'}}>
      
      <Link to={"/tracks/"+props.id+"/curriculum"}>{props.title}</Link>
  </div>;
}
