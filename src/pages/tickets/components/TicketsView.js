import { useEffect, useState } from "react";
import { TicketsViewWrapper } from "./styles";
import * as api from '../../../constants/api';
import Cookies from "js-cookie";
import axios from "axios";

function TicketsView(props) {
    const [tickets, setTickets] = useState();

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(api.ticketsGetTickets, {
                headers: {Authorization: `token ${Cookies.get('ticketsToken')}`}
            });
            console.log(res.data);
            setTickets(res.data);
        };
        fetchUser();
    },[props.boughtTicketTrigger]);

    return (
        <TicketsViewWrapper>
            <h2>Tickets</h2>
            {tickets &&
            <ul>
                {tickets.map((o) => 
                <li key={o.id}>
                    <p>{o.session.film.name}</p>
                    <p>{o.session.hall.theatre.name}, hall №{o.session.hallId}</p>
                    <p>{o.session.sessionDateTime.replace('T',' ')}</p>
                    <p>row: {o.row}, place: {o.column}</p>
                </li>)}
            </ul>
            }
            {!tickets && "You don't have tickets yet"}
        </TicketsViewWrapper>                 
    );
}

export default TicketsView;