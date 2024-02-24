import Card from 'react-bootstrap/Card';
// import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import '../profileComponents/Body.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetMyProfile } from '../../redux/actions';
import Modal from 'react-bootstrap/Modal';

const Body = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetMyProfile());
  }, []);

  const me = useSelector((state) => state.meFetch.content);
  const isLoading = useSelector((state) => state.meFetch.isLoading);

  console.log(me);

  return (
    <>
      {/* <Container className="mb-2">
      <Row> */}
      {/* <Col xs={12} md={8}> */}
      {!isLoading && (
        <Card className="mb-2">
          <div>
            <Card.Img
              variant="top"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQDw0QEA8QDxUPDQ0NEA8NDQ8NDxANFREWFhUSFRUYHSggGBolHRUVITEhJSktLi4uFx8zODMtNygtLisBCgoKDQ0NFQ8PFSsZFRkrKystLSstKysrLSsrKysrKy0tKysrLSsrLSsrKysrLSsrKysrKysrKysrKystKysrK//AABEIAJ8BPQMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAACAAEDBf/EABwQAQEBAQEBAAMAAAAAAAAAAAARAQISYQMxUf/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMFBP/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwDxvK8nCzl7FfRA5/H8LrjNNFI4bz8Xl23A3CkDyvJxRaQPLeeDzkkpGec/mOfXEdmQpHHyvLpvLItIHleTjcwpAzh0zjP43MalI5dcD5dw3kpHPyvJxRaQPKzn4cPMSkHniM6/H8dEUjh5Xl165GFIHleTii0geT5/GXPJJSB1xXPz8d2byUjj5Xk4otIHleTihSB5Xk4oUh5jWpzrcYmopGKNRSDFmHmM0pGJqKRiaikYyEswpBjS3GFIxNRSMTUUg7yoTYUg5iaikYmopGM3CRSBCzCjCkYmopGJqKRm4yEoUgRQ4otIEUOKFIUZHSM3lzbgJqKkYswswoECKHFFqxzidNwNxKkYmrMKRmY2HFCrAjNx0ihSOaLcYVIxRsLMKQYocUWrA3GOkHeUqQU1FIxuYWcthVgRbhxRaRzR7yKVIxNbnJSMzFDii1YEUOKFIEUOKFIUUOKMVuOfXI88u/PJdcpUjjFDii1YEUOKFIEW8nFnJSOPk85dvIbiVIEUOKLVgRQ4oUgQN5doecpUjhnLYe8qLVgRQ4oUgRQ4oUjj1yXPLtzyzrlKkc4ocUWrAihxQpAg9cusbzyUjjzyUdeuRhSBFDihSBFDihSBFDihSFG5yWY1itRiakpB3BjotxaRzihRsKsDMPMbElSMW41FI5xR0jItWBFChZhSDmNakqRkHcNQpHOKHGRasGFmNzGlSMTUlIG8sjozcWkCKFG5hVg5yTUlSMZvJIpHOKHuMi1YMUKKFIMUKKFIaLcY51qMTUUjE1ZhSMiJbi0gpqSkYmopGJrYUgxFGRaRiakpGJqKRihZiWkFN3ElIxNRSMTW5hSDEbNxaQU1JSMTUUjFG5jVpBihRQqwYoUUKQ4PXLpFGK1HFOnXA5lKRmYeYWcqFIMUKKFWB1yDtGdclSOSjY6c8lIOcthRQqwYt5KKFI47idd5c9wqRh88t54KFIMUKKFWDA3HWLcKkcUXXMbzyUjOeShRQpBihRQqxz65F2gdcwqQG5y3nmukKQYoUUKsGKFFCkGKFFCkOKFGxitwMxu8T9HEVHOKHuMhSDFCihVgxQoWYVIHhkdFuFHOKFFCrBihRQpBjfB5iKjnuKOm4MKDFCihVgxQo3MKkHOL+2by6KFHOKHuMhVgxQooUgxZzTzGlQN4jI6M3CgRQooVYMUKKFIMUKKFIcRJitCiRUgqEikGKFEVRiJFSCiRSDFCRVGKFEUFEipBRIpBihKFUYiRUFEikFQkVRihRFBRIqQUSKQYoShVGKFFCrBihRQpG7jHWB1kYrUFNS1IxRp5yUg5i3DiiVY5I+uRWpGJqKRhZjeeSiVYG4LrGdclI5pqWpGJpc8lIOY3cOKJVjlE6byGrUjE1FIxuY3nKcSrBg7jpFCkckW5GLUjE1ZhSLMbDzlRKsGKFFCrBihRQpH/2Q=="
              style={{ height: '14em' }}
            />
            <div className=" ">
              <i className="bi bi-camera-fill position-absolute top-0 end-0 me-3 mt-3 border border-2 rounded-circle bg-light pe-1 ps-1  "></i>
            </div>
          </div>

          <div className="d-flex  justify-content-between mb-3 ">
            <Modal show={show} onHide={handleClose} size="lg" className=" m-0 ">
              <Modal.Header closeButton>
                <Modal.Title className="ms-3">Aggiungi foto</Modal.Title>
              </Modal.Header>

              <Modal.Body className="fw-bold p-5">
                <p className="text-center">
                  La tua foto non deve per forza essere un tuo primo piano!
                </p>{' '}
                <p className="text-center">Ma qualcosa che ti rappresenti.</p>
                <div className="text-center mt-3 mb-4">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY4PolCRZG_SUGHzrbMdWczrLPDLPFjmAlXQ&usqp=CAU"
                    alt=""
                    style={{ height: '3em' }}
                    className="rounded-circle "
                  />
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fN3fQYT4v44UcLmMAyudCfBMiweCc-OgBw&usqp=CAU"
                    alt=""
                    style={{ height: '5em' }}
                    className="rounded-circle pe-1 ps-1"
                  />
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj9QMoM4JNxSsrO_iIRkPPebsThja5DB1oHw&usqp=CAU"
                    alt=""
                    style={{ height: '7em' }}
                    className="rounded-circle pe-1 ps-1"
                  />
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1IGhWi1O8OGtJ86l3vS4-Stte3E1OBQ4KxQ&usqp=CAU"
                    alt=""
                    style={{ height: '5em' }}
                    className="rounded-circle pe-1 ps-1"
                  />
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR86Py_pFI5u5GFWLNhnfJ--GVhedOuXfCGGw&usqp=CAU"
                    alt=""
                    style={{ height: '3em' }}
                    className="rounded-circle pe-1 ps-1"
                  />
                </div>
                <p className="text-center text-secondary ">
                  Chiediamo agli utenti di LinkedIn di utilizzare le loro vere
                  identità, quindi scatta o carica una tua foto. Poi ritagliala,
                  applica dei filtri e perfezionala come vuoi.
                </p>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Chiudi
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Carica foto
                </Button>
              </Modal.Footer>
            </Modal>
            <button className=" bg-transparent border-0 " onClick={handleShow}>
              <img
                id="img"
                src="data:image/jpeg;base64,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"
                alt="UserIMG"
                style={{ height: '9em' }}
                className="profile border border-white-5 rounded-circle "
              />
            </button>

            <a className="text-decoration-none text-dark" href="">
              {' '}
              <i className="bi bi-pencil me-3  fs-5"></i>
            </a>
          </div>
          <Card.Body className=" ">
            <Card.Text>
              <Row>
                <div className="d-flex  align-items-baseline ">
                  <Col md={8}>
                    <div>
                      <div className="d-flex">
                        <h4>{me.name + ' ' + me.surname}</h4>
                        <Button
                          className="ms-3 rounded-pill"
                          style={{ fontSize: '1rem', padding: '0 10px 0 10px' }}
                          variant="outline-primary"
                        >
                          <i className="bi bi-patch-check-fill "></i> Verifica
                          ora
                        </Button>
                      </div>
                    </div>
                    <p className="mb-1">{me.title}</p>
                  </Col>
                  <button className="border border-0 bg-transparent">
                    <span>
                      <img
                        src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg"
                        alt=""
                        style={{ height: '2.5em', width: '2.5em' }}
                        className="me-2"
                      />
                      <a className="text-dark text-decoration-none " href="">
                        Ristorante
                      </a>
                    </span>
                  </button>
                </div>
              </Row>
              <span className="text-body-tertiary">
                {me.area} •{' '}
                <a className=" text-decoration-none " href="">
                  Informazioni di contatto
                </a>
              </span>
            </Card.Text>

            <div className="d-flex  mt-2 ">
              <Button
                className=" rounded-pill ps-2 pe-2 fw-bold me-2 "
                as="input"
                type="button"
                value="Disponibile per"
              />

              <Button
                variant="outline-primary"
                className="rounded-pill ps-4 pe-4 fw-bold me-2 "
              >
                Aggiungi sezione del profilo
              </Button>
              <div>
                <Button
                  variant="outline-secondary"
                  className="rounded-pill fw-bold   "
                >
                  Altro
                </Button>
              </div>
            </div>
          </Card.Body>

          <div className="d-flex ms-3 mb-3 ">
            <div className="border rounded m-0 p-2 d-flex me-3">
              <div className="d-flex">
                <a className="text-decoration-none" href="">
                  <strong className=" text-body-secondary">
                    Fai sapere che stai facendo selezione
                  </strong>
                  <p className="text-body-tertiary">
                    e attrai candidati qualificati
                  </p>

                  <span className="fw-bold">Inizia</span>
                </a>
              </div>
              <div className="ms-5">
                <CloseButton />
              </div>
            </div>
            <div className="border rounded m-0 p-2 d-flex me-3">
              <div className="d-flex">
                <a className="text-decoration-none" href="">
                  <strong className=" text-body-secondary">
                    Fai sapere che stai facendo selezione
                  </strong>
                  <p className="text-body-tertiary">
                    e attrai canndidati qualificati
                  </p>

                  <span className="fw-bold">Inizia</span>
                </a>
              </div>
              <div className="ms-5">
                <CloseButton />
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* </Col> */}
      {/* </Row>
    </Container> */}
    </>
  );
};
export default Body;
