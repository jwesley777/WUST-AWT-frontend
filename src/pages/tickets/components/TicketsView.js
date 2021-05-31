import { useEffect, useState } from "react";
import { TicketsViewWrapper } from "./styles";
import * as api from '../../../constants/api';
import Cookies from "js-cookie";
import axios from "axios";

function TicketsView(props) {
    const [tickets, setTickets] = useState([
    ]);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(api.ticketsGetTickets, {
                headers: {Authorization: `token ${Cookies.get('ticketsToken')}`}
            });
            setTickets(res.data);
        };
        fetchUser();
    },[]);

    return (
        <TicketsViewWrapper>
            <h2>Tickets</h2>
            <ul>
                {tickets.map((o) => 
                <li key={o.id}>id={o.id} 
                    , sessionId={o.sessionId}
                    , col={o.column} 
                    , row={o.row}
                </li>)}
            </ul>
        </TicketsViewWrapper>                 
    );
}

export default TicketsView;