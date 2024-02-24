import Card from 'react-bootstrap/Card';
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
//import Col from 'react-bootstrap/Col';

const Analisi = () => (
  <>
    {/* <Container className="mb-2">
      <Row> */}
    {/* <Col xs={12} md={8}> */}
    <Card className="mb-2">
      <Card.Body>
        <div>
          <h5>Analisi</h5>
          <i className="bi bi-eye-fill me-2"></i>
          <span className="text-secondary">Only for you</span>
        </div>
        <div>
          <i className="bi bi-people-fill me-2"></i>
          <a className="text-decoration-none text-dark fw-semibold" href="">
            0 profile views
          </a>
        </div>
        <p className="text-secondary-emphasis">
          Update your profile to attract visitors.
        </p>
      </Card.Body>
      <Card.Footer className="text-muted text-center ">
        <a className="text-decoration-none text-secondary" href="">
          Show all analyses <i className="bi bi-arrow-right"></i>
        </a>
      </Card.Footer>
    </Card>
    {/* </Col> */}
    {/* </Row>
    </Container> */}
  </>
);
export default Analisi;
