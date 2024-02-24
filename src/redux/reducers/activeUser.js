import {
  ACTIVE_ADRIANO,
  ACTIVE_FABIO,
  ACTIVE_MARCO,
  ACTIVE_NICOLO,
  ACTIVE_SALVATORE,
} from "../actions";

const initialState = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTFlNjI0ZjYwNTAwMTkzN2Q0NTciLCJpYXQiOjE3MDgzMzE0OTUsImV4cCI6MTcwOTU0MTA5NX0.KHAcN2ZmdInZibSsuN6-ccclj1K1u8EHV-HfobzUCsg",
};

const activeUser = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_FABIO: {
      return {
        ...state,
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTFlNjI0ZjYwNTAwMTkzN2Q0NTciLCJpYXQiOjE3MDgzMzE0OTUsImV4cCI6MTcwOTU0MTA5NX0.KHAcN2ZmdInZibSsuN6-ccclj1K1u8EHV-HfobzUCsg",
      };
    }
    case ACTIVE_MARCO: {
      return {
        ...state,
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTViOTI0ZjYwNTAwMTkzN2Q0NmIiLCJpYXQiOjE3MDgzMzI1NTgsImV4cCI6MTcwOTU0MjE1OH0.E5teFLHLRXoT_qjcnO0crOO1fPEFQnonpSJswoJD-LY",
      };
    }
    case ACTIVE_SALVATORE: {
      return {
        ...state,
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ3MTUxNTc2YTY0YjAwMTllZjE5ZDIiLCJpYXQiOjE3MDg1OTQ0NTQsImV4cCI6MTcwOTgwNDA1NH0.6OvRL-RvHRYiA5IXrVjtxS6IBZMmL_oqwXyKcMNMPUo",
      };
    }
    case ACTIVE_NICOLO: {
      return {
        ...state,
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ3MTY4MTc2YTY0YjAwMTllZjE5ZDYiLCJpYXQiOjE3MDg1OTQ4MTcsImV4cCI6MTcwOTgwNDQxN30.DWoqHGpxkg6gv0A1NJW-N6WbzV0aGQ43Y0gsc4cnj_M",
      };
    }
    case ACTIVE_ADRIANO: {
      return {
       ...state,
       token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ3ODQ5Zjg5Y2Y4ZDAwMTljZjRiMmQiLCJpYXQiOjE3MDg2MjMwMDgsImV4cCI6MTcwOTgzMjYwOH0.noGvnA7R1Iq-Tg3afamy-0ASlh9WWiUIDAMYG0anwsE",
      };
    }

    default:
      return state;
  }
};

export default activeUser;
