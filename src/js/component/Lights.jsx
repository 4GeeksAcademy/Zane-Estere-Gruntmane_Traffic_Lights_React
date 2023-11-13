import React from "react";

const Lights = () => {

  let red = <i className="sign fa-solid fa-circle fa-2xl" style={{ color: "#cc1515" }}></i>;
  let yellow = <i className="sign fa-solid fa-circle fa-2xl" style={{ color: "#f6fa0d" }}></i>;
  let green = <i className="sign fa-solid fa-circle fa-2xl" style={{ color: "#38f00f" }}></i>;

  return (
    <div className="d-flex flex-row col-sm-6 col-md-6 col-lg-6 ">
      <div className="trafficHold col-sm-1 col-md-1 col-lg-1"></div>
      <div className="wrapper col-sm-1 col-md-1 col-lg-1">
        <div className="redLight"> {red} </div>
        <div className="yellowLight"> {yellow} </div>
        <div className="greenLight"> {green} </div>
      </div>
    </div>
  );
};

export default Lights;