import { GET_EXPERIENCES, STOP_LOADING_EXPERIENCES } from "../actions";

const initialState = {
  content: [],
  isLoading: true,
};

const experiencesFetch = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPERIENCES: {
      return {
        ...state,
        content: action.payload,
      };
    }

    case STOP_LOADING_EXPERIENCES: {
      return {
        ...state,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};

export default experiencesFetch;
