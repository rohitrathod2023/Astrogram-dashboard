import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Aug", MaxFocus: 40, MinFocus: 20 },
  { name: "Sep", MaxFocus: 70, MinFocus: 50 },
  { name: "Oct", MaxFocus: 55, MinFocus: 30 },
  { name: "Nov", MaxFocus: 85, MinFocus: 60 },
];

const AnalyticsGraph: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Focusing</h2>
        <div className="flex justify-between items-center gap-3">
          <p className="text-sm">Range</p>
          <select className="border-0 rounded-lg px-2 py-1 text-sm focus:outline-none">
            <option>Last month</option>
            <option>Last week</option>
            <option>Last year</option>
          </select>
        </div>
      </div>
      <p className="text-gray-500 text-sm mb-4">Productivity analytics</p>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 20, bottom: 10, left: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="MaxFocus"
            stroke="#FF6B6B"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="MinFocus"
            stroke="#7167FF"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="flex justify-between items-center mt-4">
        <div className="text-gray-500 text-sm">
          <p className="inline-flex items-center">
            <span className="w-4 h-4 bg-red-500 rounded-full inline-block mr-2"></span>
            Maximum of focus
          </p>
          <p className="inline-flex items-center ml-6">
            <span className="w-4 h-4 bg-purple-500 rounded-full inline-block mr-2"></span>
            Min or lack of focus
          </p>
        </div>
        <div className="text-2xl font-semibold">
          <p>
            41%<span className="text-sm text-gray-500 ml-1">Avg. Conc-ion</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsGraph;
