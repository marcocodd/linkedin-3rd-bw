import Card from "react-bootstrap/Card";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CloseButton from "react-bootstrap/CloseButton";
import Button from "react-bootstrap/Button";
const OfferSearch = () => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between ">
          <p className="fw-bold">
            Offerte di lavoro per cui rientri fra i migliori candidati
          </p>
          <CloseButton aria-label="Hide" />
        </div>
        <Row>
          <Col md={9}>
            <Button
              variant="outline-primary rounded-pill pe-4 ps-4 me-2 mb-2 fw-bold"
              size="sm"
            >
              <i className="bi bi-search me-2 "></i>Web Developer
            </Button>
            <Button
              variant="outline-primary rounded-pill pe-4 ps-4 me-2 mb-2 fw-bold"
              size="sm"
            >
              <i className="bi bi-search me-2"></i>Front-End
            </Button>
            <Button
              variant="outline-primary rounded-pill pe-4 ps-4 me-2 mb-2 fw-bold"
              size="sm"
            >
              <i className="bi bi-search me-2"></i>Back-End
            </Button>
            <Button
              variant="outline-primary rounded-pill pe-4 ps-4 me-2 mb-2 fw-bold"
              size="sm"
            >
              <i className="bi bi-search me-2"></i>Full-Stack
            </Button>
            <Button
              variant="outline-primary rounded-pill pe-4 ps-4 me-2 mb-2 fw-bold"
              size="sm"
            >
              <i className="bi bi-search me-2"></i>DevOps
            </Button>
            <Button
              variant="outline-primary rounded-pill pe-4 ps-4 me-2 mb-2 fw-bold"
              size="sm"
            >
              <i className="bi bi-search me-2"></i>Ethical Hacker
            </Button>
            <Button
              variant="outline-primary rounded-pill pe-4 ps-4 me-2 mb-2 fw-bold"
              size="sm"
            >
              <i className="bi bi-search me-2"></i>Polar Bears Rescuer
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
export default OfferSearch;
