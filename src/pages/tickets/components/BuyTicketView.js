import axios from "axios";
import { useEffect, useState } from "react";
import { BuyTicketForm, BuyTicketViewWrapper } from "./styles";
import * as api from '../../../constants/api';
import Cookies from "js-cookie";

function BuyTicketView(props) {
    const [session, setSession] = useState();

    useEffect(() => {
        console.log(props.sessionId)
        if (props.sessionId) {
            const fetchUser = async () => {
                const res = await axios.get(api.ticketsGetSessionWithTickets(props.sessionId), {
                    headers: {Authorization: `token ${Cookies.get('ticketsToken')}`}
                });
                console.log(res.data);
                setSession(res.data);
            };
            fetchUser();
        } else {
            setSession();
        }
    },[props.sessionId]);

    function chooseTicket(r,c) {

    }
    function range(n) {
        return Array.from(Array(n)).map((_, i) => i+1)
    }
    function makeButton(r,c) {
        let found = session.tickets.find((o) => o.row==r && o.column==c);
        if (found) {
            return <button>
                occ
            </button>
        }
        return (
            <button    
                type="button"            
                onClick={(e) => chooseTicket(r,c)}> 
                {r}, {c}
            </button>
        );
    }

    const getPlaces = () => {        
        return range(session.hall.nRows).map((i) => { return (
            <div>
                {
                    range(session.hall.nColumns).map((j) => {
                        return makeButton(i,j);
                    })
                }
            </div>)
        });
    }


    return (
        <BuyTicketViewWrapper>
        <h2>Buy ticket</h2>
        <p>{props.sessionId}</p>
            <BuyTicketForm>
                {session && getPlaces()}
            </BuyTicketForm>
        </BuyTicketViewWrapper>
    )
}

export default BuyTicketView;