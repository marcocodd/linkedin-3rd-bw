// ACTION REFERENCES

export const GET_ALL_USERS = "GET_ALL_USERS";
export const STOP_LOADING = "STOP_LOADING";
export const GET_MY_PROFILE = "GET_MY_PROFILE";
export const STOP_LOADING_ME = "STOP_LOADING_ME";
export const GET_EXPERIENCES = "GET_EXPERIENCES";
export const STOP_LOADING_EXPERIENCES = "STOP_LOADING_EXPERIENCES";
export const ADD_PROFILE_IMAGE = "ADD_PROFILE_IMAGE";
export const ADD_POST_IMAGE = "ADD_POST_IMAGE";
export const GET_JOBS = "GET_JOBS";
export const STOP_LOADING_JOBS = "STOP_LOADING_JOBS";
export const START_LOADING_JOBS = "START_LOADING_JOBS";
export const UPDATE_NAVBAR_INPUT = "UPDATE_NAVBAR_INPUT";
export const ACTIVE_FABIO = "ACTIVE_FABIO";
export const ACTIVE_MARCO = "ACTIVE_MARCO";
export const ACTIVE_SALVATORE = "ACTIVE_SALVATORE";
export const ACTIVE_NICOLO = "ACTIVE_NICOLO";
export const ACTIVE_ADRIANO = "ACTIVE_ADRIANO";
export const GET_COMMENTS = "GET_COMMENTS";

// ACTION CREATORS

export const actionActiveFabio = () => ({
 type: ACTIVE_FABIO,
});
export const actionActiveMarco = () => ({
 type: ACTIVE_MARCO,
});
export const actionActiveSalvatore = () => ({
 type: ACTIVE_SALVATORE,
});
export const actionActiveNicolo = () => ({
 type: ACTIVE_NICOLO,
});
export const actionActiveAdriano = () => ({
 type: ACTIVE_ADRIANO,
});

export const actionStopLoading = () => ({
 type: STOP_LOADING,
});

export const actionStopLoadingMe = () => ({
 type: STOP_LOADING_ME,
});

export const actionStopLoadingExperiences = () => ({
 type: STOP_LOADING_EXPERIENCES,
});

export const actionStopLoadingJobs = () => ({
 type: STOP_LOADING_JOBS,
});

export const actionStartLoadingJobs = () => ({
 type: START_LOADING_JOBS,
});

export const actionUpdateNavbarInput = (value) => ({
 type: UPDATE_NAVBAR_INPUT,
 payload: value,
});

export const actionGetAllUsers = () => {
 return async (dispatch) => {
  try {
   const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/profile/",
    {
     headers: {
      Authorization:
       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTFlNjI0ZjYwNTAwMTkzN2Q0NTciLCJpYXQiOjE3MDgzMzE0OTUsImV4cCI6MTcwOTU0MTA5NX0.KHAcN2ZmdInZibSsuN6-ccclj1K1u8EHV-HfobzUCsg",
     },
    }
   );
   if (response.ok) {
    const data = await response.json();
    const newData = data.slice(0, 40);
    dispatch({
     type: GET_ALL_USERS,
     payload: newData,
    });
   } else {
    throw new Error();
   }
  } catch (error) {
   console.log(error);
  } finally {
   dispatch(actionStopLoading());
  }
 };
};

export const actionGetMyProfile = (token) => {
 return async (dispatch) => {
  try {
   const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/profile/me",
    {
     headers: {
      Authorization: `Bearer ${token}`,
     },
    }
   );
   if (response.ok) {
    const data = await response.json();

    dispatch({
     type: GET_MY_PROFILE,
     payload: data,
    });
   } else {
    throw new Error();
   }
  } catch (error) {
   console.log(error);
  } finally {
   dispatch(actionStopLoadingMe());
  }
 };
};

