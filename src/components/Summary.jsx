import React from "react";

const Summary = ({ summary }) => {
  return (
    <div
      className="summary"
      dangerouslySetInnerHTML={{ __html: summary }}
    ></div>
  );
};

export default Summary;
