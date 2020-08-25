import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

/* Layout components */
import Container from "components/container";
import Loading from "components/loading";

/* Plant section components */
import PlantInfo from "components/plant-details/Information";
import PlantLocation from "components/plant-details/Location";
import PlantSpecifications from "components/plant-details/Specifications";

const PlantDetails = () => {
  const [plant, setPlant] = useState("");
  const [token, setToken] = useState("");
  let { id } = useParams();

  useEffect(() => {
    const fetchToken = async () => {
      const response = await axios.get(`http://localhost:8080/api/auth/`, {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      });

      setToken(response.data.authToken);
    };

    const fetchData = async () => {
      const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
      const BASE_URL = "https://trefle.io/api/v1/species/";

      const response = await axios.get(`${PROXY_URL}${BASE_URL}${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });

      setPlant(response.data.data);
    };

    fetchToken();
    fetchData();
  }, [id, token]);

  return (
    <div className="flex flex-col h-full w-full">
      <div className="bg-gray-900 rounded-b-xl flex flex-col items-center justify-center h-24 mb-8 lg:mb-12">
        <h1 className="font-bold text-3xl leading-none mt-8 lg:mt-12 text-white">
          {plant.scientific_name}
        </h1>
        <p className="mt-2 mb-8 text-gray-400">{plant.common_name}</p>
      </div>
      <Container>
        <div className="flex flex-col overflow-y-auto no-scroll h-full lg:px-16">
          {plant === undefined ? (
            <Loading />
          ) : (
            <div>
              <PlantInfo info={plant} />
              <PlantLocation
                observation={plant.observation}
                distribution={plant.distribution}
              />
              {plant.specifications && (
                <PlantSpecifications specifications={plant.specifications} />
              )}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default PlantDetails;
