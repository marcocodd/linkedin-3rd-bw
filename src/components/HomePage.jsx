// import { Col, Container, Form, Row } from "react-bootstrap";
// import { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import HomePagePosts from "./HomePagePosts";
// import LeftSidebar from "./home/LeftSidebar";
// import RightSidebar from "./home/RightSidebar";
// import { useSelector, useDispatch } from "react-redux";
// import { actionGetMyProfile, postImageAction } from "../redux/actions";
// import { FetchDataPosts } from "../redux/actions/FetchDataPostsAction";

// const HomePage = () => {
//  // costanti pagina

//  const [showModalPost, setShowModalPost] = useState(false);
//  const [showModalImg, setShowModalImg] = useState(false);
//  const [postText, setPostText] = useState("");
//  const dispatch = useDispatch();

//  const [fileImg, setFileImg] = useState();

//  const post = useSelector((state) => state.posts.posts);
//  const token = useSelector((state) => state.activeUser.token);
//  const me = useSelector((state) => state.meFetch.content);
//  const isLoading = useSelector((state) => state.meFetch.isLoading);

//  const handleCloseModalPost = () => setShowModalPost(false);
//  const handleShowModalPost = () => setShowModalPost(true);
//  const handleCloseModalImg = () => setShowModalImg(false);
//  const handleShowModalImg = () => setShowModalImg(true);

//  // -----------------------------------------------------

//  // funzione per caricare immagine preview e dispatch
//  const handleChangeImg = (event) => {
//   const selectedFile = event.target.files[0];
//   if (selectedFile) {
//    const reader = new FileReader();
//    reader.onload = () => {
//     const imgPreview = reader.result;
//     console.log(imgPreview);
//    };
//    reader.readAsDataURL(selectedFile); // Legge il contenuto del file come URL dati (base64?)
//    setFileImg(selectedFile);
//    //  dispatch(postImageAction(selectedFile, postId, token));
//   }
//  };

//  //-----------------------------------------------------

//  // useEffect per recuperare i dati del profilo

//  useEffect(() => {
//   dispatch(actionGetMyProfile(token));
//  }, [token]);

//  // Funzione per effettuare post
//  const HandlePost = () => {
//   if (!postText.trim()) {
//    alert("Il testo del post non può essere vuoto");
//    return;
//   }
//   fetch("https://striveschool-api.herokuapp.com/api/posts/", {
//    method: "POST",
//    headers: {
//     Authorization: `Bearer ${token}`,
//     "Content-Type": "application/json",
//    },
//    body: JSON.stringify({ text: postText }),
//   })
//    .then(async (response) => {
//     if (response.ok) {
//      const { _id } = await response.json();
//      //  setPostId(_id);
//      dispatch(postImageAction(fileImg, _id, token));
//      handleCloseModalPost();
//      setTimeout(() => {
//       dispatch(FetchDataPosts(token));
//      }, 1000);

//      console.log(fileImg);
//      console.log("Post aggiunto");
//      setFileImg(null);
//     } else {
//      console.log("errore nella richiesta POST", response.status);
//     }
//    })
//    .catch((error) => {
//     console.log(error);
//    });
//  };

//  // -----------------------------------------------------

//  // Render Homepage

//  return (
//   <Container className="mt-3">
//    <Row className="g-4">
//     <Col className="col-12 col-lg-3 col-md-6">
//      <LeftSidebar
//       profileIcon={!isLoading && me.image}
//       profileSurname={!isLoading && me.surname}
//       profileName={!isLoading && me.name}
//       profileTitle={!isLoading && me.title}
//      />
//     </Col>

