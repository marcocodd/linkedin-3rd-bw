import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ErrorPage = () => (
  <Container>
    <Row className="justify-content-center my-5">
      <Col
        sm={10}
        md={8}
        lg={6}
        className="d-flex flex-column align-items-center justify-content-center"
      >
        <img
          src="https://img.freepik.com/free-vector/cute-polar-bear-dabbing-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3361.jpg"
          alt="polar-bear-image"
          className="w-50"
        ></img>
        <h4 className="mt-2 text-center">Error 404 - Page not found</h4>
      </Col>
    </Row>
  </Container>
);

export default ErrorPage;
