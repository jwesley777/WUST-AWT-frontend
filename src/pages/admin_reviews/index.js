import { useState } from "react";
import AdminFilmsView from "./components/AdminFilmsView";
import AdminUsersView from "./components/AdminUsersView";

function ReviewsAdmin(props) {
    const [updateTrigger, setUpdateTrigger] = useState(false);

    return (
        <div>
            <AdminFilmsView updateTrigger={updateTrigger} setUpdateTrigger={setUpdateTrigger}/>
            <AdminUsersView updateTrigger={updateTrigger} setUpdateTrigger={setUpdateTrigger}/>
        </div>

    );
}
export default ReviewsAdmin;