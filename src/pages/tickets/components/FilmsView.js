import { useState } from "react";
import { FilmsViewWrapper } from "./styles";

function FilmsView(props) {
    const [films, setFilms] = useState([
        {'filmId':1,'filmName':"Aboba"},
        {'filmId':2,'filmName':"Aboba 2: aboba aboba"}
    ]);
    const [film, setFilm] = useState({'filmId':0,'filmName':""});


    return (
        <FilmsViewWrapper>
            <h2>Films</h2>
            <ul>
                {films.map((o) => 
                <li key={o.filmId}>id={o.filmId} 
                    , name={o.filmName} 
                </li>)}
            </ul>
        </FilmsViewWrapper>                 
    );
}

export default FilmsView;