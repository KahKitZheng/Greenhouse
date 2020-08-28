import React from "react";

const SoilLevel = ({ level }) => {
  return (
    <div className="flex flex-row items-center justify-between py-4">
      <p
        className={`border-b-4 border-gray-200 text-lg font-bold uppercase text-red-700  ${
          level === "dry" ? "border-red-700" : "text-gray-800"
        }`}
      >
        Dry
      </p>
      <p
        className={`border-b-4 border-gray-200 text-lg font-bold uppercase text-orange-600 ${
          level === "moist" ? "border-orange-600" : "text-gray-800"
        }`}
      >
        Moist
      </p>
      <p
        className={`border-b-4 border-gray-200 text-lg font-bold uppercase text-green-700 ${
          level === "wet" ? "border-green-700" : "text-gray-800"
        }`}
      >
        Wet
      </p>
    </div>
  );
};

export default SoilLevel;
