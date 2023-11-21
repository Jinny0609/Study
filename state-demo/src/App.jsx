import './App.css'
import Counter from './Counter'
import Dumbo from './Dumbo'
import ScoreKeeper from './ScoreKeeper'
import EmojiClicker from './EmojiClicker'

function App() {
  return (
    <div>
      {/* <h1>State Demo</h1> */}
      {/* <Counter/> */}
      {/* <Dumbo/> */}
      <ScoreKeeper numPlayers={10} target={5} />
      {/* <EmojiClicker /> */}
    </div>
  )
}

export default App
