import { useState } from "react";
import "./ToggleCounter.css";

export default function TogglerCounter(){
    const [isHappy, setIsHappy] = useState(true);
    const [count, setCount] = useState(0);
    const toggleIsHappy = () => setIsHappy(!isHappy);
    const incrementCount = () => setCount(count + 2);
    return (
        <div>
            <p className="ToggleCounter" onClick={toggleIsHappy}>
                {isHappy ? "😊" : "😂"}
            </p>
            <p>{count}</p>
            <button onClick={incrementCount}>+</button>
        </div>
    );
}