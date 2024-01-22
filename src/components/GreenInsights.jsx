// src/GreenInsights.js
import React from 'react';
import { FaTree } from 'react-icons/fa'; // Import tree icon

function GreenInsights({ savings, carbonFootprint }) {
  return (
    <div className="green-insights">
      <h2><FaTree /> Green Insights</h2>
      <p>Savings: R{savings}</p>
      <p>Carbon Footprint Reduced: {carbonFootprint} kg CO2</p>
    </div>
  );
}

export default GreenInsights;
