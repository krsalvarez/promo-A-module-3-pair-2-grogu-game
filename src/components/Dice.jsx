import "../scss/App.scss";

function Dice({onClickDice}) {

    return(
        <div>
        <button className="dice" onClick= {onClickDice}>🎲</button>;
    </div>
    )
    
}

export default Dice;