import Slots from './Slots';
import './App.css'

function App() {
  return (
    <div>
    <h1>Welcome to the Slot Machine!</h1>
      <Slots val1="🍒" val2="🍒" val3="🍒" />
      <Slots val1="🍌" val2="🍌" val3="🍌" />
      <Slots val1="🍒" val2="🍌" val3="🍒" />
  </div>
  );
}

export default App;
