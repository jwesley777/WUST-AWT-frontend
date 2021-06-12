import { useState } from "react";
import { useSelector } from "react-redux";
import ReviewsAdmin from "../admin_reviews";
import FilmsView from "./components/FilmsView";
import PostReviewView from "./components/PostReviewView";
import ProfileView from "./components/ProfileView";
import ReviewsView from "./components/ReviewsView";
import { ReviewsHomeWrapper, Column } from "./styles";

function ReviewsHome(props) {
    const user = useSelector(state => state.user.reviewsUser);  
    const [reviewWrittenTrigger, setReviewWrittenTrigger]  = useState(false);
    const [chosenFilmId, setChosenFilmId] = useState("");

    if (user.role==2) {
        return <ReviewsAdmin/>;
    }

    return (
        <ReviewsHomeWrapper>
            <Column>
                <ProfileView user={user}/>
                <FilmsView setFilmId={(id) => {setChosenFilmId(id);}}/>
            </Column>
            <Column>
                <ReviewsView filmId={chosenFilmId} reviewWrittenTrigger={reviewWrittenTrigger}/>
                <PostReviewView reviewWrittenTrigger={reviewWrittenTrigger}
                setReviewWrittenTrigger={setReviewWrittenTrigger} filmId={chosenFilmId}/>
             </Column>
        </ReviewsHomeWrapper>
    );
}

export default ReviewsHome;