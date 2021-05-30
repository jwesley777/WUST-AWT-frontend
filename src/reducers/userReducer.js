import {TICKETS_USER_ADD, TICKETS_USER_DELETE,REVIEWS_USER_ADD,REVIEWS_USER_DELETE} from '../actions/userActions';

export const initialState = {
  ticketsUser: null,
  reviewsUser:null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TICKETS_USER_ADD:
      return {
        ...state,
        ticketsUser: action.payload
      };

    case TICKETS_USER_DELETE:
      return {
        ...state,
        reviewsUser: null
      };
    
    case REVIEWS_USER_ADD:
      return {
        ...state,
        reviewsUser: action.payload
      };

    case REVIEWS_USER_DELETE:
      return {
        ...state,
        reviewsUser: null
      };

    default:
      return state;
  }
};