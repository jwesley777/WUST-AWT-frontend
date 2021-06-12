import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TicketsAdmin from "../admin_tickets";
import BuyTicketView from "./components/BuyTicketView";
import FilmsView from "./components/FilmsView";
import ProfileView from "./components/ProfileView";
import SessionsView from "./components/SessionsView";
import TicketsView from "./components/TicketsView";
import { Column, TicketsHomeWrapper } from "./styles";

function TicketsHome(props) {
    const user = useSelector(state => state.user.ticketsUser);
    const [chosenFilmId, setChosenFilmId] = useState("");
    const [chosenSessionId, setChosenSessionId] = useState("");
    const [boughtTicketTrigger, setBoughtTicketTrigger] = useState(true); // workaround to re-render BuyTicketView
    
    if (user.role==2) {
        return <TicketsAdmin/>;
    }

    console.log(user);

    return (
        <TicketsHomeWrapper>
            <Column>
                <ProfileView user={user}/>
                <TicketsView
                boughtTicketTrigger={boughtTicketTrigger}
                />
                <FilmsView setFilmId={(id) => {setChosenSessionId();setChosenFilmId(id);}}/>
            </Column>
            <Column>
                <SessionsView filmId={chosenFilmId} setSessionId={setChosenSessionId}/>
                <BuyTicketView sessionId={chosenSessionId}
                boughtTicketTrigger={boughtTicketTrigger} 
                setBoughtTicketTrigger={setBoughtTicketTrigger}/>
            </Column>
            
        </TicketsHomeWrapper>
    );
}

export default TicketsHome;