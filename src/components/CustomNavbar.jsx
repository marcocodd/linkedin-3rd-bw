// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import InputGroup from "react-bootstrap/InputGroup";
// import Modal from "react-bootstrap/Modal";
// import Image from "react-bootstrap/Image";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import Logo from "../assets/img/LInkedinlogo.png";
// import Form from "react-bootstrap/Form";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   actionActiveAdriano,
//   actionActiveFabio,
//   actionActiveMarco,
//   actionActiveNicolo,
//   actionActiveSalvatore,
//   actionUpdateNavbarInput,
// } from "../redux/actions";
// import { Link, useLocation } from "react-router-dom";
// import { useState } from "react";

// function NavbarComponent() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const location = useLocation().pathname;
//   console.log(location);

//   const dispatch = useDispatch();

//   const token = useSelector((state) => state.activeUser.token);

//   const navbarSearch = useSelector((state) => state.jobsFetch.navbarInput);

//   return (
//     <>
//      <Navbar bg="light" expand="lg" sticky="top" id="navbar">
//         <Container fluid>
//           <Navbar.Brand href="#Logo1">
//             <Image
//               src={Logo}
//               S
//               width="43px"
//               className="d-inline-block align-top"
//               alt="Logo"
//             />
//           </Navbar.Brand>
//           <InputGroup className="me-auto my-2 my-lg-0" id="search-input-group">
//                 <Form.Control
//                   type="text"
//                   placeholder="Search"
//                   aria-label="Search"
//                   style={{
//                     backgroundColor: '#edf3f8',
//                     borderColor: '#e0f7fa',
//                     borderRadius: '5px',
//                   }}
//                   value={navbarSearch}
//                   onChange={(e) => {
//                     dispatch(actionUpdateNavbarInput(e.target.value));
//                   }}
//                 /><i
//                 className="bi bi-search search-icon"
//                 style={{
//                   position: 'absolute',
//                   right: '10px',
//                   top: '50%',
//                   transform: 'translateY(-50%)',
//                   zIndex: '1000',
//                 }}
//               ></i>
//             </InputGroup>

//                 <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav className="ms-auto" navbarScroll>
//             <Nav.Link href="#home" className="d-lg-none">
//               Home
//             </Nav.Link>
//             <Nav.Link href="#network" className="d-lg-none">
//               My Network
//             </Nav.Link>
//             <Nav.Link href="#network" className="d-lg-none">
//               Jobs
//             </Nav.Link>
//             <Nav.Link href="#network" className="d-lg-none">
//               Messaging
//             </Nav.Link>
//             <Nav.Link href="#network" className="d-lg-none">
//               Notifications
//             </Nav.Link>
//             <div className="d-none d-lg-flex align-items-center">
//               <Nav.Link href="#home" className="nav-icon d-none d-lg-block">
//                 <i className="bi bi-house-door-fill"></i> <div className='nav-label'>Home</div>
//               </Nav.Link>
//               <Nav.Link href="#network" className="nav-icon d-none d-lg-block">
//                 <i className="bi bi-people-fill"></i>
//                 <div className='nav-label'>My Network</div>
//               </Nav.Link>
//               <Nav.Link href="#jobs" className="nav-icon d-none d-lg-block">
//                 <i className="bi bi-briefcase-fill"></i> <div className='nav-label'>Jobs</div>
//               </Nav.Link>
//               <Nav.Link
//                 href="#messaging"
//                 className="nav-icon d-none d-lg-block"
//               >
//                 <i className="bi bi-chat-dots-fill"></i> <div className='nav-label'>Messaging</div>
//               </Nav.Link>
//               <Nav.Link
//                 href="#notifications"
//                 className="nav-icon d-none d-lg-block me-5"
//               >
//                 <i className="bi bi-bell-fill"></i> <div className='nav-label'>Notifications</div>
//               </Nav.Link>
//             </div>

