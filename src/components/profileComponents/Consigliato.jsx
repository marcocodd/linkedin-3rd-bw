import Card from 'react-bootstrap/Card';
// import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
const Consigliato = () => (
  <>
    {/* <Container className="mb-2">
      <Row> */}
    {/* <Col xs={12} md={8}> */}
    <Card className="mb-2">
      <Card.Body>
        <div>
          <h5>Recommended for you</h5>
          <i className="bi bi-eye-fill me-2"></i>
          <span className="text-secondary">Only for you</span>
        </div>

        <div className="mt-4">
          <span className="fw-medium">Beginner</span>
          <Row className="align-items-center">
            <Col md={11}>
              <ProgressBar variant="text-info-emphasis" now={20} />
            </Col>
            <Col md={1}>
              <span>2/7</span>
            </Col>
          </Row>
        </div>
        <div className="mb-2">
          <span className="text-secondary-emphasis">
            Complete 2 steps to reach the level
            <a className=" text-decoration-none fw-semibold " href="">
              intermediate
            </a>
          </span>
        </div>
        <div className="d-flex">
          <div className="border rounded m-0 p-2 d-flex me-3">
            <div className="d-flex">
              <div>
                <div className="d-flex align-items-end">
                  <img
                    src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg"
                    alt=""
                    style={{ height: '3em' }}
                  />
                  <p className="fw-bold ms-2">What sector do you work in?</p>
                </div>
                <p className="text-body-tertiary">
                  Users who add a sector receive up to 2.5 times more profile
                  views.
                </p>

                <Button
                  variant="outline-secondary"
                  className="rounded-pill me-1 ps-4 pe-4 fw-semibold  "
                >
                  Add sector
                </Button>
              </div>
            </div>
          </div>
          <div className="border rounded m-0 p-2 d-flex me-3">
            <div className="d-flex">
              <div>
                <div className="d-flex align-items-end">
                  <img
                    src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg"
                    alt=""
                    style={{ height: '3em' }}
                  />
                  <p className="fw-bold ms-2">
                    What school or university did you attend?
                  </p>
                </div>
                <p className="text-body-tertiary">
                  Users that include a school or university receive up to 2.2x
                  more profile views.
                </p>

                <Button
                  variant="outline-secondary"
                  className="rounded-pill me-1 ps-4 pe-4 fw-semibold  "
                >
                  Add educational qualification
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
    {/* </Col> */}
    {/* </Row>
    </Container> */}
  </>
);
export default Consigliato;
