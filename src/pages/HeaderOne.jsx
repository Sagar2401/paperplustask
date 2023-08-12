import React from "react";
import { useApp } from "../hooks/useApp";
import Tree from "../Assets/tree.svg";
const HeaderOne = () => {
  const { headerdata, icons } = useApp();
  return (
    <header className="App-header">
      <div className="nav-btns">
        {headerdata.map((item, index) => {
          console.log(icons[item.icon]);

          return (
            <div className="menu">
              <img src={`${icons[item.icon]}`} height={"20px"} alt="trophy" />
              <p key={index}>{item.name}</p>
            </div>
          );
        })}
      </div>
      <div className="logo-main">
        <img src={Tree} height={"20px"} alt="trophy" />
      </div>

      <div className="profile-wrap">
        <input type="text" id="searchInput" placeholder="Search.." />
        <button className="score">Log in</button>
        <button style={{ background: "#2EDAB8" }} className="score">
          Join
        </button>
      </div>
    </header>
  );
};

export default HeaderOne;
