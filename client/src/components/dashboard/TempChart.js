import React, { useEffect } from "react";
import Chart from "chart.js";
import moment from "moment";

const TempChart = ({ temp }) => {
  let chartRef = React.createRef();
  let tempData = temp.map((a) => a.value);
  let timeLabels = temp.map((a) => a.date);

  timeLabels = timeLabels.map((date) => moment(date).format("LTS"));

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");

    const tempColor = myChartRef.createLinearGradient(0, 0, 0, 200);
    tempColor.addColorStop(0, "rgba(250, 174, 50, 1)");
    tempColor.addColorStop(1, "rgba(250, 174, 50, 0.7)");

    new Chart(myChartRef, {
      type: "bar",
      data: {
        labels: timeLabels,
        datasets: [
          {
            data: tempData,
            backgroundColor: "rgba(250, 174, 50, 0.6)",
            borderColor: "#FF964C",
            fill: true,
            label: "temperature",
            pointBorderWidth: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 0,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                padding: 15,
                minRotation: 15,
                fontSize: 14,
                fontColor: "#2D3748",
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                suggestedMin: 0,
                suggestedMax: 40,
                fontSize: 14,
                fontColor: "#2D3748",
              },
            },
          ],
        },
        legend: {
          labels: {
            fontColor: "#2D3748",
            fontStyle: "bold",
            fontSize: 16,
            padding: 15,
          },
        },
        tooltips: {
          enabled: false,
        },
        plugins: {
          datalabels: {
            anchor: "end",
            align: "top",
            labels: {
              title: {
                font: {
                  weight: "bold",
                },
              },
            },
          },
        },
      },
    });
  }, [chartRef, tempData, timeLabels]);

  return <canvas id="temp-chart" ref={chartRef} />;
};

export default TempChart;
