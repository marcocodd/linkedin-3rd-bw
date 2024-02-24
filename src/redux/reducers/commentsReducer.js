import { GET_COMMENTS } from "../actions";

const initalState = {
 comments: [],
};

const FetchCommentsReducer = (state = initalState, action) => {
 switch (action.type) {
  case GET_COMMENTS:
   return {
    ...state,
    comments: action.payload,
   };
  default:
   return state;
 }
};

export default FetchCommentsReducer;
