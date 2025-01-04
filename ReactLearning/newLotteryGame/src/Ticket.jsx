import TicketNum from "./TicketNum"


function Ticket({ticket}){
    return(
        <>
        <div>
            {ticket.map((item, index)=>{
              return(
                <TicketNum num={item} key={index}/>
              )  
            })}
        </div>
        </>
    )
}

export default Ticket;