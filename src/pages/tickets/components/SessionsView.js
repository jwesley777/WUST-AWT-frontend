import { useState } from "react";
import { SessionsViewWrapper } from "./styles";

function SessionsView(props) {
    const [sessions, setSessions] = useState([
        {'sessionId':1,'datetime':"ever"},
        {'sessionId':2,'datetime':"never"}
    ]);
    const [session, setSession] = useState({'sessionId':0,'datetime':""});


    return (
        <SessionsViewWrapper>
            <h2>Sessions</h2>
            <ul>
                {sessions.map((o) => 
                <li key={o.sessionId}>id={o.sessionId} 
                    , datetime={o.datetime} 
                </li>)}
            </ul>
        </SessionsViewWrapper>                 
    );
}

export default SessionsView;