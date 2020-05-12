import React from "react";
import MethodIcon from "./MethodIcon";

const Get = ({ url }) => {
  return (
    <div className="get-container">
      <MethodIcon method="get"></MethodIcon>
      <p>{url}</p>
    </div>
  );
};

export default Get;
