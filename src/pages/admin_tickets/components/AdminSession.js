import axios from 'axios';
import Cookies from 'js-cookie';
import * as api from '../../../constants/api';

function AdminSession(props) {

    const removeRequest = () => {
        axios.delete(api.ticketsAdminGetSessions,
            {
                headers: {
                    Authorization: `token ${Cookies.get('ticketsToken')}`
                },
                data: {
                    "id": props.session.id
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
            <p>Session id {props.session.id} <button onClick={() => {removeRequest()}}>Remove</button></p>
            <p>Film id {props.session.filmId}  Hall id {props.session.hallId}</p>
            <p>Datetime {props.session.sessionDateTime.replace('T',' ')}</p>
            --
        </div>
    )
}
export default AdminSession;