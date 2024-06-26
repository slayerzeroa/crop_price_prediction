import React from "react";
import IndexNavbar from "../components/Navbars/CustomNavbar";
import Dashboard from "views/Dashboard";
import Predict from "../views/Predict";
import Koreamap from "../views/Koreamap";
import Search from "../views/Search";
import Information from "views/Information";

function Forecast() {
  return (
    <div>
      <IndexNavbar />
      <Search />
      <Predict />
      <Information />
      <Dashboard />
      <Koreamap />
    </div>
  );
}

export default Forecast;
