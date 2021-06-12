import axios from 'axios';
import Cookies from 'js-cookie';
import * as api from '../../../constants/api';

function AdminFilm(props) {
    const removeRequest = () => {
        axios.delete(api.ticketsAdminGetFilms,
            {
                headers: {
                    Authorization: `token ${Cookies.get('ticketsToken')}`
                },
                data: {
                    "id": props.film.id
                }
            }   
            ).then((res)=>{
                if (res.status==200) {
                    props.setUpdateTrigger(!props.updateTrigger);
                }
            });
    }
    return (
        <div>
            <p>{props.film.id} : {props.film.name} <button onClick={() => {removeRequest()}}>Remove</button></p>                        
            <p>Duration: {props.film.durationInMinutes} minutes</p>
        </div>
    )
}
export default AdminFilm;