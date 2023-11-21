import { useState } from "react";
export default function ScoreKeeper({numPlayer=10, target=5}){
    const [scores, setScores] = useState(new Array(numPlayer).fill(0));
    // const incrementScore = (idx) => {
    //     setScores(prevScores => {
    //         const copy = [...prevScores];
    //         copy[idx] += 1;
    //         return copy;
    //     })
    // }

    const incrementScore = (idx) => {
        setScores(prevScores => {
            return prevScores.map((score, i) => {
                if(i === idx) return score + 1;
                return score;
            })
        });
    };

    const reset = () => {
        setScores(new Array(numPlayer).fill(0));
    }
    return (
        <div>
            <h1>Score Kepper</h1>
            <ul>
                {scores.map((score, idx) => {
                    return <li key={idx}>
                        Player{idx + 1}: {score}
                        <button onClick={() => incrementScore(idx)}>+1</button>
                        {score >= target && "Winnner!"}
                    </li>
                })}
            </ul>
            <button onClick={reset}>Reset</button>
        </div>
    )
}



// function ScoreKeeper() {
//     const [scores, setScores] = useState({p1Score: 0, p2Score: 0})
//     function increaseP1Score(){
//         setScores(oldScores => {
//             return { ...scores, p1Score: oldScores.p1Score + 1}
//         });
//     }
//     function increaseP2Score(){
//         setScores(oldScores => {
//             return { ...scores, p2Score: oldScores.p2Score + 1}
//         });
//     }
//     return (
//         <div>
//             <p>Player 1: {scores.p1Score}</p>
//             <p>Player 2: {scores.p2Score}</p>
//             <button onClick={increaseP1Score}>+1 Player 1</button>
//             <button onClick={increaseP2Score}>+1 Player 2</button>
//         </div>
//     )
// }


