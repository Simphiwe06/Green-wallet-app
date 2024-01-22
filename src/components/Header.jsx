// src/Header.js
import React from 'react';
import { AiOutlineDollarCircle } from 'react-icons/ai';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <AiOutlineDollarCircle size={30} style={{ marginRight: '10px' }} />
        <span>GreenWallet</span>
      </div>
      <nav>
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#about">About</a>
      </nav>
    </header>
  );
}

export default Header;
