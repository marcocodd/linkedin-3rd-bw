import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import { useState } from "react";

const PeopleViewed = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const users = useSelector((state) => state.usersFetch.content);
  const users5 = users.slice(0, 5);
  const users20 = users.slice(0, 20);

  return (
    <Row>
      <Col xs={12} className="border border-secondary rounded shadow p-2 my-3 bg-white">
        <h6 className="fw-bold mb-3">People also viewed</h6>
        {users5.map((user) => (
          <div
            key={user._id}
            className="mb-4 border-bottom border-secondary pb-4"
          >
            <div className="d-flex align-items-center">
              <img
                src={user.image}
                width={"40px"}
                height={"40px"}
                className="rounded-circle me-2"
              ></img>
              <div>
                <p className="my-0 fw-bold clickable-name">
                  {user.name + " " + user.surname}
                </p>
                <p className="my-0 text-small">{user.title}</p>
              </div>
            </div>
            <div className="w-100 d-flex justify-content-center">
              <Button
                variant="white"
                className="text-black w-50 border border-black rounded-pill btn-sm mt-2 clickable-button"
              >
                <i className="bi bi-person-fill"></i> Connect
              </Button>
            </div>
          </div>
        ))}
        <p
          className="text-center mb-0 text-secondary modal-opener"
          onClick={handleShow}
        >
          Show all
        </p>
      </Col>
      {/* MODAL -----------------------------------------------------------------------------------------------------*/}
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="fs-5">People also viewed</Modal.Title>
        </Modal.Header>
        <Modal.Body className="scrollable-modal">
          {users20.map((user) => (
            <div
              key={user._id}
              className="mb-4 border-bottom border-secondary pb-4"
            >
              <div className="d-flex align-items-center">
                <img
                  src={user.image}
                  width={"40px"}
                  height={"40px"}
                  className="rounded-circle me-2"
                ></img>
                <div>
                  <p className="my-0 fw-bold clickable-name">
                    {user.name + " " + user.surname}
                  </p>
                  <p className="my-0 text-small">{user.title}</p>
                </div>
              </div>
              <div>
                <Button
                  variant="white"
                  className="text-black border border-black rounded-pill btn-sm mt-2 ms-5 px-2 clickable-button"
                >
                  <i className="bi bi-person-fill"></i> Connect
                </Button>
              </div>
            </div>
          ))}
        </Modal.Body>
      </Modal>
    </Row>
  );
};

export default PeopleViewed;
