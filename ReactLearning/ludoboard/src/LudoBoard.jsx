
import { useState } from "react";

function LudoBoard(){
        const [moves , setMoves] = useState({blue: 0 , red: 0 ,yellow: 0 , green: 0});

        function updateBlue(){
            setMoves((preMoves)=>{
                return{...preMoves, blue: preMoves.blue + 1}
            })
        }
        function updateRed(){
            setMoves((preMoves)=>{
                return{...preMoves, red: preMoves.red + 1}
            })
        }function updateYellow(){
            setMoves((preMoves)=>{
                return{...preMoves, yellow: preMoves.yellow+ 1}
            })
        }function updateGreen(){
            setMoves((preMoves)=>{
                return{...preMoves, green: preMoves.green + 1}
            })
        }
    return(
        <>
        <div>
            <h2>
                Game Start
            </h2>
            <div>
                <p>
                    Blue = {moves.blue}
                </p>
                <button style={{backgroundColor: 'blue'}} onClick={updateBlue}>
                    +1
                </button>
                <p>
                    Red = {moves.red}
                </p>
                <button style={{backgroundColor: 'red'}} onClick={updateRed} >
                    +1
                </button>
                <p>
                    Yellow = {moves.yellow}
                </p>
                <button style={{backgroundColor: 'yellow'}} onClick={updateYellow}>
                    +1
                </button>
                <p>
                    Green = {moves.green}
                </p>
                <button style={{backgroundColor: 'green'}} onClick={updateGreen}>
                    +1
                </button>
            </div>
        </div>
        </>
    )
}

export default LudoBoard;