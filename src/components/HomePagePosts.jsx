import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchDataPosts } from '../redux/actions/FetchDataPostsAction';
import { Button, Card, Col } from 'react-bootstrap';
import defaultUserImg from '../assets/img/default-profile-picture1.jpg';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { getCommentsAction } from "../redux/actions";

const HomePagePosts = () => {
 const dispatch = useDispatch();
 const arrayPosts = useSelector((state) => state.posts.posts); // slice per ottenere solo i primi 20 post
 const [arrayPostsSliced, setArrayPostsSliced] = useState([]);
 // LIKE
 const [liked, setLiked] = useState(false);

 //stato modale
 const [smShow, setSmShow] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };
  //   COMMENTI
  // const [isCommenting, setIsCommenting] = useState(false);
  const [commentingStates, setCommentingStates] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [commentId, setCommentId] = useState([]);
  console.log(commentId);

  const comments = useSelector((state) => state.comments.comments);

  // Funzione HandleComment per fare Post commento
  const HandleComment = () => {
    if (!commentText.trim()) {
      alert('Il testo del post non può essere vuoto');
      return;
    }
    fetch('https://striveschool-api.herokuapp.com/api/comments/', {
      method: 'POST',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYTg1MDViMjYxNTAwMTk4YTY5NjkiLCJpYXQiOjE3MDg2ODQ3MzksImV4cCI6MTcwOTg5NDMzOX0.IeWVE4UXnwa3p3rB8ApX7xBtzkOV4ACeO6OsyTcXYUo',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        comment: commentText,
        elementId: commentId,
        rate: 1,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Post aggiunto');
          dispatch(getCommentsAction());
        } else {
          console.log('errore nella richiesta POST', response.status);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    dispatch(FetchDataPosts());
    dispatch(getCommentsAction());
  }, []);

  useEffect(() => {
    if (arrayPosts.length > 0) {
      setArrayPostsSliced(arrayPosts.slice(-10));
      setCommentingStates(arrayPosts.slice(-10).map(() => false));
      setCommentId(arrayPosts.slice(-10).map((post) => post._id));

   console.log("post array slice", arrayPostsSliced);
  }
 }, [arrayPosts]);

  const toggleCommentSection = (i) => {
    const newCommentingStates = [...commentingStates];
    newCommentingStates[i] = !newCommentingStates[i];
    setCommentingStates(newCommentingStates);
  };

 const getCommentsCount = (postId) => {
  return comments.filter((comment) => comment.elementId === postId).length;
 };



 const generateRandomFollowers = () =>
  Math.floor(Math.random() * (99999 - 1000 + 1)) + 1000;
 const generateRandomDay = () => Math.floor(Math.random() * 4) + 1;

  return (
    <>
      {arrayPosts.slice(-10).map((post, i) => (
        <Col className="col-12 p-0" key={i}>
          <Card className="p-2">
            <Card.Body className="border-bottom mb-2">
              <div className="d-flex align-items-center">
                {post.user.image ? (
                  <img
                    className="rounded-circle me-2"
                    src={post.user.image}
                    width={55}
                    height={55}
                    alt="User profile"
                  />
                ) : (
                  <img
                    className="rounded-circle me-2"
                    src={defaultUserImg}
                    width={55}
                    height={55}
                    alt="Default profile"
                  />
                )}
                <div className='ms-1'>
                <Card.Title className="fs-6 mb-0">{post.username}</Card.Title>
                <span style={{fontSize: '0.75rem', fontWeight: 'bold'}}>{post.user.title}</span>
                <div className="text-muted" style={{fontSize: '0.7rem'}}>
                    Followers: {generateRandomFollowers()}
                  </div>
                  <div className="text-muted" style={{fontSize: '0.7rem'}}>
                  {generateRandomDay()}d ago
                  </div>
                  </div>
              </div>
              <Card.Text id="comment">{post.text}</Card.Text>
              {!post.image && ``}
              {post.image && (
                <img
                  className="img-fluid img-thumbnail"
                  //  width={350}
                  alt="img post"
                  src={post.image}
                />
              )}
<button className="commentsButton d-block">
        <span className="comments-number-style">
         {getCommentsCount(post._id)} Comments{" "}
        </span>
       </button>
       <ul>
        {comments
         .filter((comment) => comment.elementId === post._id)
         .map((comment, i) => (
          <div className="commentsDiv rounded" key={i}>
           <li>
           <span className="fw-bold">{comment.author}</span> :{" "} 
            {comment.comment}
           </li>
          </div>
         ))}
       </ul>{' '}
                   </Card.Body>
            <div className="d-flex justify-content-evenly">
              <Button
                className={`d-flex align-items-center button-homepage${
                  liked ? ' text-primary' : ''
                }`}
                onClick={handleClick}
              >
                <i
                  className={`bi bi-hand-thumbs-up me-2${
                    liked ? ' text-primary' : ''
                  }`}
                ></i>
                <span>Like</span>
              </Button>
              <Button
                className="d-flex align-items-center button-homepage"
                onClick={() => {
                  toggleCommentSection(i);
                  setSmShow(true);
                  setCommentId(post._id);

                }}
              >
                <i className="bi bi-chat-left-dots me-2"></i>
                <span>Comment</span>
              </Button>
              {/* {commentingStates[i] && (
        // <div className="comment-section d-flex align-items-center">
        //  <textarea placeholder="Inserisci il tuo commento"></textarea>
        //  <div>
        // <Button className="ms-1" variant="outline-info">
        //  Invia
        // </Button>
        //  </div>
        // </div>
       )} */}
       <Button className="button-homepage">
        <i className="bi bi-repeat me-2"></i>Repost
       </Button>
       <Button className="button-homepage">
        <i className="bi bi-send me-2"></i>Send
       </Button>
      </div>
     </Card>
    </Col>
   ))}
   {/* MODALE COMMENTI */}

   <Modal
    size="sm"
    show={smShow}
    onHide={() => setSmShow(false)}
    aria-labelledby="contained-modal-title-vcenter"
    centered
   >
    <Modal.Header closeButton>
     <Modal.Title id="contained-modal-title-vcenter">Comment</Modal.Title>
    </Modal.Header>
    <Modal.Body>
     <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
       <Form.Control
        as="textarea"
        rows={3}
        placeholder="Write your comment here"
        onChange={(e) => setCommentText(e.target.value)}
       />
      </Form.Group>
      <Button
       className="button-homepage"
       onClick={() => {
        HandleComment();
        setSmShow(false);
       }}
      >
       Post Comment
      </Button>
     </Form>
    </Modal.Body>
   </Modal>
  </>
 );
};

export default HomePagePosts;
