import React from "react";

const PlantInfo = ({ info }) => {
  const {
    image_url,
    author,
    bibliography,
    scientific_name,
    common_name,
    family,
    family_common_name,
    synonyms,
    genus,
  } = info;

  return (
    <div className="mb-8 md:mb-12">
      <p className="text-2xl font-bold uppercase">General info</p>
      <hr className="border-2 border-gray-300 mb-4 md:mt-2" />
      <div className="flex flex-col-reverse md:grid grid-cols-3">
        <div className="md:col-span-2">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-bold">Author:&nbsp;</p>
              <p>{author !== null ? author : "N/A"}</p>
            </div>
            <div>
              <p className="font-bold">Bibliography:&nbsp;</p>
              <p>{bibliography !== null ? bibliography : "N/A"}</p>
            </div>
            <div>
              <p className="font-bold">Scientific name:&nbsp;</p>
              <p>{scientific_name !== null ? bibliography : "N/A"}</p>
            </div>
            <div>
              <p className="font-bold">Common name:&nbsp;</p>
              <p>{common_name !== null ? common_name : "N/A"}</p>
            </div>
            <div>
              <p className="font-bold">Family:&nbsp;</p>
              <p>{family !== null ? family : "N/A"}</p>
            </div>
            <div>
              <p className="font-bold">Common family name:&nbsp;</p>
              <p>{family_common_name !== null ? family_common_name : "N/A"}</p>
            </div>
            <div>
              <p className="font-bold">Genus:&nbsp;</p>
              <p>{genus !== null ? genus : "N/A"}</p>
            </div>
          </div>
          <div className="mt-4 md:col-span-2">
            <p className="font-bold">Synonyms:&nbsp;</p>
            <ul className="grid grid-cols-2 gap-x-4">
              {synonyms &&
                synonyms.map((synonym) => (
                  <li key={synonym.id}>{synonym.name}, </li>
                ))}
            </ul>
          </div>
        </div>
        <img
          className="flex-auto lg:max-w-sm object-contain bg-gray-200 mb-8 md:mb-0 md:row-span-2"
          src={image_url}
          alt=""
        />
      </div>
    </div>
  );
};

export default PlantInfo;
