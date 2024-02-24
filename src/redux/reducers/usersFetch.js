import { GET_ALL_USERS, STOP_LOADING } from "../actions";

const initialState = {
  content: [],
  isLoading: true,
};

const usersFetch = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS: {
      return {
        ...state,
        content: action.payload,
      };
    }

    case STOP_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};

export default usersFetch;
