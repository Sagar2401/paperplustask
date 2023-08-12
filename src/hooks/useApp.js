import axios from "axios";
import { createContext, useContext, useState } from "react";
import Home from "../Assets/home.svg";
import HomeLight from "../Assets/home-light.svg";
import Compass from "../Assets/compass.svg";
import CompassLight from "../Assets/compass-light.svg";
import Star from "../Assets/star.svg";
import StarLight from "../Assets/star-light.svg";

const ctx = createContext();

export const useApp = () => useContext(ctx);
export const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const headerdata = [
    {
      name: "Home",
      icon: "home",
    },
    {
      name: "Shop",
      icon: "compass",
    },
    {
      name: "Featured",
      icon: "star",
    },
  ];
  const btnData = ["Trending", "New", "Most Popular"];

  const icons = {
    home: Home,
    homelight: HomeLight,
    compass: Compass,
    compasslight: CompassLight,
    star: Star,
    starlight: StarLight,
  };
  const fetchData = async () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response?.data);
        setData(response?.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <ctx.Provider
      value={{
        btnData,
        data,
        fetchData,
        icons,
        headerdata,
      }}
    >
      {children}
    </ctx.Provider>
  );
};
