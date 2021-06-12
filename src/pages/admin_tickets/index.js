import { useState } from "react";
import AdminFilmsView from "./components/AdminFilmsView";
import AdminHallsView from "./components/AdminHallsView";
import AdminSessionsView from "./components/AdminSessionsView";
import AdminTheatersView from "./components/AdminTheatersView";
import AdminUsersView from "./components/AdminUsersView";

function TicketsAdmin(props) {
    const [updateTrigger, setUpdateTrigger] = useState(false);
    return (
        <div>
            <AdminFilmsView updateTrigger={updateTrigger} setUpdateTrigger={setUpdateTrigger}/>
            <AdminTheatersView updateTrigger={updateTrigger} setUpdateTrigger={setUpdateTrigger}/>
            <AdminHallsView updateTrigger={updateTrigger} setUpdateTrigger={setUpdateTrigger}/>
            <AdminSessionsView updateTrigger={updateTrigger} setUpdateTrigger={setUpdateTrigger}/>
            <AdminUsersView updateTrigger={updateTrigger} setUpdateTrigger={setUpdateTrigger}/>
        </div>
    )
}

export default TicketsAdmin;