//     <Col className="col-12 col-lg-6">
//      <Row className="border rounded p-2 mb-4 bg-white">
//       <Col className="d-flex align-items-center justify-content-center">
//        {!isLoading && (
//         <img
//          width={50}
//          height={50}
//          className="rounded-circle me-2"
//          src={me.image}
//          alt="profile img"
//         />
//        )}
//        <Button
//         className="bg-white text-secondary btn-outline-secondary rounded-pill d-flex flex-grow-1"
//         onClick={handleShowModalPost}
//        >
//         Start Post
//        </Button>
//        {/* Modale POST */}
//        <Modal show={showModalPost} onHide={handleCloseModalPost}>
//         <Modal.Header closeButton>
//          <Modal.Title className="d-flex align-items-center">
//           {!isLoading && (
//            <img
//             width={50}
//             height={50}
//             className="rounded-circle me-2"
//             src={me.image}
//             alt="profile img"
//            />
//           )}
//           {!isLoading && <h6>{me.name + " " + me.surname}</h6>}
//          </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//          <Form>
//           <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//            <Form.Control
//             as="textarea"
//             rows={3}
//             placeholder="What do you want to talk about?"
//             onChange={(e) => setPostText(e.target.value)}
//            />
//           </Form.Group>
//          </Form>
//          {fileImg && (
//           <img
//            width={200}
//            className="img-thunbnail"
//            src={URL.createObjectURL(fileImg)}
//            alt="Preview"
//           />
//          )}
//         </Modal.Body>
//         <Modal.Footer className="justify-content-between">
//          <div>
//           <label
//            onClick={handleShowModalImg}
//            className="custom-file-input-label button-homepage"
//            htmlFor="image-selector"
//           >
//            <i className="bi bi-card-image text-primary"></i>
//           </label>
//           <input
//            id="image-selector"
//            type="file"
//            accept="image/*"
//            onChange={(event) => handleChangeImg(event)}
//           />
//          </div>
//          <div>
//           <Button className="me-2" variant="secondary">
//            <i className="bi bi-clock"></i>
//           </Button>
//           <Button variant="primary" onClick={HandlePost}>
//            Post
//           </Button>
//          </div>
//         </Modal.Footer>
//        </Modal>
//        {/* fine modale POST */}
//        {/* MODALE ANTEPRIMA IMMAGINE */}
//        <Modal show={showModalImg} onHide={handleCloseModalImg}>
//         <Modal.Header closeButton>
//          <Modal.Title className="d-flex align-items-center">
//           Anteprima Immagine
//          </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//          {fileImg && (
//           <img width={400} src={URL.createObjectURL(fileImg)} alt="Preview" />
//          )}
//         </Modal.Body>
//         <Modal.Footer>
//          <Button onClick={handleCloseModalImg}>Conferma</Button>
//          <Button
//           onClick={() => {
//            handleCloseModalImg();
//            setFileImg(null);
//           }}
//          >
//           Annulla
//          </Button>
//         </Modal.Footer>
//        </Modal>
//        {/* fine modale ANTEPRIMA IMMAGINE */}
//       </Col>
//       </Row>
//       {/* Col di col-6 per icone media Event Write Article */}

//         <Col className="col-12 col-lg-6">
//           <Row className="border rounded p-2 mb-4 bg-white">
//             <Col className="d-flex align-items-center justify-content-center">
//               {!isLoading && (
//                 <img
//                   width={50}
//                   className="rounded-circle me-2 mt-2"
//                   src={me.image}
//                   alt="profile img"
//                 />
//               )}
//               <Button
//                 className="btn-lg bg-white text-secondary btn-outline-secondary rounded-pill d-flex flex-grow-1 mt-2" id="start-post"
//                 onClick={handleShowModalPost}
//               >
//                 Start Post
//               </Button>

//               {/* Modale POST */}
//               <Modal show={showModalPost} onHide={handleCloseModalPost}>
//                 <Modal.Header closeButton>
//                   <Modal.Title className="d-flex align-items-center">
//                     {!isLoading && (
//                       <img
//                         width={50}
//                         className="rounded-circle me-2"
//                         src={me.image}
//                         alt="profile img"
//                       />
//                     )}
//                     {!isLoading && <h6>{me.name + " " + me.surname}</h6>}
//                   </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                   <Form>
//                     <Form.Group
//                       className="mb-3"
//                       controlId="exampleForm.ControlTextarea1"
//                     >
//                       <Form.Control
//                         as="textarea"
//                         rows={3}
//                         placeholder="What do you want to talk about?"
//                         onChange={(e) => setPostText(e.target.value)}
//                       />
//                     </Form.Group>
//                   </Form>
//                   {fileImg && (
//                     <img
//                       width={200}
//                       className="img-thunbnail"
//                       src={URL.createObjectURL(fileImg)}
//                       alt="Preview"
//                     />
//                   )}
//                 </Modal.Body>
//                 <Modal.Footer className="justify-content-between">
//                   <div>
//                     <label
//                       onClick={handleShowModalImg}
//                       className="custom-file-input-label button-homepage"
//                       htmlFor="image-selector"
//                     >
//                       <i className="bi bi-card-image text-primary"></i>
//                     </label>
//                     <input
//                       id="image-selector"
//                       type="file"
//                       accept="image/*"
//                       onChange={(event) => handleChangeImg(event)}
//                     />
//                   </div>
//                   <div>
//                     <Button className="me-2" variant="secondary">
//                       <i className="bi bi-clock"></i>
//                     </Button>
//                     <Button variant="primary" onClick={HandlePost}>
//                       Post
//                     </Button>
//                   </div>
//                 </Modal.Footer>
//               </Modal>
//               {/* fine modale POST */}
//               {/* MODALE ANTEPRIMA IMMAGINE */}
//               <Modal show={showModalImg} onHide={handleCloseModalImg}>
//                 <Modal.Header closeButton>
//                   <Modal.Title className="d-flex align-items-center">
//                     Anteprima Immagine
//                   </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                   {fileImg && (
//                     <img
//                       width={400}
//                       src={URL.createObjectURL(fileImg)}
//                       alt="Preview"
//                     />
//                   )}
//                 </Modal.Body>
//                 <Modal.Footer>
//                   <Button onClick={handleCloseModalImg}>Conferma</Button>
//                   <Button
//                     onClick={() => {
//                       handleCloseModalImg();
//                       setFileImg(null);
//                     }}
//                   >
//                     Annulla
//                   </Button>
//                 </Modal.Footer>
//               </Modal>
//               {/* fine modale ANTEPRIMA IMMAGINE */}
//             </Col>

