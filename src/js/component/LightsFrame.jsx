import React from "react";
import "./styles/index.css";

const LightsFrame = () => {
  return (
    <div className="container-fluid col-sm-1 col-md-1 col-lg-1">
      
      <div className="verticalLine"> </div>

      <div className="wrapper bg-black border rounded text-center">
        <div className="redLight px-2 py-2">
          <i className="fa-solid fa-circle fa-2xl" style={{ color: "#cc1515" }}></i>
        </div>
        <div className="yellowLight px-2 py-2">
          <i className="fa-solid fa-circle fa-2xl" style={{ color: "#f6fa0d" }}></i>
        </div>
        <div className="greenLight px-2 py-2">
          <i className="fa-solid fa-circle fa-2xl" style={{ color: "#38f00f" }}></i>
        </div>
      </div>
    </div>
  );
};

export default LightsFrame;