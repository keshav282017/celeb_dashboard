// src/components/CustomChart.jsx

import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Button } from '@mui/material';

const initialChartData = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
];

const CustomChart = () => {
  const [chartData, setChartData] = useState(initialChartData);

  const handleUpdateChartData = () => {
    const updatedChartData = chartData.map(item => ({
      ...item,
      uv: Math.floor(Math.random() * 5000),
      pv: Math.floor(Math.random() * 5000),
    }));
    setChartData(updatedChartData);
  };

  return (
    <div>
      <h2>Chart</h2>
      <Button variant="contained" color="primary" onClick={handleUpdateChartData}>
        Update Chart Data
      </Button>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomChart;
