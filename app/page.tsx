// app/page.tsx
"use client";
import { useEffect, useState } from "react";
import { useRecoilState,useRecoilValue } from "recoil";
import axios from "axios";
import {
  preferenceState,
  filtersState,
  selectedChartsState,
} from "@/recoil/atoms";
import { LineChart } from "@/components/LineChart";
import { BarChart } from "@/components/BarChart";
import { DataTable } from "@/components/DataTable";
import { DoughnutChart } from "@/components/DoughnutChart";
import Sidebar from "@/components/Sidebar";
import { PieChart } from "@/components/PieChart";

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const Home = () => {
  const filters = useRecoilValue(filtersState);
  const [selectedChart, setSelectedChart] = useRecoilState(selectedChartsState);

  const [lineData, setLineData] = useState(null);
  const [barData, setBarData] = useState(null);
  const [tableData, setTableData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false);

      try {
        const requests = [];

        requests.push(axios.post("/api/line-data", { filter: filters }));

        requests.push(axios.post("/api/bar-data", { filter: filters }));

        requests.push(axios.post("/api/table-data", { filter: filters }));

        const responses = await Promise.all(requests);

        setLineData(responses[0].data);

        setBarData(responses[1].data);

        setTableData(responses[responses.length - 1].data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filters]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Failed to load data</div>;

  return (
    <div className="dashboard-container ">
      <Sidebar />
      <div className="dashboard">
        <div className="flex flex-row justify-between items-center max-md:flex-col max-md:gap-6">
        <h1 className="text-5xl text-violet-600/50 font-semibold">Dashboard</h1>
        <div>
          <label htmlFor="chart-select" className="text-gray-800/60">Select Chart Type: </label>
          <select
            id="chart-select"
            onChange={(e) => setSelectedChart(e.target.value)}
            value={selectedChart}
            className="border border-gray-300 rounded-md p-2 placeholder:text-gray-800/60"
          >
            <option value="line">Line Chart</option>
            <option value="bar">Bar Chart</option>
            <option value="table">Data Table</option>
            <option value="doughnut">Doughnut Chart</option>
            <option value="pie">Pie Chart</option>
            <option value="all">All</option>
          </select>
        </div>
        </div>
        <p className="text-gray-800/60 max-md:text-center max-md:mt-4">Filters: {monthNames[filters.start]} - {monthNames[filters.end]}</p>
        <div className="widget">
          {selectedChart === "line" && lineData && <LineChart data={lineData} />}
          {selectedChart === "bar" && barData && <BarChart data={barData} />}
          {selectedChart === "table" && tableData && <DataTable data={tableData} />}
          {selectedChart === 'doughnut' && <DoughnutChart data={lineData} />}
          {selectedChart === 'pie' && <PieChart data={barData} />}
          {selectedChart === "all" && (
            <div className="flex flex-col justify-center items-center mt-6 gap-10">
              <div className="flex md:flex-row flex-col gap-16 ">
              {lineData &&<div className="w-1/2 max-md:w-full"> <DoughnutChart data={lineData} /></div>}
              {barData &&<div className="w-1/2 max-md:w-full"> <PieChart data={barData} /></div>}
              </div>
              {lineData && <div className="w-3/4"><LineChart data={lineData} /></div>}
              {barData &&  <div className="w-3/4"><BarChart data={barData} /></div>}
              {tableData &&  <div className="w-3/4 justify-center flex "><DataTable data={tableData} /></div>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
