import { GET_MY_PROFILE, STOP_LOADING_ME } from "../actions";

const initialState = {
  content: null,
  isLoading: true,
};

const meFetch = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_PROFILE: {
      return {
        ...state,
        content: action.payload,
      };
    }

    case STOP_LOADING_ME: {
      return {
        ...state,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};

export default meFetch;
