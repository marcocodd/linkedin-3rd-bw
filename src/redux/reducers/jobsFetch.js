import {
  GET_JOBS,
  START_LOADING_JOBS,
  STOP_LOADING_JOBS,
  UPDATE_NAVBAR_INPUT,
} from "../actions";

const initialState = {
  content: [],
  isLoading: true,
  navbarInput: "",
};

const jobsFetch = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS: {
      return {
        ...state,
        content: action.payload,
      };
    }

    case STOP_LOADING_JOBS: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case START_LOADING_JOBS: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case UPDATE_NAVBAR_INPUT: {
      return {
        ...state,
        navbarInput: action.payload,
      };
    }

    default:
      return state;
  }
};

export default jobsFetch;
