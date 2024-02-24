import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const JobsRightBar = () => (
  <>
    <div className=" text-center mt-4  ">
      <div className="d-flex justify-content-center ">
        <Nav.Link className="text-secondary fs-6 me-3 " href="#home">
          Information
        </Nav.Link>
        <Nav.Link className="text-secondary fs-6" href="#home">
          Accessibility
        </Nav.Link>
      </div>
      <div className="d-flex justify-content-center ">
        <Nav.Link className="text-secondary fs-6 me-3" href="#home">
          Service Center
        </Nav.Link>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Privacy e condizioni"
          menuVariant="dark"
          className="text-body-tertiary"
        >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </div>
      <div className="d-flex justify-content-center ">
        <Nav.Link className="text-secondary fs-6  " href="#home">
          Options for advertisements
        </Nav.Link>
      </div>
      <div className="d-flex justify-content-center ">
        <Nav.Link className="text-secondary fs-6 me-3" href="#home">
          Advertising
        </Nav.Link>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Business services"
          menuVariant="dark"
          className="text-body-tertiary"
        >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </div>
      <div className="d-flex justify-content-center ">
        <Nav.Link className="text-secondary fs-6 me-3" href="#home">
          Download the LinkedIn app
        </Nav.Link>
        <Nav.Link className="text-secondary fs-6" href="#home">
          more
        </Nav.Link>
      </div>
      <div className="mt-3 d-flex justify-content-center  align-items-center">
        <div>
          <img
            alt=""
            src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
            style={{ height: '1em' }}
          />{' '}
        </div>
        <span className="fs-6">LinkedIn Corporation © 2024</span>
      </div>
    </div>
  </>
);
export default JobsRightBar;
