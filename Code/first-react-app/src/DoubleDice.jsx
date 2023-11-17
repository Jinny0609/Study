export default function DoubleDice(){
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    const styles = {color: num1 == num2 ? "green" : "red" }
    const isWinner = num1 === num2;
    return (
        <div className="DoubleDice" style={styles}>
            <h2>Double Dice</h2>
            {isWinner && <h3>You win!</h3>}
            <p>Num1 :{num1}</p>
            <p>Num2 :{num2}</p>
        </div>
    )
}

// export default function DoubleDice(){
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
//     return (
//         <div>
//             <h2>DoubleDice</h2>
//             <h3>{num1 === num2 ? <h3>You win!</h3 >: null }</h3>
//             <p>Num1 :{num1}</p>
//             <p>Num2 :{num2}</p>
//         </div>
//     )
// }

// export default function DoubleDice(){
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
//     return (
//         <div>
//             <h2>{num1 === num2 ? 'You Win!' : 'You Lose :('}</h2>
//             <p>Num1 :{num1}</p>
//             <p>Num2 :{num2}</p>
//         </div>
//     )
// }

// export default function DoubleDice(){
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
//     const result = num1 === num2 ? 'You Win!' : 'You Lose :(';
//     return (
//         <div>
//             <h2>{result}</h2>
//             <p>Num1 :{num1}</p>
//             <p>Num2 :{num2}</p>
//         </div>
//     )
// }


// export default function DoubleDice(){
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
//     const result = num1 === num2 ? 'You Win!' : 'You Lose :(';
//     if(num1 === num2){
//         return (
//             <div>
//                 <h2>{result}</h2>
//                 <p>Num1 :{num1}</p>
//                 <p>Num2 :{num2}</p>
//             </div>
//         )
//     }
//     return (
//         <div>
//             <h2>You Lose :(</h2>
//             <p>Num1 :{num1}</p>
//             <p>Num2 :{num2}</p>
//         </div>
//     )
// }