export const actionGetExperiences = (id, token) => {
 return async (dispatch) => {
  try {
   const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/profile/" + id + "/experiences",
    {
     headers: {
      Authorization: `Bearer ${token}`,
     },
    }
   );
   if (response.ok) {
    const data = await response.json();
    console.log(data);
    dispatch({
     type: GET_EXPERIENCES,
     payload: data,
    });
   } else {
    throw new Error();
   }
  } catch (error) {
   console.log(error);
  } finally {
   dispatch(actionStopLoadingExperiences());
  }
 };
};

export const profileImageAction = (image, id, token) => {
 return async (dispatch) => {
  if (image) {
   const formData = new FormData();
   formData.append("profile", image);
   console.log(image);
   try {
    const response = await fetch(
     `https://striveschool-api.herokuapp.com/api/profile/${id}/picture`,
     {
      method: "POST",
      headers: {
       Authorization: `Bearer ${token}`,
      },
      body: formData,
     }
    );

    if (response.ok) {
     console.log("Immagine caricata con successo", response.status);
     const imageUrl = await response.json();
     dispatch({
      type: ADD_PROFILE_IMAGE,
      payload: imageUrl,
     });
    } else {
     console.error(
      "Errore durante il caricamento dell'immagine:",
      response.status
     );
    }
   } catch (error) {
    console.error("Errore durante il caricamento dell'immagine:", error);
   }
  } else {
   console.error("Nessun file selezionato");
  }
 };
};

// action immagine post

export const postImageAction = (image, id, token) => {
 return async (dispatch) => {
  if (image) {
   const formData = new FormData();
   formData.append("post", image);
   console.log(image);
   try {
    const response = await fetch(
     `https://striveschool-api.herokuapp.com/api/posts/${id}`,
     {
      method: "POST",
      headers: {
       Authorization: `Bearer ${token}`,
      },
      body: formData,
     }
    );

    if (response.ok) {
     console.log("Immagine caricata con successo", response.status);
     const imageUrl = await response.json();
     dispatch({
      type: ADD_POST_IMAGE,
      payload: imageUrl,
     });
    } else {
     console.error(
      "Errore durante il caricamento dell'immagine:",
      response.status
     );
    }
   } catch (error) {
    console.error("Errore durante il caricamento dell'immagine:", error);
   }
  } else {
   console.error("Nessun file selezionato");
  }
 };
};

export const actionGetJobs = (search) => {
 return async (dispatch) => {
  try {
   dispatch(actionStartLoadingJobs());
   const response = await fetch(
    "https://strive-benchmark.herokuapp.com/api/jobs?search=" + search,
    {
     headers: {
      Authorization:
       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTFlNjI0ZjYwNTAwMTkzN2Q0NTciLCJpYXQiOjE3MDgzMzE0OTUsImV4cCI6MTcwOTU0MTA5NX0.KHAcN2ZmdInZibSsuN6-ccclj1K1u8EHV-HfobzUCsg",
     },
    }
   );
   if (response.ok) {
    const data = await response.json();
    const newData = data.data.slice(0, 7);
    dispatch({
     type: GET_JOBS,
     payload: newData,
    });
   }
  } catch (error) {
   console.log(error);
  } finally {
   dispatch(actionStopLoadingJobs());
  }
 };
};

// FETCH COMMENTI ACTION

export const getCommentsAction = () => {
 return async (dispatch) => {
  try {
   let response = await fetch(
    "https://striveschool-api.herokuapp.com/api/comments/",
    {
     headers: {
      Authorization:
       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYTg1MDViMjYxNTAwMTk4YTY5NjkiLCJpYXQiOjE3MDg2ODQ3MzksImV4cCI6MTcwOTg5NDMzOX0.IeWVE4UXnwa3p3rB8ApX7xBtzkOV4ACeO6OsyTcXYUo",
     },
    }
   );
   if (response.ok) {
    let fetchedComments = await response.json();
    dispatch({
     type: GET_COMMENTS,
     payload: fetchedComments,
    });
   } else {
    console.log("Error retrieving data ", response.status);
   }
  } catch (error) {
   console.log(error);
  }
 };
};


