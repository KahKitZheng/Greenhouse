import React from "react";

const PlantSpecifications = ({ specifications }) => {
  const {
    average_height,
    growth_form,
    growth_habit,
    growth_rate,
    ligneous_type,
    maximum_height,
    nitrogen_fixation,
    shape_and_orientation,
    toxicity,
  } = specifications;

  return (
    <div className="mb-8 md:mb-12">
      <p className="text-2xl font-bold uppercase">Specifications</p>
      <hr className="border-2 border-gray-300 mb-4 md:mt-2" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <p className="font-bold">Average height:&nbsp;</p>
          <p>
            {average_height.cm !== null ? average_height.cm + " cm" : "N/A"}
          </p>
        </div>
        <div>
          <p className="font-bold">Growth form:&nbsp;</p>
          <p>{growth_form !== null ? growth_form : "N/A"}</p>
        </div>
        <div>
          <p className="font-bold">Growth habit:&nbsp;</p>
          <p>{growth_habit !== null ? growth_habit : "N/A"}</p>
        </div>
        <div>
          <p className="font-bold">Growth rate:&nbsp;</p>
          <p>{growth_rate !== null ? growth_rate : "N/A"}</p>
        </div>
        <div>
          <p className="font-bold">Ligneous type:&nbsp;</p>
          <p>{ligneous_type !== null ? ligneous_type : "N/A"}</p>
        </div>
        <div>
          <p className="font-bold">Maximum height:&nbsp;</p>
          <p>
            {maximum_height.cm !== null ? maximum_height.cm + " cm" : "N/A"}
          </p>
        </div>
        <div>
          <p className="font-bold">Nitrogen fixation:&nbsp;</p>
          <p>{nitrogen_fixation !== null ? nitrogen_fixation : "N/A"}</p>
        </div>
        <div>
          <p className="font-bold">Shape and orientation:&nbsp;</p>
          <p>
            {shape_and_orientation !== null ? shape_and_orientation : "N/A"}
          </p>
        </div>
        <div>
          <p className="font-bold">Toxicity:&nbsp;</p>
          <p>{toxicity !== null ? toxicity : "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default PlantSpecifications;