//             {/* Col di col-6 per icone media Event Write Article */}

//             <div className="d-flex justify-content-around text-secondary mt-2">
//               <Button className="button-homepage">
//                 <i className="me-1 bi bi-card-image text-primary"></i>
//                 <span>Media</span>
//               </Button>
//               <Button className="button-homepage">
//                 <i className="me-1 bi bi-calendar3 text-warning"></i>
//                 <span>Event</span>
//               </Button>

//               <Button className="button-homepage">
//                 <i className="me-1 bi bi-newspaper text-danger"></i>
//                 <span>Write article</span>
//               </Button>
//             </div>
//           </Row>

//            {/* Row di Col-6 post utenti e notizie */}
//      <Row className="align-content-center flex-column gy-3">
//       {/* componente generazione posts */}
//       <HomePagePosts postId={post._id} />
//      </Row>

//     <Col className="col-12 col-lg-3 col-md-6">
//      <RightSidebar />
//      </Row>
//     </Col>

//    </Col>
//   </Container>
//  );
// };

// export default HomePage;

import { Col, Container, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import HomePagePosts from "./HomePagePosts";
import LeftSidebar from "./home/LeftSidebar";
import RightSidebar from "./home/RightSidebar";
import { useSelector, useDispatch } from "react-redux";
import { actionGetMyProfile, postImageAction } from "../redux/actions";
import { FetchDataPosts } from "../redux/actions/FetchDataPostsAction";
const HomePage = () => {
 // costanti pagina
 const [showModalPost, setShowModalPost] = useState(false);
 const [showModalImg, setShowModalImg] = useState(false);
 const [postText, setPostText] = useState("");
 const dispatch = useDispatch();
 const [postId, setPostId] = useState();
 const [fileImg, setFileImg] = useState();
 const post = useSelector((state) => state.posts.posts);
 const token = useSelector((state) => state.activeUser.token);
 const me = useSelector((state) => state.meFetch.content);
 const isLoading = useSelector((state) => state.meFetch.isLoading);
 const handleCloseModalPost = () => setShowModalPost(false);
 const handleShowModalPost = () => setShowModalPost(true);
 const handleCloseModalImg = () => setShowModalImg(false);
 const handleShowModalImg = () => setShowModalImg(true);
 // -----------------------------------------------------
 // funzione per caricare immagine preview e dispatch
 const handleChangeImg = (event) => {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
   const reader = new FileReader();
   reader.onload = () => {
    const imgPreview = reader.result;
    console.log(imgPreview);
   };
   reader.readAsDataURL(selectedFile); // Legge il contenuto del file come URL dati (base64?)
   setFileImg(selectedFile);
   dispatch(postImageAction(selectedFile, postId, token));
  }
 };
 //-----------------------------------------------------
 // useEffect per recuperare i dati del profilo
 useEffect(() => {
  dispatch(actionGetMyProfile(token));
 }, [token]);
 // Funzione per effettuare post
 const HandlePost = () => {
  if (!postText.trim()) {
   alert("Il testo del post non può essere vuoto");
   return;
  }
  fetch("https://striveschool-api.herokuapp.com/api/posts/", {
   method: "POST",
   headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
   },
   body: JSON.stringify({ text: postText }),
  })
   .then(async (response) => {
    if (response.ok) {
     const { _id } = await response.json();
     setPostId(_id);
     dispatch(postImageAction(fileImg, _id, token));
     handleCloseModalPost();
     setTimeout(() => {
      dispatch(FetchDataPosts(token));
     }, 500);
     console.log(fileImg);
     console.log("Post aggiunto");
     setFileImg(null);
    } else {
     console.log("errore nella richiesta POST", response.status);
    }
   })
   .catch((error) => {
    console.log(error);
   });
 };
 // -----------------------------------------------------
 // Render Homepage
 return (
  <Container className="mt-3">
   <Row className="g-4">
    <Col className="col-12 col-lg-3 col-md-6">
     <LeftSidebar
      profileIcon={!isLoading && me.image}
      profileSurname={!isLoading && me.surname}
      profileName={!isLoading && me.name}
      profileTitle={!isLoading && me.title}
     />
    </Col>
    <Col className="col-12 col-lg-6">
     <Row className="border rounded p-2 mb-4 bg-white">
      <Col className="d-flex align-items-center justify-content-center">
       {!isLoading && (
        <img
         width={50}
         height={50}
         className="rounded-circle me-2 mt-2"
         src={me.image}
         alt="profile img"
        />
       )}
       <Button
        className="btn-lg bg-white text-secondary btn-outline-secondary rounded-pill d-flex flex-grow-1 mt-2"
        id="start-post"
        onClick={handleShowModalPost}
       >
        Start Post
       </Button>
       {/* Modale POST */}
       <Modal show={showModalPost} onHide={handleCloseModalPost}>
        <Modal.Header closeButton>
         <Modal.Title className="d-flex align-items-center">
          {!isLoading && (
           <img
            width={50}
            height={50}
            className="rounded-circle me-2"
            src={me.image}
            alt="profile img"
           />
          )}
          {!isLoading && <h6>{me.name + " " + me.surname}</h6>}
         </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
           <Form.Control
            as="textarea"
            rows={3}
            placeholder="What do you want to talk about?"
            onChange={(e) => setPostText(e.target.value)}
           />
          </Form.Group>
         </Form>
         {fileImg && (
          <img
           width={200}
           className="img-thunbnail"
           src={URL.createObjectURL(fileImg)}
           alt="Preview"
          />
         )}
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
         <div>
          <label
           onClick={handleShowModalImg}
           className="custom-file-input-label button-homepage"
           htmlFor="image-selector"
          >
           <i className="bi bi-card-image text-primary"></i>
          </label>
          <input
           id="image-selector"
           type="file"
           accept="image/*"
           onChange={(event) => handleChangeImg(event)}
          />
         </div>
         <div>
          <Button className="me-2" variant="secondary">
           <i className="bi bi-clock"></i>
          </Button>
          <Button variant="primary" onClick={HandlePost}>
           Post
          </Button>
         </div>
        </Modal.Footer>
       </Modal>
       {/* fine modale POST */}
       {/* MODALE ANTEPRIMA IMMAGINE */}
       <Modal show={showModalImg} onHide={handleCloseModalImg}>
        <Modal.Header closeButton>
         <Modal.Title className="d-flex align-items-center">
          Anteprima Immagine
         </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         {fileImg && (
          <img width={400} src={URL.createObjectURL(fileImg)} alt="Preview" />
         )}
        </Modal.Body>
        <Modal.Footer>
         <Button onClick={handleCloseModalImg}>Conferma</Button>
         <Button
          onClick={() => {
           handleCloseModalImg();
           setFileImg(null);
          }}
         >
          Annulla
         </Button>
        </Modal.Footer>
       </Modal>
       {/* fine modale ANTEPRIMA IMMAGINE */}
      </Col>
      {/* Col di col-6 per icone media Event Write Article */}

      <div className="d-flex justify-content-around text-secondary mt-3">
       <Button className="button-homepage">
        <i className="me-1 bi bi-card-image text-primary"></i>
        <span>Media</span>
       </Button>
       <Button className="button-homepage">
        <i className="me-1 bi bi-calendar3 text-warning"></i>
        <span>Event</span>
       </Button>
       <Button className="button-homepage">
        <i className="me-1 bi bi-newspaper text-danger"></i>
        <span>Write article</span>
       </Button>
      </div>
     </Row>
     {/* Row di Col-6 post utenti e notizie */}
     <Row className="align-content-center flex-column gy-3">
      {/* componente generazione posts */}
      <HomePagePosts postId={post._id} />
     </Row>
    </Col>
    <Col className="col-12 col-lg-3 col-md-6">
     <RightSidebar />
    </Col>
   </Row>
  </Container>
 );
};
export default HomePage;
