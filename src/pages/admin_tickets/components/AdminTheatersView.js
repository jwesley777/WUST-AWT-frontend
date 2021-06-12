import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as api from '../../../constants/api';
import AdminTheatre from "./AdminTheatre";

function AdminTheatersView(props) {
    const {handleSubmit, register, errors, getValues} = useForm();
    const [theaters, setTheaters] = useState();

    useEffect(() => {
        axios.get(api.ticketsAdminGetTheaters, 
            {
                headers: {Authorization: `token ${Cookies.get('ticketsToken')}`}
            }).then((res)=>{
                if (res.status==200) {
                    setTheaters(res.data);
                }
            })
    }, [props.updateTrigger]);

    const submit = data => {
        if (data.name !== '') {
            axios.post(api.ticketsAdminGetTheaters,
                {
                    "Name":data.name
                }, 
                {
                    headers: {Authorization: `token ${Cookies.get('ticketsToken')}`}
                }).then((res)=>{
                    if (res.status==200) {
                        props.setUpdateTrigger(!props.updateTrigger);
                    }
                })
        }

    };

    return (
        <div>
            <details>
            <summary>Theatres</summary>
            {theaters && 
                theaters.map(f => <AdminTheatre theatre={f}
                    updateTrigger={props.updateTrigger} setUpdateTrigger={props.setUpdateTrigger}/>)
            }
            <h4>Add new theatre</h4>
            <form onSubmit={handleSubmit(submit)}>
                <label>
                    Name:
                    <input                  
                        {...register("name",{
                            required: 'required',
                        })}
                        name="name"
                    />
                </label>

            <button>Submit</button>
            </form>
            </details>
        </div>
    )
}
export default AdminTheatersView;