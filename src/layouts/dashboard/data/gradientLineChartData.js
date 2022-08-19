const gradientLineChartData = {
  labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Ships Required",
      color: "info",
      data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
    },
    {
      label: "Ships Available",
      color: "dark",
      data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
    },
  ],
};

export default gradientLineChartData;
