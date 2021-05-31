import { useSelector } from "react-redux";
import FilmsView from "./components/FilmsView";
import PostReviewView from "./components/PostReviewView";
import ProfileView from "./components/ProfileView";
import ReviewsView from "./components/ReviewsView";
import { ReviewsHomeWrapper } from "./styles";

function ReviewsHome(props) {
    const user = useSelector(state => state.user.reviewsUser);    

    return (
        <ReviewsHomeWrapper>
            <ProfileView user={user}/>
            <FilmsView/>
            <ReviewsView/>
            <PostReviewView/>
        </ReviewsHomeWrapper>
    );
}

export default ReviewsHome;