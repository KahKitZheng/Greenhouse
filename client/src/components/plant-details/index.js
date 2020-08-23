import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
      const BASE_URL = "https://trefle.io/api/v1/plants/";

      const response = await axios.get(`${PROXY_URL}${BASE_URL}${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });

      console.log(response.data.data);
      setPlant(response.data.data);
    };

    fetchToken();
    fetchData();
  }, [token]);

  return (
    <div>
      <h1>Plant details</h1>
    </div>
  );
};

export default PlantDetails;
