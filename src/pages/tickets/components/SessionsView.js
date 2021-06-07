import axios from "axios";
import Cookies from "js-cookie";
import { checkPropTypes } from "prop-types";
import { useEffect, useState } from "react";
import * as api from '../../../constants/api';
import { SessionsViewWrapper } from "./styles";

function SessionsView(props) {
    const [sessions, setSessions] = useState();
    
    
    useEffect(() => {
        if (props.filmId) {
            console.log('fetching ' + props.filmId)
            const fetchUser = async () => {
                const res = await axios.get(api.ticketsGetSessions(props.filmId), {
                    headers: {Authorization: `token ${Cookies.get('ticketsToken')}`}
                });
                console.log(res.data);
                setSessions(res.data);
            };
            fetchUser();
        } else {
            setSessions();
        }
    },[props.filmId]);




    return (
        <SessionsViewWrapper>
            {sessions &&
            <h2>Sessions</h2>
            }
            {sessions &&
            <ul>
                {sessions.map((o) => 
                <li key={o.id}>
                    <p>Theatre: {o.hall.theatre.name}</p>
                    <p>Hall: {o.hall.id}</p>
                    <p>Time: {o.sessionDateTime.replace('T',' ')}</p> <button onClick={() => props.setSessionId(o.id)}>Choose</button>
                </li>)}
            </ul>
            }
        </SessionsViewWrapper>    
                             
    );
}

export default SessionsView;