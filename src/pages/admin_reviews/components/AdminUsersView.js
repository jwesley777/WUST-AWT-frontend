import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as api from '../../../constants/api';
import AdminUser from "./AdminUser";

function AdminUsersView(props) {
    const {handleSubmit, register, errors, getValues} = useForm();
    const [users, setUsers] = useState();

    useEffect(() => {
        axios.get(api.reviewsAdminGetUsers, 
            {
                headers: {Authorization: `token ${Cookies.get('reviewsToken')}`}
            }).then((res)=>{
                if (res.status==200) {
                    setUsers(res.data);
                }
            });
    }, [props.updateTrigger]);

    const submit = data => {
        if (data.login !== '' && data.password !== '' && data.name !== '' && data.surname !== '') {
            axios.post(api.reviewsAdminGetUsers,
                {
                    "Name":data.name,
                    "Surname":data.surname,
                    "Login":data.login,
                    "Password":data.password,
                    "Role":parseInt(data.role)
                }, 
                {
                    headers: {Authorization: `token ${Cookies.get('reviewsToken')}`}
                }).then((res)=>{
                    if (res.status==200) {
                        props.setUpdateTrigger(!props.updateTrigger);
                    }
                })
        }

    };


    return <div>
        <details>
            <summary>Users</summary>
            {users &&
                users.map(u=> <AdminUser user={u}
                    updateTrigger={props.updateTrigger} setUpdateTrigger={props.setUpdateTrigger}/>)
            }

            <h4>Add new user</h4>
            <form onSubmit={handleSubmit(submit)}>
                <label>
                    Login: 
                    <input                  
                        {...register("login",{
                            required: 'required',
                        })}
                        name="login"
                    />
                </label>
                <label>
                    Password: 
                    <input
                        {...register("password",{
                        required: 'required',
                        pattern: {
                            value: /^[A-Z0-9._]{3,15}$/i,
                            message: 'invalid password'
                        }
                        })}
                        type="password"
                        name="password"
                        id="password"
                    />
                    
                </label>
                <label>
                    Name: 
                    <input                  
                        {...register("name",{
                            required: 'required',
                        })}
                        name="name"
                    />
                </label>
                <label>
                    Surname: 
                    <input                  
                        {...register("surname",{
                            required: 'required',
                        })}
                        name="surname"
                    />
                </label>
                <label>
                    Role: 
                    <select defaultValue={0} {...register("role",{required: "required"})}>
                        <option value={0}>0</option>
                        <option value={2}>2</option>
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </details>
    </div>
}

export default AdminUsersView;