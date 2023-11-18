import './App.css'
import ShoppingList from './ShoppingList';

const data = [
  {id:1, item : "egg", quantitiy: 12, completed: false},
  {id:2, item : "milk", quantitiy: 1, completed: true},
  {id:3, item : "chicken breasts", quantitiy: 4, completed: false},
  {id:4, item : "carrots", quantitiy: 6, completed: false},
];

function App() {
  return (
    <div>
      <ShoppingList items={data} />
    </div>
  )
}

export default App
