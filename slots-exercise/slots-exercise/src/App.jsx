import Slots from './Slots';
import { Clicker } from './Clicker';
import './App.css'

function App() {
  return (
    <div>
      <Clicker message="HI!!!!" buttonText="Please Click Me" />
      <Clicker message="Please Stop Clicking Me!" buttonText="do not click" />
    </div>
  );
}

export default App;
