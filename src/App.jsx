import React, { useState } from 'react'
import './App.css'
import Calendar from './Components/Calendar/Calendar'
import TennisScores from "./Components/TennisScores/TennisScores"

function App() {
 const [selectedDate, setSelectedDate] = useState(() => new Date());
  const [selectedMatch, setSelectedMatch] = useState(null);

  return (
      <div className='App'>
        <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
        <div className='content-container'>
        
        <TennisScores selectedDate={selectedDate} setSelectedMatch={setSelectedMatch}/>
        </div>
      </div>
  )
}

export default App