//               <NavDropdown
//                 title={
//                   <div className="nav-icon-dropdown mt-2">
//                     <img src="https://picsum.photos/200/300" alt="Avatar" />
//                     <span className="nav-dropdown-text" >Me ▼</span>
//                   </div>
//                 }
//                 id="navbarScrollingDropdown"
//                 align="end"
//               ></NavDropdown>
//                 <NavDropdown
//                   title="Me"
//                   align={{ lg: "end", md: "end", sm: "end", xs: "end" }}
//                   style={{ fontSize: "1rem", marginBottom: "3px" }}
//                   className="p-0"
//                 >
//                   <NavDropdown.Item href="#gestioni-profili">
//                     Profile management
//                   </NavDropdown.Item>
//                   <NavDropdown.Item href="#account">Account</NavDropdown.Item>
//                   <NavDropdown.Divider />
//                   <NavDropdown.Item onClick={handleShow}>
//                     Switch User
//                   </NavDropdown.Item>
//                 </NavDropdown>
//               </Nav>
//             </Nav>
//           </Navbar.Collapse>
//           <Navbar.Collapse>
//             <Nav
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//               }}
//             >
//               <i
//                 className="bi bi-grid-3x3-gap-fill mt-4"
//                 style={{
//                   fontSize: "20px",
//                 }}
//               ></i>
//               <NavDropdown
//                 title="For business"
//                 className="mb-3"
//                 align={{ lg: "end", md: "end", sm: "end", xs: "end" }}
//               >
//                 <NavDropdown.Item href="#gestioni-profili">
//                   Acquire premium membership
//                 </NavDropdown.Item>
//                 <NavDropdown.Item href="#account">Account</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//           </Navbar.Collapse>

//       {/* MODAL PER IL CHANGE DELL'USER */}
//       <div><Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Select the user to login</Modal.Title>
//         </Modal.Header>
//         <Modal.Body
//           className="d-flex align-items-center modal-hoverable"
//           onClick={() => {
//             dispatch(actionActiveFabio());
//             handleClose();
//           }}
//         >
//           <i
//             className={
//               token ===
//               "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTFlNjI0ZjYwNTAwMTkzN2Q0NTciLCJpYXQiOjE3MDgzMzE0OTUsImV4cCI6MTcwOTU0MTA5NX0.KHAcN2ZmdInZibSsuN6-ccclj1K1u8EHV-HfobzUCsg"
//                 ? "bi bi-person-circle fs-4 me-2 text-primary"
//                 : "bi bi-person-circle fs-4 me-2"
//             }
//           ></i>{" "}
//           Fabio Gilardi
//         </Modal.Body>
//         <Modal.Body
//           className="d-flex align-items-center modal-hoverable"
//           onClick={() => {
//             dispatch(actionActiveMarco());
//             handleClose();
//           }}
//         >
//           <i
//             className={
//               token ===
//               "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTViOTI0ZjYwNTAwMTkzN2Q0NmIiLCJpYXQiOjE3MDgzMzI1NTgsImV4cCI6MTcwOTU0MjE1OH0.E5teFLHLRXoT_qjcnO0crOO1fPEFQnonpSJswoJD-LY"
//                 ? "bi bi-person-circle fs-4 me-2 text-primary"
//                 : "bi bi-person-circle fs-4 me-2"
//             }
//           ></i>{" "}
//           Marco Brunetti
//         </Modal.Body>
//         <Modal.Body
//           className="d-flex align-items-center modal-hoverable"
//           onClick={() => {
//             dispatch(actionActiveNicolo());
//             handleClose();
//           }}
//         >
//           <i
//             className={
//               token ===
//               "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ3MTY4MTc2YTY0YjAwMTllZjE5ZDYiLCJpYXQiOjE3MDg1OTQ4MTcsImV4cCI6MTcwOTgwNDQxN30.DWoqHGpxkg6gv0A1NJW-N6WbzV0aGQ43Y0gsc4cnj_M"
//                 ? "bi bi-person-circle fs-4 me-2 text-primary"
//                 : "bi bi-person-circle fs-4 me-2"
//             }
//           ></i>{" "}
//           Nicolò di Giacinto
//         </Modal.Body>
//         <Modal.Body
//           className="d-flex align-items-center modal-hoverable"
//           onClick={() => {
//             dispatch(actionActiveSalvatore());
//             handleClose();
//           }}
//         >
//           <i
//             className={
//               token ===
//               "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ3MTUxNTc2YTY0YjAwMTllZjE5ZDIiLCJpYXQiOjE3MDg1OTQ0NTQsImV4cCI6MTcwOTgwNDA1NH0.6OvRL-RvHRYiA5IXrVjtxS6IBZMmL_oqwXyKcMNMPUo"
//                 ? "bi bi-person-circle fs-4 me-2 text-primary"
//                 : "bi bi-person-circle fs-4 me-2"
//             }
//           ></i>{" "}
//           Salavatore Malanchino
//         </Modal.Body>
//         <Modal.Body
//           className="d-flex align-items-center modal-hoverable"
//           onClick={() => {
//             dispatch(actionActiveAdriano());
//             handleClose();
//           }}
//         >
//           <i className="bi bi-person-circle fs-4 me-2"></i> Adriano Bruzzese
//         </Modal.Body>
//       </Modal>
//     </div>
//     </Container>
//       </Navbar>

