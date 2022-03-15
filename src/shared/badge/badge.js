import { TodoStatus } from "model/todoStatus";
import React from "react";

const getColor = (content) => {
  switch (content) {
    case TodoStatus.TODO:
      return "primary";
    case TodoStatus.DONE:
      return "success";
    case TodoStatus.INPROGRESS:
      return "info";
    case TodoStatus.CANCELED:
      return "danger";
  }
};

const Badge = ({ content }) => {
  return (
    <span className={`badge bg-${getColor(content)} me-1`}> {content} :</span>
  );
};

export default Badge;
