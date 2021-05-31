import { useEffect, useState } from "react";
import { FilmsViewWrapper } from "./styles";
import * as api from '../../../constants/api';
import axios from "axios";
import Cookies from "js-cookie";

function FilmsView(props) {
    const [films, setFilms] = useState([
    ]);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(api.ticketsGetFilms, {
                headers: {Authorization: `token ${Cookies.get('ticketsToken')}`}
            });
            setFilms(res.data);
        };
        fetchUser();
    },[]);

    return (
        <FilmsViewWrapper>
            <h2>Films</h2>
            <ul>
                {films.map((o) => 
                <li key={o.id}>id={o.id} 
                    , name={o.name} <button onClick={() => props.setFilmId(o.id)}>Choose</button>
                </li>)}
            </ul>
        </FilmsViewWrapper>                 
    );
}

export default FilmsView;