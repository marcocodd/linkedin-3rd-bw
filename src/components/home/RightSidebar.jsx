import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import JobsRightBar from '../JobComponents/JobsRightBar';
import Button from 'react-bootstrap/Button';
import './sticky.css';
import '../../style/style.css';

const RightSidebar = () => {
  return (
    <>
      <div className="card profile-card mx-auto"  style={{ maxWidth: '430px' }}>
        <div className="d-flex justify-content-between align-items-center mt-4 ms-3 mb-3">
          <h2 className="h5 mb-0 font-weight-bold text-dark">
            Add to your feed
          </h2>
          <i className="fas fa-info-circle text-secondary"></i>
        </div>
        <div>
          <div className="mt-3 mb-2">
            <div className="d-flex align-items-center">
              <img
                src="https://epicode-testapi-bucket.s3.eu-south-1.amazonaws.com/1708596116095-bobby.jpg"
                className="card-img-top rounded-circle border border-secondary mx-3"
                style={{ width: '50px' }}
                alt="profile picture"
              />
              <div>
                <p className="mb-0 fw-semibold text-dark">Fabio Gilardi</p>
                <p className="mb-0 text-muted" style={{ fontSize: '0.8rem' }}>
                  Polar Bears&apos; Rescuer
                </p>
              </div>
            </div>
            <Button
              variant="outline-secondary"
              className="rounded-pill me-1 fw-bold mt-2"
              style={{
                fontSize: '1rem',
                padding: '3px 10px 3px 10px',
                marginLeft: '80px',
              }}
            >
              + Follow
            </Button>
          </div>
          <div className="mt-4 mb-2">
            <div className="d-flex align-items-center">
              <img
                src="https://picsum.photos/200"
                className="card-img-top rounded-circle border border-secondary mx-3"
                style={{ width: '50px' }}
                alt="profile picture"
              />
              <div>
                <p className="mb-0 fw-semibold text-dark">Marco Brunetti</p>
                <p className="mb-0 text-muted" style={{ fontSize: '0.8rem' }}>
                  Epicode Full-stack student
                </p>
              </div>
            </div>
            <Button
              variant="outline-secondary"
              className="rounded-pill me-1 fw-bold mt-2"
              style={{
                fontSize: '1rem',
                padding: '3px 10px 3px 10px',
                marginLeft: '80px',
              }}
            >
              + Follow
            </Button>
          </div>
          <div className="mt-4 mb-2">
            <div className="d-flex align-items-center">
              <img
                src="https://picsum.photos/200"
                className="card-img-top rounded-circle border border-secondary mx-3"
                style={{ width: '50px' }}
                alt="profile picture"
              />
              <div>
                <p className="mb-0 fw-semibold text-dark">Nicolò di Giacinto</p>
                <p className="mb-0 text-muted" style={{ fontSize: '0.8rem' }}>
                  Epicode Full-stack student
                </p>
              </div>
            </div>
            <Button
              variant="outline-secondary"
              className="rounded-pill me-1 fw-bold mt-2"
              style={{
                fontSize: '1rem',
                padding: '3px 10px 3px 10px',
                marginLeft: '80px',
              }}
            >
              + Follow
            </Button>
          </div>
          <div className="mt-4 mb-2">
            <div className="d-flex align-items-center">
              <img
                src="https://picsum.photos/200"
                className="card-img-top rounded-circle border border-secondary mx-3"
                style={{ width: '50px' }}
                alt="profile picture"
              />
              <div>
                <p className="mb-0 fw-semibold text-dark">
                  Salvatore Malanchino
                </p>
                <p className="mb-0 text-muted" style={{ fontSize: '0.8rem' }}>
                  Epicode Full-stack student
                </p>
              </div>
            </div>
            <Button
              variant="outline-secondary"
              className="rounded-pill me-1 fw-bold mt-2"
              style={{
                fontSize: '1rem',
                padding: '3px 10px 3px 10px',
                marginLeft: '80px',
              }}
            >
              + Follow
            </Button>
          </div>
          <div className="mt-4 mb-2">
            <div className="d-flex align-items-center">
              <img
                src="https://picsum.photos/200"
                className="card-img-top rounded-circle border border-secondary mx-3"
                style={{ width: '50px' }}
                alt="profile picture"
              />
              <div>
                <p className="mb-0 fw-semibold text-dark">Adriano Bruzzese</p>
                <p className="mb-0 text-muted" style={{ fontSize: '0.8rem' }}>
                  Epicode Full-stack student
                </p>
              </div>
            </div>
            <Button
              variant="outline-secondary"
              className="rounded-pill me-1 fw-bold mt-2"
              style={{
                fontSize: '1rem',
                padding: '3px 10px 3px 10px',
                marginLeft: '80px',
              }}
            >
              + Follow
            </Button>
          </div>
        </div>
        <div className="border-top pt-3 mb-3">
          <a href="#" className="text-secondary text-decoration-none ms-3">
            View all recommendations <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>

      <div className=" sticky-content d-flex flex-column ">
        <div className="text-center">
          <img
            src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png "
            alt=""
            className=" rounded"
          />
        </div>
        <JobsRightBar />
      </div>
    </>
  );
};

export default RightSidebar;
