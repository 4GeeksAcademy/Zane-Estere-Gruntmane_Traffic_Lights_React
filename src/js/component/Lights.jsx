import React from "react";

const Lights = () => {

  let elementRed = <i className="fa-solid fa-circle fa-2xl" style={{ color: "#cc1515" }}></i>;
  let elementYellow = <i className="fa-solid fa-circle fa-2xl" style={{ color: "#f6fa0d" }}></i>;
  let elementGreen = <i className="fa-solid fa-circle fa-2xl" style={{ color: "#38f00f" }}></i>;

  return (
    <div className="trafficLight container-fluid col-sm-6">
      <div className="trafficHold"></div>
      <div className="wrapper col-6 ">
        <div className="redLight"> {elementRed} </div>
        <div className="yellowLight"> {elementYellow} </div>
        <div className="greenLight"> {elementGreen} </div>
      </div>
    </div>
  );
};

export default Lights;