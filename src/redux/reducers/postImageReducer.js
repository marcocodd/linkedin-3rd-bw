import { ADD_POST_IMAGE } from "../actions";

const initalState = {
 imagePost: [],
};

const postImageReducer = (state = initalState, action) => {
 switch (action.type) {
  case ADD_POST_IMAGE:
   return {
    imagePost: action.payload,
   };
  default:
   return state;
 }
};

export default postImageReducer;
