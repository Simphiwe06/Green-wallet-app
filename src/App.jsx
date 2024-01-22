// src/App.js
import React, { useState } from  'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GoalSetting from './/components/GoalSetting';
import EcoMilestones from './components/EcoMilestones';
import GreenInsights from './components/GreenInsights';
import './App.css';

function App() {
  const [ecoMilestone, setEcoMilestone] = useState('');
  const [savings, setSavings] = useState(0);
  const [carbonFootprint, setCarbonFootprint] = useState(0);

  const updateEcoMilestones = (milestone) => {
    setEcoMilestone(milestone);
    setSavings((prevSavings) => prevSavings + parseInt(milestone.split('$')[1], 10));
    setCarbonFootprint((prevFootprint) => prevFootprint - 5);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h1>GreenWallet - Your Money, Your Planet</h1>
        <GoalSetting setEcoMilestone={updateEcoMilestones} />
        <EcoMilestones ecoMilestone={ecoMilestone} />
        <GreenInsights savings={savings} carbonFootprint={carbonFootprint} />
      </div>
      <Footer />
    </div>
  );
}

export default App;