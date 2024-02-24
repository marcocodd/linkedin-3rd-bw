import { ADD_PROFILE_IMAGE } from "../actions";

const initalState = {
 image: [],
};

const profileImageReducer = (state = initalState, action) => {
 switch (action.type) {
  case ADD_PROFILE_IMAGE:
   return {
    image: action.payload,
   };
  default:
   return state;
 }
};

export default profileImageReducer;
