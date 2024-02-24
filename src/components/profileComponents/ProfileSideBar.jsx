import { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { actionGetAllUsers } from "../../redux/actions";
import PeopleViewed from "../PeopleViewed";
import { Row } from "react-bootstrap";
import PeopleMayKnow from "../PeopleMayKnow";

const ProfileSideBar = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.usersFetch.isLoading);

  useEffect(() => {
    dispatch(actionGetAllUsers());
  }, []);

  return (
    <Col xs={12} md={3}>
      {/* PROFILE AND PUBLIC URL SECTION --------------------------------------------------------------------------------------*/}
      <Row>
        <Col className="border border-secondary rounded shadow p-2 bg-white">
          <div className="d-flex align-items-center justify-content-between mt-2">
            <h5 className="fw-bold">Profile language</h5>
            <i className="bi bi-pencil fs-5"></i>
          </div>

          <p className="text-secondary border-bottom border-secondary mb-0 pb-3 text-small">
            English
          </p>
          <div className="d-flex align-items-center justify-content-between pt-3">
            <h5 className="fw-bold">Public profile and URL</h5>
            <i className="bi bi-pencil fs-5"></i>
          </div>
          <p className="text-secondary border-secondary mb-2 text-small">
            www.linkedin.com/in/fabio-gilardi-599b022a0
          </p>
        </Col>
        <div className="mt-2 d-flex justify-content-center">
          <img
            src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png "
            alt=""
            className=" rounded"
          />
        </div>
      </Row>
      {/* PEOPLE ALSO VIEWED SECTION ----------------------------------------------------------------------------------------- */}
      {isLoading && (
        <div className="w-100 d-flex justify-content-center py-5">
          <Spinner variant="primary" animation="border"></Spinner>
        </div>
      )}
      {!isLoading && (
        <>
          <PeopleViewed />
          <PeopleMayKnow />
        </>
      )}
    </Col>
  );
};

export default ProfileSideBar;
