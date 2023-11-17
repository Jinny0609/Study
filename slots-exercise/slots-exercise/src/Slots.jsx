export default function Slots({val1, val2, val3}){
    // 승패 여부 확인 로직
    const isWinner = val1 === val2 && val1 === val3;
return(
    <div>
        <h1>
            {val1} {val2} {val3}
        </h1>
        {/* 동적으로 렌더링되는 로직을 추가 */}
        <h2 style={{color: isWinner ? "green" : "red"}}>{isWinner ? "You win!" : "You lose"}
        </h2>
        {isWinner && <h3>Congrats</h3>}
    </div>
)
}