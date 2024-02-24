import { FETCH_DATA_POSTS } from "../actions/FetchDataPostsAction";

const initalState = {
 posts: [],
};

const FetchDataPostsReducer = (state = initalState, action) => {
 switch (action.type) {
  case FETCH_DATA_POSTS:
   return {
    ...state,
    posts: action.payload,
   };
  default:
   return state;
 }
};

export default FetchDataPostsReducer;
