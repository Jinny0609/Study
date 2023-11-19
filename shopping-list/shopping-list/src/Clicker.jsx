function handClicker() {
    console.log("Clicked!!");
}

function HandleHover(){
    console.log("HOVERED!!");
}

export default function Clicker(){
    return (
    <div>
      <p onMouseOver={HandleHover}>Hover Over Me</p>
      <button onClick={handClicker}>Click</button>
    </div>
  );
}