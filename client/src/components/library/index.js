import React, { useState, useEffect } from "react";
import axios from "axios";

/* Layout components */
import Container from "components/container";
import Loading from "components/loading";

const Library = () => {
  const [plantData, setPlantData] = useState([]);
  const [query, setQuery] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const fetchToken = async () => {
      const response = await axios.get(`http://localhost:8080/api/auth/`, {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      });

      console.log(response.data.authToken);
      setToken(response.data.authToken);
    };

    fetchToken();
  }, [token]);

  const fetchData = async () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const response = await axios.get(
      `${proxyurl}https://trefle.io/api/v1/plants/search?q=coconut`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response.data.data);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Container>
      <p className="font-black text-4xl text-center">Library page</p>
      <input type="text" value={query} onChange={handleChange} />
      <button onClick={() => fetchData()}>Click</button>
    </Container>
  );
};

export default Library;
