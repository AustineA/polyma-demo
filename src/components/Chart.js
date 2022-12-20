import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  aspectRatio: 1,
  scales: {
    y: {
      suggestedMin: 0,
      suggestedMax: 100,
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (ctx) {
          // console.log(ctx);
          return `${ctx.label}: $${ctx.formattedValue}`;
        },
      },
    },
  },
};

export const data = {
  labels: ["Jan.", "Feb.", "Mar.", "Apr.", "May."],
  datasets: [
    {
      data: ["29200", "57600", "60000", "35000", "50000"],
      borderRadius: 24,
      backgroundColor: "#68FFA4",
      borderSkipped: false,
    },
  ],
};

const Chart = () => {
  return (
    <ChartContainer>
      <Bar options={options} data={data} />
    </ChartContainer>
  );
};

export default Chart;

const ChartContainer = styled.div`
  /* margin: 0 auto; */
  margin-bottom: 20px;
  /* width: 90%; */
  height: 240px;

  display: flex;
  justify-content: center;
`;
