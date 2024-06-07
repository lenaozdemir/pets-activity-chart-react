import { Chart } from "react-google-charts";
import './App.css';

export const data = [
  ["Activity", "Duration"],
  ["Sleeping", 12],
  ["Eating", 2],
  ["Chasing Each Other Around the House", 3],
  ["Ambushing at the Door", 0.5],
  ["Licking Self or Nearby Cat", 2],
  ["Bothering the Robot Vacuum Cleaner", 1],
  ["Yelling at Birds Outside the Window", 0.5],
  ["Attempting to Bite the Leg", 1],
  ["Lazy Watching Owner", 1],
  ["Scattering Litter Around the House", 0.5],
];

export const options = {
  title: "Daily Activities of Pets",
  colors: ["#819098", "#DD6E42", "#43BCCD", "#A76E6C", "#662E9B", "#5575B4", "#EA3546", "#03071E", "#81B29A", "#A79F61"],
  backgroundColor: "#F0F0F0",
  titleTextStyle: {
    color: '#23323D',
    fontSize: 18,
  },
};

export function App() {
  return (
    <div class='chart_box'>
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"100vh"}
    />
    </div>
  );
}
export default App;
