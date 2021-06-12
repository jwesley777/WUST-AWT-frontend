import axios from 'axios';
import Cookies from 'js-cookie';
import * as api from '../../../constants/api';

function AdminTheatre(props) {
    const removeRequest = () => {
        axios.delete(api.ticketsAdminGetTheaters,
            {
                headers: {
                    Authorization: `token ${Cookies.get('ticketsToken')}`
                },
                data: {
                    "id": props.theatre.id
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
            <p>{props.theatre.id} {props.theatre.name} <button onClick={() => {removeRequest()}}>Remove</button></p>
        </div>
    )
}
export default AdminTheatre;