//   );
// }

// export default NavbarComponent;

// VERSIONE PRECEDENTE COMMENTATA PER SICUREZZA
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Logo from '../assets/img/LInkedinlogo.png';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import {
  actionActiveAdriano,
  actionActiveFabio,
  actionActiveMarco,
  actionActiveNicolo,
  actionActiveSalvatore,
  actionUpdateNavbarInput,
} from '../redux/actions';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function NavbarComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const location = useLocation().pathname;
  console.log(location);

  const dispatch = useDispatch();

  const token = useSelector((state) => state.activeUser.token);

  const navbarSearch = useSelector((state) => state.jobsFetch.navbarInput);

  return (
    <Navbar bg="light" expand="lg" sticky="top" id="navbar">
      <Container fluid>
        <Navbar.Brand href="#Logo1">
          <Image
            src={Logo}
            S
            width="43px"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <InputGroup className="me-auto my-2 my-lg-0" id="search-input-group">
          <Form.Control
            type="text"
            placeholder="Search"
            aria-label="Search"
            style={{
              backgroundColor: '#edf3f8',
              borderColor: '#e0f7fa',
              borderRadius: '5px',
            }}
            value={navbarSearch}
            onChange={(e) => {
              dispatch(actionUpdateNavbarInput(e.target.value));
            }}
          />
          <i
            className="bi bi-search search-icon"
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: '1000',
            }}
          ></i>
        </InputGroup>
        {/* hamburger menu per md navbar */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto" navbarScroll>
            <Nav.Link className="d-lg-none">
              <Link to={'/'} className="nav-link p-0">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link href="#network" className="d-lg-none">
              My Network
            </Nav.Link>
            <Nav.Link className="d-lg-none">
              <Link to={'/jobs'} className="nav-link p-0">
                Jobs
              </Link>
            </Nav.Link>
            <Nav.Link href="#network" className="d-lg-none">
              Messaging
            </Nav.Link>
            <Nav.Link href="#network" className="d-lg-none">
              Notifications
            </Nav.Link>

            <div className="d-none d-lg-flex align-items-center">
              <Nav.Link href="#home" className="nav-icon d-none d-lg-block">
                <Link to={'/'} className="nav-link p-0">
                  <i className="bi bi-house-fill"></i>{' '}
                  <div className="nav-label">Home</div>{' '}
                </Link>
              </Nav.Link>
              <Nav.Link href="https://www.youtube.com/watch?v=T0nWNsaa2vk" className="nav-icon d-none d-lg-block">
                <i className="bi bi-people-fill"></i>
                <div className="nav-label">My Network</div>
              </Nav.Link>
              <Nav.Link href="#jobs" className="nav-icon d-none d-lg-block">
                <Link to={'/jobs'} className="nav-link p-0">
                  <i className="bi bi-briefcase-fill"></i>{' '}
                  <div className="nav-label">Jobs</div>{' '}
                </Link>
              </Nav.Link>
              <Nav.Link
                href="https://www.youtube.com/watch?v=T0nWNsaa2vk"
                className="nav-icon d-none d-lg-block"
              >
                <i className="bi bi-chat-dots-fill"></i>{' '}
                <div className="nav-label">Messaging</div>
              </Nav.Link>
              <Nav.Link href="https://www.youtube.com/watch?v=T0nWNsaa2vk" className="nav-icon d-none d-lg-block">
                <i className="bi bi-bell-fill"></i>
                <div className="nav-label">Messaging</div>
              </Nav.Link>
              <NavDropdown
                title={
                  <div className="nav-icon-dropdown mt-2">
                    <img src="https://picsum.photos/200/300" alt="Avatar" />
                    <span className="nav-dropdown-text">Me ▼</span>
                  </div>
                }
                id="navbarScrollingDropdown"
                align="end"
              >
                {' '}
                <NavDropdown.Item href="#gestioni-profili">
                  Profile Settings
                </NavDropdown.Item>
                <NavDropdown.Item>
                  {' '}
                  <Link to={'/profile'} className="nav-link p-0">
                    Account
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleShow}>
                  Switch User
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>

        {/* Modale per user switch */}
        <div>
          {' '}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Select the user to login</Modal.Title>
            </Modal.Header>
            <Modal.Body
              className="d-flex align-items-center modal-hoverable"
              onClick={() => {
                dispatch(actionActiveFabio());
                handleClose();
              }}
            >
              <i
                className={
                  token ===
                  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTFlNjI0ZjYwNTAwMTkzN2Q0NTciLCJpYXQiOjE3MDgzMzE0OTUsImV4cCI6MTcwOTU0MTA5NX0.KHAcN2ZmdInZibSsuN6-ccclj1K1u8EHV-HfobzUCsg'
                    ? 'bi bi-person-circle fs-4 me-2 text-primary'
                    : 'bi bi-person-circle fs-4 me-2'
                }
              ></i>{' '}
              Fabio Gilardi
            </Modal.Body>
            <Modal.Body
              className="d-flex align-items-center modal-hoverable"
              onClick={() => {
                dispatch(actionActiveMarco());
                handleClose();
              }}
            >
              <i
                className={
                  token ===
                  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTViOTI0ZjYwNTAwMTkzN2Q0NmIiLCJpYXQiOjE3MDgzMzI1NTgsImV4cCI6MTcwOTU0MjE1OH0.E5teFLHLRXoT_qjcnO0crOO1fPEFQnonpSJswoJD-LY'
                    ? 'bi bi-person-circle fs-4 me-2 text-primary'
                    : 'bi bi-person-circle fs-4 me-2'
                }
              ></i>{' '}
              Marco Brunetti
            </Modal.Body>
            <Modal.Body
              className="d-flex align-items-center modal-hoverable"
              onClick={() => {
                dispatch(actionActiveNicolo());
                handleClose();
              }}
            >
              <i
                className={
                  token ===
                  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ3MTY4MTc2YTY0YjAwMTllZjE5ZDYiLCJpYXQiOjE3MDg1OTQ4MTcsImV4cCI6MTcwOTgwNDQxN30.DWoqHGpxkg6gv0A1NJW-N6WbzV0aGQ43Y0gsc4cnj_M'
                    ? 'bi bi-person-circle fs-4 me-2 text-primary'
                    : 'bi bi-person-circle fs-4 me-2'
                }
              ></i>{' '}
              Nicolò di Giacinto
            </Modal.Body>
            <Modal.Body
              className="d-flex align-items-center modal-hoverable"
              onClick={() => {
                dispatch(actionActiveSalvatore());
                handleClose();
              }}
            >
              <i
                className={
                  token ===
                  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ3MTUxNTc2YTY0YjAwMTllZjE5ZDIiLCJpYXQiOjE3MDg1OTQ0NTQsImV4cCI6MTcwOTgwNDA1NH0.6OvRL-RvHRYiA5IXrVjtxS6IBZMmL_oqwXyKcMNMPUo'
                    ? 'bi bi-person-circle fs-4 me-2 text-primary'
                    : 'bi bi-person-circle fs-4 me-2'
                }
              ></i>{' '}
              Salvatore Malanchino
            </Modal.Body>
            <Modal.Body
              className="d-flex align-items-center modal-hoverable"
              onClick={() => {
                dispatch(actionActiveAdriano());
                handleClose();
              }}
            >
              <i
                className={
                  token ===
                  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ3ODQ5Zjg5Y2Y4ZDAwMTljZjRiMmQiLCJpYXQiOjE3MDg2MjMwMDgsImV4cCI6MTcwOTgzMjYwOH0.noGvnA7R1Iq-Tg3afamy-0ASlh9WWiUIDAMYG0anwsE'
                    ? 'bi bi-person-circle fs-4 me-2 text-primary'
                    : 'bi bi-person-circle fs-4 me-2'
                }
              ></i>{' '}
              Adriano Bruzzese
            </Modal.Body>
          </Modal>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
