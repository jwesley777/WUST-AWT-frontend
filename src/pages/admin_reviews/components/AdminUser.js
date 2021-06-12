import axios from 'axios';
import Cookies from 'js-cookie';
import * as api from '../../../constants/api';

function AdminUser(props) {
    const removeRequest = () => {
        axios.delete(api.reviewsAdminGetUsers,
            {
                headers: {
                    Authorization: `token ${Cookies.get('reviewsToken')}`
                },
                data: {
                    "id": props.user.id
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
            <p>{props.user.id} {props.user.login} <button onClick={() => {removeRequest()}}>Remove</button></p>
        </div>
    )
}
export default AdminUser;