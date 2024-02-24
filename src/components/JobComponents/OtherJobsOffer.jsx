import Card from 'react-bootstrap/Card';

import CloseButton from 'react-bootstrap/CloseButton';
const OtherJobsOffer = () => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="border-bottom">
          <div>
            <p className="fw-bold m-0">Altre offerte di lavoro per te</p>
            <p className="text-secondary">
              Sulla base del tuo profilo e della tua cronologia delle ricerche{' '}
            </p>
          </div>
          <div className="d-flex justify-content-between  ">
            <div className="d-flex">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY4PolCRZG_SUGHzrbMdWczrLPDLPFjmAlXQ&usqp=CAU"
                alt=""
                style={{ height: '3em' }}
                className="rounded-3 me-2  "
              />
              <div>
                <div>
                  <a href="" className="fw-bold text-decoration-none ">
                    CAMERIERE AI PIANI
                  </a>
                  <p className="m-0">job Italia Spa Agenzia per il lavoro</p>
                  <p className="text-secondary m-0">
                    Taormina, Sicilia, Italia (in sede)
                  </p>
                </div>

                <div>
                  <p className="d-flex align-items-center text-secondary m-0">
                    <a className="text-success" href="">
                      <i className="bi bi-check2-circle fs-3 me-2"></i>
                    </a>
                    Solitamente le candidature avvengono esaminatre entro 2
                    giorni
                  </p>
                </div>
                <div>
                  <p className="text-secondary">
                    Promosso ·
                    <span className="text-success me-1 fw-semibold  ">
                      10 candidati ·
                    </span>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHHGP6iihsrdqVz2wX_MUZGdv3-RY7o7Q9dA&usqp=CAU"
                      alt=""
                      style={{ height: '1em' }}
                      className="me-1"
                    />
                    candidatura semplice
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
          Cerca altre offerte di lavoro <i className="bi bi-arrow-right"></i>
        </a>
      </Card.Footer>
    </Card>
  );
};
export default OtherJobsOffer;
