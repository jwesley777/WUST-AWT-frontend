import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as api from '../../../constants/api';
import AdminFilm from "./AdminFilm";

function AdminFilmsView(props) {
    const {handleSubmit, register, errors, getValues} = useForm();
    const [films, setFilms] = useState();

    useEffect(() => {
        axios.get(api.reviewsAdminGetFilms, 
            {
                headers: {Authorization: `token ${Cookies.get('reviewsToken')}`}
            }).then((res)=>{
                if (res.status==200) {
                    setFilms(res.data);
                }
            })
    }, [props.updateTrigger]);

    const submit = data => {
        if (data.name !== '' && data.TicketServiceFilmId !== '') {
            axios.post(api.reviewsAdminGetFilms,
                {
                    "Name":data.name,
                    "TicketServiceFilmId":parseInt(data.TicketServiceFilmId)
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

    return (
        <div>
            <details>
            <summary>Films</summary>
            {films && 
                films.map(f => 
                    <AdminFilm film={f}
                    updateTrigger={props.updateTrigger} setUpdateTrigger={props.setUpdateTrigger}/>)
            }
            <h4>Add new film</h4>

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
                <label>
                    TicketServiceFilmId:
                    <input             
                        type="number"     
                        {...register("TicketServiceFilmId",{
                            required: 'required',
                        })}
                        name="TicketServiceFilmId"
                    />
                </label>

            <button>Submit</button>
            </form>
        </details>
        </div>
    )
}
export default AdminFilmsView;