import { ReviewsViewWrapper } from "./styles";
import * as api from '../../../constants/api';
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function ReviewsView(props) {
    
    const [reviews, setReviews] = useState();
    
    
    useEffect(() => {
        if (props.filmId) {
            console.log('fetching ' + props.filmId)
            const fetchUser = async () => {
                const res = await axios.get(api.reviewsGetReviews(props.filmId,false), {
                    headers: {Authorization: `token ${Cookies.get('reviewsToken')}`}
                });
                console.log(res.data);
                setReviews(res.data);
            };
            fetchUser();
        } else {
            setReviews();
        }
    },[props.filmId, props.reviewWrittenTrigger]);
    return <ReviewsViewWrapper>
        {reviews &&
        <h2>Reviews</h2>
        }
        {reviews && reviews.length == 0 && "This film does not have any reviews yet"}
        {reviews &&
            <ul>
                {reviews.map((o) => 
                <li key={o.id}>
                    <p>☆ {o.rating} {o.verified && " | ✔"} </p>
                    <p>{o.reviewText}</p>
                </li>)}
            </ul>
        }

    </ReviewsViewWrapper>
}
export default ReviewsView;