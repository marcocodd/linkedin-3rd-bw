export const FETCH_DATA_POSTS = "FETCH_DATA_POSTS";

export const FetchDataPosts = () => {
 return async (dispatch) => {
  try {
   let response = await fetch(
    "https://striveschool-api.herokuapp.com/api/posts/",
    {
     headers: {
      Authorization:
       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTViOTI0ZjYwNTAwMTkzN2Q0NmIiLCJpYXQiOjE3MDgzMzI1NTgsImV4cCI6MTcwOTU0MjE1OH0.E5teFLHLRXoT_qjcnO0crOO1fPEFQnonpSJswoJD-LY",
     },
    }
   );
   if (response.ok) {
    let fetchedPosts = await response.json();
    dispatch({
     type: FETCH_DATA_POSTS,
     payload: fetchedPosts,
    });
   } else {
    console.log("Error retrieving data ", response.status);
   }
  } catch (error) {
   console.log(error);
  }
 };
};
