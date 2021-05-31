import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ProfileViewWrapper } from "./styles";
import * as api from '../../../constants/api';
import Cookies from "js-cookie";
import { useHistory } from "react-router";

function ProfileView(props) {
    const {handleSubmit, register, errors} = useForm();
    const submit = data => {
        if (data.linkToken !== '') {
            axios.post(api.reviewsLinkToken, {"LinkToken": data.linkToken}, {
                headers: {Authorization: `token ${Cookies.get('reviewsToken')}`}
            }).then(window.location.reload())
        }

    };

    return (
        <ProfileViewWrapper>
            <h2>Profile</h2>
            <p>Id: {props.user.id}</p>
            {props.user.linkToken && <p>LinkToken: {props.user.linkToken}</p> }
            <form onSubmit={handleSubmit(submit)}>
                <label>
                    Set link-token: <input
                        {
                            ...register("linkToken", {
                                required: "required"
                            })
                        }
                        name="linkToken"
                    />
                </label> <button>Submit</button>
            </form>
        </ProfileViewWrapper>                 
    );
}

export default ProfileView;