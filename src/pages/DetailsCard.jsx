import React from "react";
import { useApp } from "../hooks/useApp";

const DetailsCard = () => {
  const { btnData } = useApp();
  return (
    <div className="fourth-container">
      {btnData.map((data, i) => {
        return <p className={i === 0 ? "active" : ""}>{data}</p>;
      })}
    </div>
  );
};

export default DetailsCard;
