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
    },[props.sessionId, props.boughtTicketTrigger]);

    function chooseTicket(r,c) {
        axios.post(api.ticketsBuyTicket,
        {
            "SessionId":props.sessionId,
            "RowNumber":r,
            "PlaceNumber":c
        }, 
        {
            headers: {Authorization: `token ${Cookies.get('ticketsToken')}`}
        }).then((res)=>{
            if (res.status==200) {
                props.setBoughtTicketTrigger(!props.boughtTicketTrigger);
            }
        })
    }
    function range(n) {
        return Array.from(Array(n)).map((_, i) => i+1)
    }
    function makeButton(r,c) {
        let found = session.tickets.find((o) => o.row==r && o.column==c);
        if (found) {
            return <button className="occupied" onClick = {(e) => {e.preventDefault()}}>
                *
            </button>
        }
        return (
            <button    
                className="free"
                type="button"            
                onClick={(e) => chooseTicket(r,c)}> 
                buy
            </button>
        );
    }

    const getPlaces = () => {  
        return range(session.hall.nRows).map((i) => { return (
                <div>
                row: {i} {
                    range(session.hall.nColumns).map((j) => {
                        return makeButton(i,j);
                    })
                }
                </div>
            )
        });
    }


    return (
        <BuyTicketViewWrapper>
        {props.sessionId &&
        <h2>Buy ticket</h2>
        }
            <BuyTicketForm>
                        {session && getPlaces()}
            </BuyTicketForm>
        </BuyTicketViewWrapper>
    )
}

export default BuyTicketView;