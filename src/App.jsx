import { useState } from 'react'
import './App.css'
import Calendar from './Components/Calendar/Calendar'
import TennisScores from "./Components/TennisScores/TennisScores"

function App() {
  

  return (
      <div className='App'>
        <Calendar/>
        <TennisScores />
      </div>
  )
}

export default App
