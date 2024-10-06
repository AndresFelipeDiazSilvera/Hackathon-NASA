import { useEffect, useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const options = {
  responsive: true,
  aspectRatio: 0,
  color: "#1A5319",
};

type Props = {
  label: string;
  scores: number[];
  labels: string[];
};

export default function Chart(props: Props) {
  const data = useMemo(function () {
    return {
      datasets: [
        {
          label: props.label,
          data: [...props.scores],
          borderColor: "#1A5319",
        },
      ],
      labels: ["", ...props.labels],
    };
  }, [props]);

  return <Line data={data} options={options} />;
}
