import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

import CloseButton from 'react-bootstrap/CloseButton';
import { actionGetJobs } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const MainOffersJob = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobsFetch.content);
  const search = useSelector((state) => state.jobsFetch.navbarInput);
  const isLoading = useSelector((state) => state.jobsFetch.isLoading);

  useEffect(() => {
    dispatch(actionGetJobs(search));
  }, [search]);

  return (
    <>
      {isLoading && (
        <div className="d-flex justify-content-center py-4">
          <Spinner animation="border" variant="primary"></Spinner>
        </div>
      )}
      {!isLoading && jobs.length === 0 && (
        <div className="bg-white d-flex justify-content-center border rounded py-3">
          <p className="mb-0">
            No jobs have been founded{' '}
            <i className="bi bi-x-lg text-danger fs-5"></i>
          </p>
        </div>
      )}
      {!isLoading &&
        jobs.map((job) => {
          return (
            <Card className="mb-3" key={job._id}>
              <Card.Body>
                <div className="border-bottom">
                  {/* <div>
            <p className="fw-bold m-0">
              Le principali offerte di lavoro per te
            </p>
            <p className="text-secondary">
              Sulla base del tuo profilo e della tua cronologia delle ricerche{" "}
            </p>
          </div> */}
                  <div className="d-flex justify-content-between  ">
                    <div className="d-flex">
                      <img
                        src={job.url}
                        alt=""
                        style={{ height: '3em' }}
                        className="rounded-3 me-2  "
                      />
                      <div>
                        <div>
                          <a href="" className="fw-bold text-decoration-none ">
                            {job.title}
                          </a>
                          <p className="m-0">
                            <a
                              className="text-decoration-none text-black"
                              href={job.url}
                              target="_blank"
                            >
                              {job.company_name}
                            </a>{' '}
                            &#40;{job.category}&#41;
                          </p>
                          <p className="text-secondary m-0">
                            {job.candidate_required_location}
                          </p>
                          <span className="text-secondary m-0">
                            Type:{' '}
                            {job.job_type === 'full_time'
                              ? 'Full time'
                              : job.job_type}
                          </span>
                          <span className="text-secondary m-0 ms-5">
                            Salary:{' '}
                            {job.salary !== ''
                              ? job.salary
                              : 'Not declared yet'}
                          </span>
                        </div>
                        {Math.ceil(Math.random() * 2) % 2 === 0 && (
                          <div>
                            <p className="d-flex align-items-center text-secondary m-0">
                              <a className="text-success">
                                <i className="bi bi-check2-circle fs-3 me-2"></i>
                              </a>
                              Applications are usually reviewed within 2 days
                            </p>
                          </div>
                        )}

                        <div>
                          <p className="text-secondary">
                            Promoted ·
                            <span className="text-success me-1 fw-semibold  ">
                              {' ' + Math.ceil(Math.random() * 10)} candidates ·
                            </span>
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHHGP6iihsrdqVz2wX_MUZGdv3-RY7o7Q9dA&usqp=CAU"
                              alt=""
                              style={{ height: '1em' }}
                              className="me-1"
                            />
                            simple application
                          </p>
                        </div>
                      </div>
                    </div>
                    <CloseButton aria-label="Hide" />
                  </div>
                </div>
              </Card.Body>
              <Card.Footer className="text-muted text-center ">
                <a className="text-decoration-none text-secondary" href="">
                  Show all activities <i className="bi bi-arrow-right"></i>
                </a>
              </Card.Footer>
            </Card>
          );
        })}
    </>
  );
};
export default MainOffersJob;
