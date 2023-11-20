import Slots from './Slots';
import { Clicker } from './Clicker';
import './App.css'
import Counter from './Counter';
import Toggler from './Toggler';
import TogglerCounter from './ToggleCounter';

function App() {
  return (
    <div>
      <h1>useState()와 렌더링</h1>
      <Counter />
      {/* <h1>Multiple State in a Component</h1>
      <TogglerCounter />
      <TogglerCounter /> */}
      {/* <Counter num={1}/> */}
      {/* <Clicker message="HI!!!!" buttonText="Please Click Me" />
      <Clicker message="Please Stop Clicking Me!" buttonText="do not click" /> */}
    </div>
  );
}

export default App;
