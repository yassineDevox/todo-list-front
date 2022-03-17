import React from "react";

export const Message = ({ content, color = "success" }) => {
  return (
    <div className={content !== "" ? `alert alert-${color} mt-2` : "d-none"}>
      {content}
    </div>
  );
};
