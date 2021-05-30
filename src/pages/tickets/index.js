import BuyTicketView from "./components/BuyTicketView";
import FilmsView from "./components/FilmsView";
import ProfileView from "./components/ProfileView";
import SessionsView from "./components/SessionsView";
import TicketsView from "./components/TicketsView";
import { Column, TicketsHomeWrapper } from "./styles";

function TicketsHome(props) {
    

    return (
        <TicketsHomeWrapper>
            <Column>
                <ProfileView/>
                <TicketsView/>
                <FilmsView/>
            </Column>
            <Column>
                <SessionsView/>
                <BuyTicketView/>
            </Column>
            
        </TicketsHomeWrapper>
    );
}

export default TicketsHome;