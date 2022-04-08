import React from "react";

const CarouselComponent = () => {
  return (
    <div
      className="w-full rounded-lg flex overflow-hidden"
      style={{ scrollSnapType: "x  mandatory" }}
    >
      <div
        className="flex justify-center p-1 w-full"
        style={{ minWidth: "100%", scrollSnapAlign: "start" }}
      >
        <div className="bg-slate-50 w-full h-80 rounded-lg"></div>
      </div>
      <div
        className="flex justify-center p-1"
        style={{ minWidth: "100%", scrollSnapAlign: "start" }}
      >
        <div className="bg-red-500 w-full h-80 rounded-lg"></div>
      </div>
      <div
        className="flex justify-center p-1"
        style={{ minWidth: "100%", scrollSnapAlign: "start" }}
      >
        <div className="bg-green-500 w-full h-80 rounded-lg"></div>
      </div>
    </div>
  );
};

export default CarouselComponent;
