import React, { useState, useEffect } from "react";
import axios from "axios";

/* Import layout components */
import Container from "components/layout/Container";

/* Import Dashboard components */
import TempChart from "components/dashboard/TempChart";
import HumidChart from "components/dashboard/HumidChart";
import SoilLevel from "components/dashboard/SoilLevel";

const Dashboard = () => {
  const [temp, setTemp] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [humid, setHumid] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [moist, setMoist] = useState("");

  useEffect(() => {
    const setData = (data, state, setState) => {
      let now = new Date();

      if (state.length === 10) {
        state.splice(0, 1);
        setState(state.concat({ ...data, date: now }));
      }
    };

    const fetchTempAndHumid = setInterval(() => {
      axios
        .get(`http://192.168.1.104:5000/api/temp_and_humid`, {
          "Content-Type": "application/json",
        })
        .then((res) => {
          setData(res.data.temperature, temp, setTemp);
          setData(res.data.humidity, humid, setHumid);

          console.log(temp);
          console.log(humid);
        });
    }, 3000);

    const fetchMoist = setInterval(() => {
      axios
        .get(`http://192.168.1.104:5000/api/moisture`, {
          "Content-Type": "application/json",
        })
        .then((res) => {
          console.log(moist);
          setMoist(res.data.moisture.description);
        });
    }, 3000);

    return () => {
      clearInterval(fetchMoist);
      clearInterval(fetchTempAndHumid);
    };
  }, [temp, humid, moist]);

  return (
    <Container>
      <div className="xxl:px-6">
        <div className="mt-6 mb-2">
          <p className="text-2xl font-bold uppercase">Soil level</p>
          <hr className="border-2 border-gray-300 mt-1" />
          <SoilLevel level={moist} />
        </div>

        <div className="xxl:flex">
          <div className="mt-6 mb-2 lg:h-full w-full lg:first:pr-4">
            <p className="text-2xl font-bold uppercase">Temperature</p>
            <hr className="border-2 border-gray-300 mt-1" />
            <div className="h-screen lg:h- md:h-graphLG w-full relative">
              <TempChart temp={temp} />
            </div>
          </div>

          <div className="mt-10 mb-6 lg:h-full w-full lg:last:pl-4">
            <p className="text-2xl font-bold uppercase">Humidity</p>
            <hr className="border-2 border-gray-300 mt-1" />
            <div className="h-screen lg:h- md:h-graphLG w-full relative">
              <HumidChart humid={humid} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
