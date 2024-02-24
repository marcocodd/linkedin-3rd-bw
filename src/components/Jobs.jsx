import JobsSide from './JobComponents/JobsSide';
// import BestJobsOffers from "./JobComponents/BestJobsOffers";
import MainOffersJob from './JobComponents/MainOffersJob';
// import OtherJobsOffer from "./JobComponents/OtherJobsOffer";
import OfferSearch from './JobComponents/OfferSearch';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import JobsRightBar from './JobComponents/JobsRightBar';
const Jobs = () => (
  <>
    <Container>
      <Row className="my-4">
        <Col xs={12} md={4} lg={3} className="h-100">
          <JobsSide />
        </Col>
        <Col xs={12} md={8} lg={6}>
          <OfferSearch />
          <MainOffersJob />
          {/* <BestJobsOffers />
          <OtherJobsOffer /> */}
        </Col>
        <Col xs={12} md={10} lg={3} className="d-md-flex justify-content-end  ">
          <JobsRightBar />
        </Col>
      </Row>
    </Container>
  </>
);
export default Jobs;
