import { useState } from 'react'
import './App.css'
import Calendar from './Components/Calendar/Calendar'
import TennisScores from "./Components/TennisScores/TennisScores"

function App() {
  

  return (
      <div className='App'>
        <Calendar/>
        <div className='content-container'>
        
        <TennisScores />
        </div>
      </div>
  )
}

export default App
