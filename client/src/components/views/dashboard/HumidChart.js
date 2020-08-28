import React, { useEffect } from "react";
import moment from "moment";
import Chart from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

const HumidChart = ({ humid }) => {
  let chartRef = React.createRef();
  let humidData = humid.map((a) => a.value);
  let timeLabels = humid.map((a) => a.date);

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
            data: humidData,
            backgroundColor: "rgba(128, 182, 244, 0.6)",
            hoverBackgroundColor: "rgba(128, 182, 244, 0.6)",
            borderColor: "#80b6f4",
            fill: true,
            label: "humidity",
            pointBorderWidth: 4,
          },
        ],
      },
      plugins: [ChartDataLabels],
      options: {
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
                suggestedMax: 100,
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
  }, [chartRef, humidData, timeLabels]);

  return <canvas id="humid-chart" ref={chartRef} />;
};

export default HumidChart;
