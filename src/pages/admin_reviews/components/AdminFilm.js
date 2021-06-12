import axios from 'axios';
import Cookies from 'js-cookie';
import * as api from '../../../constants/api';

function AdminFilm(props) {
    const removeRequest = () => {
        axios.delete(api.reviewsAdminGetFilms,
            {
                headers: {
                    Authorization: `token ${Cookies.get('reviewsToken')}`
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
            <p>{props.film.name} <button onClick={() => {removeRequest()}}>Remove</button></p>                        
            <p>Id in ticket service: {props.film.ticketServiceFilmId}</p>
        </div>
    )
}
export default AdminFilm;