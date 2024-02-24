import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetExperiences } from '../../redux/actions/index';
// import Container from 'react-bootstrap/Container';
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

const Esperienza = () => {
  // STATO INIZIALE DEL FORM

  const startingForm = {
    role: '',
    company: '',
    description: '',
    area: '',
    startDate: null,
    endDate: null,
  };

  // STATO LOCALE PER IL MODAL ED IL FORM

  const [show, setShow] = useState(false);
  const [formControl, setFormControl] = useState(startingForm);

  // FUNZIONI VARIE

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleForm = (key, input) => {
    setFormControl({
      ...formControl,
      [key]: input,
    });
  };

  const token = useSelector((state) => state.activeUser.token);

  const postExperience = async (id, token) => {
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/profile/' +
          id +
          '/experiences',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formControl),
        }
      );
      if (response.ok) {
        alert('Salvataggio è andato a buon fine');
        setFormControl(startingForm);
        dispatch(actionGetExperiences(returnPersonalId(), token));
      } else {
        alert('Qualcosa è andato storto');
      }
    } catch (error) {
      alert(error);
    }
  };

  const returnPersonalId = () => {
    if (me !== null) {
      return me._id;
    }
  };

  // REDUX HOOKS

  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.experiencesFetch.isLoading);

  const me = useSelector((state) => state.meFetch.content);

  useEffect(() => {
    dispatch(actionGetExperiences(returnPersonalId(), token));
  }, [me, token]);

  const experiences = useSelector((state) => state.experiencesFetch.content);

  return (
    <>
      {/* <Container className="mb-2">
      <Row> */}
      {/* <Col xs={12} md={8}> */}
      {!isLoading && (
        <Card className="mb-2">
          <Card.Body>
            <div className="d-flex justify-content-between align-items-start   ">
              <h5>Experience</h5>
              <div className="d-flex align-items-center ">
                <a onClick={handleShow}>
                  <i className="bi bi-plus-lg me-3 text-black fs-3"></i>
                </a>

                <a href="">
                  <i className="bi bi-pencil text-black fs-5"></i>
                </a>
              </div>
            </div>
            {experiences.length === 0 &&
              'Non hai ancora inserito nella esperienza lavorativa'}
            {experiences.length !== 0 &&
              experiences.map((experience) => {
                return (
                  <div
                    className="d-flex align-items-center"
                    key={experience._id}
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiQ8tPe9t5RYfJCPxS2c6aCijrxIGKAAiI50BP0Qyrpn8NOz2YsS5_gHJH4pXxZ--9TQw&usqp=CAU"
                      alt=""
                      style={{ height: '3em' }}
                      className="me-2 mb-3"
                    />
                    <div>
                      <p className="fw-bold m-0">{experience.role}</p>
                      <p>{experience.company + ' • ' + experience.area} </p>
                    </div>
                    <div>
                      <Button
                        className="btn-sm ms-5 border border-black shadow mb-2"
                        variant="white"
                        onClick={async () => {
                          try {
                            const response = await fetch(
                              'https://striveschool-api.herokuapp.com/api/profile/' +
                                returnPersonalId() +
                                '/experiences/' +
                                experience._id,
                              {
                                method: 'DELETE',
                                headers: {
                                  Authorization: `Bearer ${token}`,
                                },
                              }
                            );
                            if (response.ok) {
                              alert('Il file è stato eliminato correttamente');
                              dispatch(
                                actionGetExperiences(returnPersonalId(), token)
                              );
                            } else {
                              alert('Qualcosa è andato storto');
                            }
                          } catch (error) {
                            alert(error);
                          }
                        }}
                      >
                        <i className="bi bi-trash fs-5"></i>
                      </Button>
                    </div>
                  </div>
                );
              })}
          </Card.Body>
        </Card>
      )}

      {/* </Col> */}
      {/* </Row>
    </Container> */}
      {/* MODAL PER REGISTRARE LE ESPERIENZE --------------------------------------------------------------------- */}
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="fs-5">
            Record your work experience
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              postExperience(returnPersonalId(), token);
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label>Role:</Form.Label>
              <Form.Control
                type="text"
                required
                value={formControl.role}
                onChange={(e) => {
                  handleForm('role', e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Company:</Form.Label>
              <Form.Control
                type="text"
                required
                value={formControl.company}
                onChange={(e) => {
                  handleForm('company', e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description:</Form.Label>
              <Form.Control
                type="text"
                required
                value={formControl.description}
                onChange={(e) => {
                  handleForm('description', e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Area:</Form.Label>
              <Form.Control
                type="text"
                required
                value={formControl.area}
                onChange={(e) => {
                  handleForm('area', e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Start Date:</Form.Label>
              <Form.Control
                type="date"
                required
                value={formControl.startDate}
                onChange={(e) => {
                  handleForm('startDate', e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>End Date &#40;optional&#41;:</Form.Label>
              <Form.Control
                type="date"
                value={formControl.endDate}
                onChange={(e) => {
                  handleForm('endDate', e.target.value);
                }}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default Esperienza;
