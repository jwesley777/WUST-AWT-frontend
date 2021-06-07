import { PostReviewWrapper, ReviewTextInput } from "./styles";
import * as api from '../../../constants/api';
import axios from "axios";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";

function PostReviewView(props) {
    const {handleSubmit, register, errors, getValues} = useForm();

    const submit = data => {
        if (data.reviewtext !== '' && parseInt(data.rating) !== '') {
            axios.post(api.reviewsPostReview,
                {
                    "FilmId":props.filmId,
                    "Rating":parseInt(data.rating),
                    "ReviewText":data.reviewtext
                }, 
                {
                    headers: {Authorization: `token ${Cookies.get('reviewsToken')}`}
                }).then((res)=>{
                    if (res.status==200) {
                        props.setReviewWrittenTrigger(!props.reviewWrittenTrigger);
                    }
                })
        }

    };

    return <PostReviewWrapper>
        {props.filmId &&
        <h2>Post review</h2>
        }
        {props.filmId &&
        <form onSubmit={handleSubmit(submit)}>
            <label>
                Review:
                <ReviewTextInput                  
                    {...register("reviewtext",{
                        required: 'required',
                    })}
                    name="reviewtext"
                />

                Data:
                <select {...register("rating",{required: "required"})}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                </select>
            </label>

            <button>Submit</button>
        </form>
        }

    </PostReviewWrapper>
}
export default PostReviewView;