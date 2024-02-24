import Body from "./Body";
import Consigliato from "./profileComponents/Consigliato";
import Analisi from "./profileComponents/Analisi";
import Risorse from "./profileComponents/Risorse";
import Attivita from "./profileComponents/Attivita";
import Esperienza from "./profileComponents/Esperienza";
import Innteressi from "./profileComponents/Interessi";
import ProfileSideBar from "./profileComponents/ProfileSideBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Profile = () => (
  <Container>
    <Row className="my-3 justify-content-center">
      <Col xs={12} md={9}>
        <Body />
        <Consigliato />
        <Analisi />
        <Risorse />
        <Attivita />
        <Esperienza />
        <Innteressi />
      </Col>
      <ProfileSideBar />
    </Row>
  </Container>
);
export default Profile;
