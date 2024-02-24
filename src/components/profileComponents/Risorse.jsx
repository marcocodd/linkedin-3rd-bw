import Card from 'react-bootstrap/Card';
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
//import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
const Risorse = () => (
  <>
    {/* <Container className="mb-2">
      <Row> */}
    {/* <Col xs={12} md={8}> */}
    <Card className="mb-2">
      <Card.Body>
        <div className=" border-bottom ">
          <div>
            <h5>Resources</h5>
            <i className="bi bi-eye-fill me-2"></i>
            <span className="text-secondary">Only for you</span>
          </div>
          <div>
            <i className="bi bi-broadcast-pin me-2"></i>
            <a className="text-decoration-none text-dark fw-semibold" href="">
              Content creation mode <Badge bg="dark-subtle">No</Badge>
            </a>
          </div>
          <p className="text-secondary-emphasis">
            Get discovered, highlight the content on your profile and access the
            creation tools
          </p>
        </div>

        <div className="mt-2">
          <i className="bi bi-people-fill me-2"></i>
          <a className="text-decoration-none text-dark fw-semibold" href="">
            My network
          </a>
        </div>
        <p className="text-secondary-emphasis">
          Save and manage your connections and interests.
        </p>
      </Card.Body>
      <Card.Footer className="text-muted text-center ">
        <a className="text-decoration-none text-secondary" href="">
          Show all resources <i className="bi bi-arrow-right"></i>
        </a>
      </Card.Footer>
    </Card>
    {/* </Col> */}
    {/* </Row>
    </Container> */}
  </>
);
export default Risorse;
