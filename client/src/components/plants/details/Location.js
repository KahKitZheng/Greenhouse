import React from "react";

const PlantLocation = ({ observation, distribution }) => {
  return (
    observation !== undefined &&
    distribution !==
      undefined(
        <div className="mb-8 md:mb-12">
          <p className="text-2xl font-bold uppercase">Locations</p>
          <hr className="border-2 border-gray-300 mb-4 md:mt-2" />
          <div>
            <div>
              <p className="font-bold">Observation:&nbsp;</p>
              <p>{observation !== null ? observation : "N/A"}</p>
            </div>
            {distribution && (
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-4">
                {distribution.native &&
                  distribution.native.map((place, index) => (
                    <li key={index}>{place}</li>
                  ))}
              </ul>
            )}
          </div>
        </div>
      )
  );
};

export default PlantLocation;
