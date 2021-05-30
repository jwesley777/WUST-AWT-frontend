import { useState } from "react";
import { TicketsViewWrapper } from "./styles";

function TicketsView(props) {
    const [tickets, setTickets] = useState([
        {'ticketId':2,'col':1,'row':1},
        {'ticketId':1,'col':2,'row':1}
    ]);
    const [ticket, setTicket] = useState({'ticketId':0,'col':0,'row':0});


    return (
        <TicketsViewWrapper>
            <h2>Tickets</h2>
            <ul>
                {tickets.map((o) => 
                <li key={o.ticketId}>id={o.ticketId} 
                    , col={o.col} 
                    , row={o.row}
                </li>)}
            </ul>
        </TicketsViewWrapper>                 
    );
}

export default TicketsView;