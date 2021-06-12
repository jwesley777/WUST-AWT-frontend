import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as api from '../../../constants/api';
import AdminHall from "./AdminHall";

function AdminHallsView(props) {
    const {handleSubmit, register, errors, getValues} = useForm();
    const [halls, setHalls] = useState();
    const [theatres, setTheatres] = useState();
    const array2To10 = [2,3,4,5,6,7,8,9,10];
    useEffect(() => {
        axios.get(api.ticketsAdminGetHalls, 
            {
                headers: {Authorization: `token ${Cookies.get('ticketsToken')}`}
            }).then((res)=>{
                if (res.status==200) {
                    setHalls(res.data);
                }
            });
        
            axios.get(api.ticketsAdminGetTheaters, 
                {
                    headers: {Authorization: `token ${Cookies.get('ticketsToken')}`}
                }).then((res)=>{
                    if (res.status==200) {
                        setTheatres(res.data);
                    }
                });
        
    }, [props.updateTrigger]);

    const submit = data => {
        if (parseInt(data.nRows) != 0 && parseInt(data.theatreId) !== 0 && parseInt(data.nCols) != 0) {
            axios.post(api.ticketsAdminGetHalls,
                {
                    "TheatreId":parseInt(data.theatreId),
                    "nRows":parseInt(data.nRows),
                    "nColumns":parseInt(data.nCols)
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
            <summary>Halls</summary>
            {halls && 
                halls.map(f => <AdminHall hall={f}
                    updateTrigger={props.updateTrigger} setUpdateTrigger={props.setUpdateTrigger}/>)
            }
            {theatres && theatres.length > 0 && <div>
                <h4>Add new hall</h4>
                <form onSubmit={handleSubmit(submit)}>
                    <label>
                    TheatreId:
                        <select defaultValue={theatres[0].id} {...register("theatreId",{required: "required"})}>
                            {theatres.map(t => <option value={t.id}>{t.id}</option>)}
                        </select>
                    </label>

                    <label>
                        Rows:                    
                        <select defaultValue={2} {...register("nRows",{required: "required"})}>
                            {array2To10.map(t => <option value={t}>{t}</option>)}
                        </select>
                    </label>

                    <label>
                        Places:                    
                        <select defaultValue={2} {...register("nCols",{required: "required"})}>
                            {array2To10.map(t => <option value={t}>{t}</option>)}
                        </select>
                    </label>

                <button>Submit</button>
                </form>
            </div>
            }
            </details>
        </div>
    )
}
export default AdminHallsView;