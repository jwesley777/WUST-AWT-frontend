import { useState } from "react";
import { ProfileViewWrapper } from "./styles";

function ProfileView(props) {
    const [userId, setUserId] = useState("");
    const [userLinkToken, setUserLinkToken] = useState("");
    return (
        <ProfileViewWrapper>
            <h2>Profile</h2>
            <p>Id: {userId}</p>
            <p>LinkToken: {userLinkToken}</p>
        </ProfileViewWrapper>                 
    );
}

export default ProfileView;