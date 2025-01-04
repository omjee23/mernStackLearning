import { useState } from "react";
import Ticket from "./Ticket";
import { generateRandom , sum} from "./helper";

export default function Lottery({n = 3, winningSum = 15}){
    const [ticket, setTicket] = useState(generateRandom(n));
    let isWinning = sum(ticket) === winningSum;

    function BuyTicket(){
        setTicket(generateRandom(n))
    }
    return(
        <>
        <div>
            <Ticket  ticket={ticket}/>
            <button onClick={BuyTicket}>Buy ticket</button>
            <h3>{isWinning && 'Congratulations You won!'}</h3>
        </div>
        </>
    )
}