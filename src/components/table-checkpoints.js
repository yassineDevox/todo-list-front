import React from "react";
import { CheckpointModel } from "../model/checkpoint";
import noDataSVG from "../assets/img/no-data.svg";
import { StudentModel } from "../model/student";

const StudentItem = ({ s = new StudentModel() }) => {
  return (
    <div className="student">
      <div className="avatar">
        <img src={s.avatarURL} alt={s.firstname + " " + s.lastname} />
      </div>
      <p>{s.firstname + " " + s.lastname}</p>
    </div>
  );
};

const StatusItem = ({ status = "Closed" }) => {
  return (
    <div className="status">
      <div className="status-content">
        <div className="type-status" />
        <span>{status}</span>
      </div>
    </div>
  );
};

const CheckpointItem = ({ data: c = new CheckpointModel() }) => {
  return (
    <div className="data-item">
      <StudentItem s={c.student} />
      <StatusItem  />
      <div className="track">
        <span>{c.chapter}</span>
      </div>
      <div className="checkpoint-name">
        <span>{c.name}</span>
      </div>
      <div className="date-submition">
        <span>{c.dateSubmition.toLocaleDateString()}</span>
      </div>
      <div className="action-item">
        <button>Validate</button>
      </div>
    </div>
  );
};

const ListCheckpoint = ({ data = [new CheckpointModel()] }) => (
  <div className="list-data ">
    {data.map((c) => (
      <CheckpointItem key={c.id} data={c} />
    ))}
  </div>
);

const NoData = () => (
  <div className="no-data">
    <img src={noDataSVG} alt="nodata" />
    <br />
    <p>No Data</p>
  </div>
);

const TableHeaderItem = ({ label = "" }) => {
  return (
    <div className="table-header-item">
      <span className="name">{label}</span>
      <div className="sort">
        <i className="fas fa-sort-up" />
        <i className="fas fa-sort-down" />
      </div>
    </div>
  );
};

const CheckpointsTable = ({ list = [new CheckpointModel()] }) => {
  return (
    <div className="table-container">
      {/* table header  */}
      <div className="table-header">
        {[
          "students",
          "status",
          "track",
          "checkpoint name",
          "Submitted Date",
        ].map((l, i) => (
          <TableHeaderItem key={i} label={l} />
        ))}
        <div className="table-header-item">
          <span className="name-action">Action</span>
        </div>
      </div>
      {/* table body */}
      <div className={list.length === 0 ? "table-body-empty" : "table-body"}>
        {list.length > 0 ? <ListCheckpoint data={list} /> : <NoData />}
      </div>
    </div>
  );
};

export default CheckpointsTable;
