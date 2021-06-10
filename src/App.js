import React from 'react'
import './App.css';
import Header from "./Header"
import TinderCards from './TinderCards.js'
import SwipeButtons from './SwipeButtons'

function App() {
  return (
    // BEM
    <div className="app">
       <Header />
     {/* Tinder cards */}
      <TinderCards/>
     {/* Swipe Buttons */}
     <SwipeButtons/>
    </div>
  );
}

export default App;
