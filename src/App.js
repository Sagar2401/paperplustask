/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import "./App.css";
import { AppProvider, useApp } from "./hooks/useApp";
import HeaderOne from "./pages/HeaderOne";
import SecondSection from "./pages/SecondSection";
import DetailsCard from "./pages/DetailsCard";
import TableCard from "./pages/TableCard";

function App() {
  const { state, fetchData } = useApp();

  useEffect(() => {
    fetchData();
  }, []);
  console.log(state);

  return (
    <div className="App">
      <HeaderOne />
      <SecondSection />
      <DetailsCard />
      <TableCard />
    </div>
  );
}

export const Wrapper = () => (
  <AppProvider>
    <App />
  </AppProvider>
);

export default Wrapper;
