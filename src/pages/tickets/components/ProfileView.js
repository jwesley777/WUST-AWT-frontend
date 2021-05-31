import { useState } from "react";
import { ProfileViewWrapper } from "./styles";

function ProfileView(props) {
    return (
        <ProfileViewWrapper>
            <h2>Profile</h2>
            <p>Id: {props.user.id}</p>
            <p>LinkToken: {props.user.linkToken}</p>
        </ProfileViewWrapper>                 
    );
}

export default ProfileView;