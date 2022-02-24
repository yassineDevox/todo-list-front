import { faGauge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function SideBareItem({ data, setPage }) {
  let resolved = useResolvedPath(data.path);
  let match = useMatch({ path: resolved.pathname, end: true });
  const [bgColor] = useState("rgba(250, 250, 250, 0.109)");

  useEffect(() => {
    if (match) setPage(data.page);
  }, [match]);

  return (
    <li
      className="side-bar-item"
      style={match ? { backgroundColor: bgColor } : {}}
    >
      <div className="item-icon">
        <FontAwesomeIcon icon={data.icon} className="fa-lg"/>
      </div>
      <Link to={data.path}>{data.page}</Link>
    </li>
  );
}

export default SideBareItem;
