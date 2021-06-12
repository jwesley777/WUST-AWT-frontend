import { FilmsViewWrapper } from "./styles";
import * as api from '../../../constants/api';
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

function FilmsView(props) {

    
    const [films, setFilms] = useState([
    ]);        
    const [keyword, setKeyword] = useState("");
    const [filteredFilms, setFilteredFilms] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(api.reviewsGetFilms, {
                headers: {Authorization: `token ${Cookies.get('reviewsToken')}`}
            });
            setFilms(res.data);
            setFilteredFilms(res.data.filter(film=>film.name.toLowerCase().includes(keyword.toLowerCase())));
        };
        fetchUser();
    },[]);

    useEffect(()=>{        
        setFilteredFilms(films.filter(film=>film.name.toLowerCase().includes(keyword.toLowerCase())));
    }, [keyword]);

    return <FilmsViewWrapper>
        
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
                    <p>{o.name}  ☆ {o.rating}</p>
                    <button onClick={() => props.setFilmId(o.id)}>Choose</button>
                </li>)}
            </ul>

    </FilmsViewWrapper>
}
export default FilmsView;