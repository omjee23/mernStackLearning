import { useState } from "react";
import { GenNumber, sum } from "./helper";
function Lottery() {
  const [ticket, SetTicket] = useState(GenNumber(3));
  let isWinning = sum(ticket) === 15;
  function buyTicket(){
    SetTicket(GenNumber(3))
  }
  return (
    <>
      <div>
        <h3>Lottery Tickets </h3>
        <div className="ticket">
          <span>{ticket[0]}</span>
          <span>{ticket[1]}</span>
          <span>{ticket[2]}</span>
        </div>
        <button onClick={buyTicket}>Buy Ticket</button>
        <h4>{isWinning && "Congratulations , You Won"}</h4>
      </div>
    </>
  );
}
export default Lottery;
