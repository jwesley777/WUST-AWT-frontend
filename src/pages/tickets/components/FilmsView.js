import { useEffect, useState } from "react";
import { FilmsViewWrapper } from "./styles";
import * as api from '../../../constants/api';
import axios from "axios";
import Cookies from "js-cookie";

function FilmsView(props) {
    const [films, setFilms] = useState([
    ]);
    const [keyword, setKeyword] = useState("");
    const [filteredFilms, setFilteredFilms] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(api.ticketsGetFilms, {
                headers: {Authorization: `token ${Cookies.get('ticketsToken')}`}
            });
            console.log(res.data);
            setFilms(res.data);
            setFilteredFilms(res.data.filter(film=>film.name.toLowerCase().includes(keyword.toLowerCase())));
        };
        fetchUser();
    },[]);
    useEffect(()=>{        
        setFilteredFilms(films.filter(film=>film.name.toLowerCase().includes(keyword.toLowerCase())));
    }, [keyword]);

    return (
        <FilmsViewWrapper>
            <h2>Films</h2>
            <input
                value={keyword}
                placeholder={"search film"}
                onChange={(e) => {
                    setKeyword(e.target.value);
                }}
            />
            <ul>
                {filteredFilms.map((o) => 
                <li key={o.id}>
                    <div>
                        <p>{o.name} <button onClick={() => props.setFilmId(o.id)}>Choose</button></p>                        
                        <p>Duration: {o.durationInMinutes} minutes</p>
                    </div>
                </li>)}
            </ul>
        </FilmsViewWrapper>                 
    );
}

export default FilmsView;