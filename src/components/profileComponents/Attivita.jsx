import Card from 'react-bootstrap/Card';
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';

const Attivita = () => (
  <>
    {/* <Container className="mb-2">
      <Row> */}
    {/* <Col xs={12} md={8}> */}
    <Card className="mb-2">
      <Card.Body>
        <div className="d-flex justify-content-between ">
          <h5>Activity</h5>
          <div>
            <Button
              variant="outline-primary"
              className="rounded-pill ps-4 pe-4 fw-semibold me-3 "
            >
              Create a post
            </Button>
            <a href="">
              <i className="bi bi-pencil text-black fs-5"></i>
            </a>
          </div>
        </div>
        <div>
          <a className="text-decoration-none  fw-semibold" href="">
            0 follower
          </a>
        </div>
        <p className="fw-semibold m-0">You haven't posted anything yet</p>

        <span>Posts you share will appear here</span>
      </Card.Body>
      <Card.Footer className="text-muted text-center ">
        <a className="text-decoration-none text-secondary" href="">
          Show all activities <i className="bi bi-arrow-right"></i>
        </a>
      </Card.Footer>
    </Card>
    {/* </Col> */}
    {/* </Row>
    </Container> */}
  </>
);
export default Attivita;
