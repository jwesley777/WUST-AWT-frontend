import axios from 'axios';
import Cookies from 'js-cookie';
import * as api from '../../../constants/api';

function AdminHall(props) {
    const removeRequest = () => {
        axios.delete(api.ticketsAdminGetHalls,
            {
                headers: {
                    Authorization: `token ${Cookies.get('ticketsToken')}`
                },
                data: {
                    "id": props.hall.id
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
            <p>Theatre {props.hall.theatreId}, Hall id {props.hall.id} <button onClick={() => removeRequest()}>Remove</button></p>                        
            <p>{props.hall.nRows} rows, {props.hall.nColumns} places</p>
        </div>
    )
}
export default AdminHall;