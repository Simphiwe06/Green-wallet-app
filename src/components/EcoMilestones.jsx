// src/EcoMilestones.js
import React, { useState } from 'react';
import { GiLaurelCrown } from 'react-icons/gi'; 

function EcoMilestones({ ecoMilestone }) {
  const [milestones, setMilestones] = useState([]);

  return (
    <div className="eco-milestones">
      <h2><GiLaurelCrown /> Eco-Milestones</h2>
      {ecoMilestone && <p>{ecoMilestone}</p>}
      <ul>
        {milestones.map((milestone, index) => (
          <li key={index}><span>{milestone}</span></li>
        ))}
      </ul>
    </div>
  );
}

export default EcoMilestones;
