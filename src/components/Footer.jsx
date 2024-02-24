import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function FooterComponent() {
  return (
    <Container>
      <Row className="justify-content-center align-items-center">
        <Col className="col-md-2">
          <p>About</p>
          <p>Community guidelines</p>
          <p>Privacy & Terms</p>
          <p>Sales Solutions</p>
          <p>Safety Center</p>
        </Col>
        <Col className="col-md-2">
          <p>Accessibility</p>
          <p>Careers</p>
          <p>Ad choises</p>
          <p>Mobile</p>
        </Col>
        <Col className="col-md-2">
          <p>Talent Solutions</p>
          <p>Marketing Solutions</p>
          <p>Advertising</p>
          <p>Small business</p>
        </Col>
        <Col className="col-md-2">
          <p>Questions?</p>
          <p>Manage yuor account and privacy</p>
          <p>Recommandation transparency</p>
        </Col>
        <Col className="col-md-2">
          <Form.Select aria-label="Default select example">
            <option>English(Eng)</option>
            <option value="1">Spanish(Español)</option>
            <option value="2">Italian(Italiano)</option>
            <option value="3">French(Français)</option>
          </Form.Select>
        </Col>
      </Row>
      <Row className="justify-content-start mt-1">
        <Col className="col col-md-6 d-flex p-0 offset-1">
          <div className="p-2">
            <p>Linkedin Corporation - 2024</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default FooterComponent;
