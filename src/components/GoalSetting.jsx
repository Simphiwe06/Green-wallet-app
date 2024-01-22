// src/GoalSetting.js
import React, { useState } from 'react';
import { RiMoneyDollarCircleLine } from 'react-icons/ri'; // Import money icon

function GoalSetting({ setEcoMilestone }) {
  const [goal, setGoal] = useState('');

  const handleGoalChange = (e) => {
    setGoal(e.target.value);
  };

  const setSavingsGoal = () => {
    setEcoMilestone(`Congratulations! You've set a savings goal of R${goal}`);
  };

  return (
    <div className="goal-setting">
      <h2><RiMoneyDollarCircleLine /> Set Savings Goal</h2>
      <input type="number" placeholder="Enter your savings goal" value={goal} onChange={handleGoalChange} />
      <button onClick={setSavingsGoal}>Set Goal</button>
    </div>
  );
}

export default GoalSetting;
