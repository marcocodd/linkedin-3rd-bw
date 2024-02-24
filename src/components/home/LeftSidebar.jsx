import { useSelector } from 'react-redux';
import { Row, Col, Container, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSidebar = ({
 profileIcon,
 profileName,
 profileSurname,
 profileTitle,
}) => {
  const isLoading = useSelector((state) => state.meFetch.isLoading);

  return (
    <Container id="sticky-sidebars">
      {' '}
      <Row className="justify-content-center">
        <Col xs={12}>
          <Card className="mb-3">
            <div
              className="card-background-image"
              style={{
                backgroundImage:
                  'url("https://wallpapers.com/images/high/ubuntu-4k-5120-x-2880-uwdo176k9rm0tojp.webp")',
              }}
            >
              {!isLoading && (
                <img
                  src={profileIcon}
                  className="rounded-circle border mt-5"
                  style={{
                    width: '80px',
                    height: '80px',
                    position: 'relative',
                    top: '50%',
                    transform: 'translateY(-50%)',
                  }}
                  alt="profile picture"
                />
              )}
            </div>
            <Card.Body>
              <Link to={'/profile'} className="nav-link">
                <Card.Title className="text-center mt-3">
                  {profileName + ' ' + profileSurname}
                </Card.Title>
              </Link>
              <Card.Text className="text-muted text-center" id="job-title">
                {profileTitle}
              </Card.Text>
              {/* da qui collassa in sm */}
              <ListGroup variant="flush">
                <ListGroup.Item
                  className="d-flex justify-content-between align-items-center"
                  style={{ border: 'none' }}
                >
                  <span>Connections</span>
                  <span className="fw-bold text-primary">20</span>
                </ListGroup.Item>
                <ListGroup.Item className="fw-bold grow-network pb-2">
                  Grow your network
                </ListGroup.Item>
                <ListGroup.Item
                  className="mt-2 mb-2"
                  style={{ border: 'none' }}
                >
                  Strengthen your profile with an AI writing assistant
                </ListGroup.Item>
                <ListGroup.Item className="pb-2">
                  <i
                    className="bi bi-square-fill"
                    style={{ color: 'orange' }}
                  ></i>{' '}
                  Retry Premium for €0
                </ListGroup.Item>
                <ListGroup.Item className="mt-2">
                  <i className="bi bi-bookmark-fill"></i> My Items
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>

          <Card
            className="profile-card mx-auto mt-3"
            style={{ maxWidth: '280px' }}
          >
            <ListGroup variant="flush">
              <ListGroup.Item className="text-start text-muted">
                <p className="mt-3 ms-3 mb-0">Recent</p>
                <p className="mt-2 ms-3 mb-0">
                  <span
                    className="me-1"
                    style={{ fontSize: '1.1rem', fontWeight: 'bold' }}
                  >
                    #
                  </span>
                  hospitalitycareers
                </p>
                <p className="ms-3">
                  <span
                    className="me-2"
                    style={{ fontSize: '1.1rem', fontWeight: 'bold' }}
                  >
                    #
                  </span>
                  hospitalityindustry
                </p>
              </ListGroup.Item>
              <ListGroup.Item className="text-start">
                <p className="text-primary fw-bold ms-3 mb-0">Groups</p>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-center text-start">
                <p className="text-primary fw-bold ms-3 mb-0">Events</p>
                <span className="me-2 " style={{ fontSize: '1.5rem' }}>
                  +
                </span>
              </ListGroup.Item>

              <ListGroup.Item>
                <p className="text-primary fw-bold ms-3 mb-0">
                  Followed Hashtags
                </p>
                <p className="text-muted mt-2 ms-3 mb-0">
                  <span
                    className="me-2"
                    style={{ fontSize: '1.1rem', fontWeight: 'bold' }}
                  >
                    #
                  </span>
                  hospitalitycareers
                </p>
                <p className="text-start text-muted ms-3">
                  <span
                    className="me-2"
                    style={{ fontSize: '1.1rem', fontWeight: 'bold' }}
                  >
                    #
                  </span>
                  hospitalityindustry
                </p>
                <p className="text-start text-muted ms-3">See all</p>
              </ListGroup.Item>
            </ListGroup>
            <Card.Footer
              className="text-center"
              style={{ borderTop: '0.7px solid grey' }}
            >
              <p className="text-muted mt-1 mb-1 fw-bold">Discover more</p>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LeftSidebar;
