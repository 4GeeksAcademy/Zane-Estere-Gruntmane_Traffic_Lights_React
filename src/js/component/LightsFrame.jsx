import React from "react";


const LightsFrame = () => {
  return (

    <div className="container-fluid  col-sm-1 mt-5">
      <div className="p-2"> flex 1 </div>

      <div className="Lights bg-black border rounded text-center">
        <div className="redLight px-2 py-2">
          <i className="fa-solid fa-circle fa-2xl" style={{ color: "#cc1515" }}></i>
        </div>
        <div className="px-2 py-2">
          <i className="fa-solid fa-circle fa-2xl" style={{ color: "#f6fa0d" }}></i>
        </div>
        <div className="px-2 py-2">
          <i className="fa-solid fa-circle fa-2xl" style={{ color: "#38f00f" }}></i> </div>
      </div>
    </div>
  );
};

export default LightsFrame;