import { useState } from "react";
import { ProfileViewWrapper } from "./styles";

function ProfileView(props) {
    return (
        <ProfileViewWrapper>
            <h2>Profile</h2>
            <p>{props.user.name} {props.user.surname}</p>
            <p>LinkToken: <input readOnly={true} value={props.user.linkToken} /></p>
        </ProfileViewWrapper>                 
    );
}

export default ProfileView;