import { useState } from 'react'
import ColorBox from './ColorBox'
import ColorBoxGrid from './ColorBoxGrid';
import './App.css'

const colors= [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#00bcd4",
  "#009688",
  "#4caf50",
  "#cddc39",
  "#ffeb3b",
  "#ff9800",
  "#ff5722",
  "#795548",
  "#9e9e9e",
  "#607d8b",
  "#ffffff",
  "#000000",
  "#e0f7fa",
  "#fffde7",
  "#fafafa",
];

function App() {
  return (
    <div>
      <ColorBoxGrid colors={colors} />
    </div>
  )
}

export default App;
