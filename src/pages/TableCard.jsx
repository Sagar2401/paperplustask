import React from "react";
import { useApp } from "../hooks/useApp";
import Avatar from "./Avatar";
import mark from "../Assets/mark.svg";

const TableCard = () => {
  const { data } = useApp();
  return (
    <div className="table-wrap">
      {data.map((data) => {
        return (
          <div className="card">
            <div className="price">
              <img src={mark} alt="" /> &nbsp; $ {data.price}
            </div>
            <div className="image-wrap">
              <img src={data.image} alt="" />
            </div>

            <Avatar />
          </div>
        );
      })}
    </div>
  );
};

export default TableCard;
