import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { Controller, useForm } from 'react-hook-form';
import * as api from '../../../constants/api';
import AdminSession from './AdminSession';
import "react-datepicker/dist/react-datepicker.css";

function AdminSessionsView(props) {
    const {handleSubmit, register, errors, getValues, control} = useForm();
    const [sessions, setSessions] = useState();
    const [films, setFilms] = useState();
    const [halls, setHalls] = useState();
    useEffect(() => {
        axios.get(api.ticketsAdminGetSessions, 
            {
                headers: {Authorization: `token ${Cookies.get('ticketsToken')}`}
            }).then((res)=>{
                if (res.status==200) {
                    setSessions(res.data);
                }
            });
        axios.get(api.ticketsAdminGetHalls, 
            {
                headers: {Authorization: `token ${Cookies.get('ticketsToken')}`}
            }).then((res)=>{
                if (res.status==200) {
                    setHalls(res.data);
                }
            });
        axios.get(api.ticketsAdminGetFilms, 
            {
                headers: {Authorization: `token ${Cookies.get('ticketsToken')}`}
            }).then((res)=>{
                if (res.status==200) {
                    setFilms(res.data);
                }
            });

        
    }, [props.updateTrigger]);

    const submit = data => {
        if (parseInt(data.filmId) != 0 && parseInt(data.hallId) !== 0 && data.ReactDatePicker.toISOString() !== "") {
            axios.post(api.ticketsAdminGetSessions,
                {                    
                    "FilmId":parseInt(data.filmId),
                    "HallId":parseInt(data.hallId),
                    "SessionDateTime":data.ReactDatePicker.toISOString()
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
                <summary>Sessions</summary>
                {sessions && 
                    sessions.map(f => <AdminSession session={f}
                        updateTrigger={props.updateTrigger} setUpdateTrigger={props.setUpdateTrigger}/>)
                }
                
                {films && films.length > 0 && halls && halls.length > 0 && <div> 
                <h4>Add new session</h4>
                <form onSubmit={handleSubmit(submit)}>
                    
                    <label>
                    FilmId:
                        <select defaultValue={films[0].id} {...register("filmId",{required: "required"})}>
                            {films.map(t => <option value={t.id}>{t.id}</option>)}
                        </select>
                    </label>
                    
                    <label>
                    HallId:
                        <select defaultValue={halls[0].id} {...register("hallId",{required: "required"})}>
                            {halls.map(t => <option value={t.id}>{t.id}</option>)}
                        </select>
                    </label>

                    <label>
                        Datetime: 
                        <Controller
                            render={(({field: {onChange,onBlur,value,ref}})=> 
                                (
                                    <ReactDatePicker 

                                    placeholderText="Select datetime"
                                    selected={value}
                                    onChange={onChange}
                                    onBluer={onBlur}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={5}
                                    timeCaption="time"
                                    dateFormat="yyyy-MM-dd h:mm"/>
                                )
                            )}
                            
                            control={control}
                            errors={errors}
                            valueName="selected"
                            name="ReactDatePicker"
                            >
                        </Controller>
                    </label>
                    <button>Submit</button>
                </form>
                </div>
                }
            </details>
        </div>
    )
}
export default AdminSessionsView;