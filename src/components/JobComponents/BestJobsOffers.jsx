import Card from 'react-bootstrap/Card';

import CloseButton from 'react-bootstrap/CloseButton';
const BestJobsOffer = () => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="border-bottom">
          <div>
            <p className="fw-bold m-0">
              Le principali offerte di lavoro per te
            </p>
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
                <p>
                  1 mese fa ·
                  <span className="text-success fw-semibold ">1 candidato</span>
                </p>
              </div>
            </div>
            <CloseButton aria-label="Hide" />
          </div>
        </div>
      </Card.Body>
      <Card.Footer className="text-muted text-center ">
        <a className="text-decoration-none text-secondary" href="">
          Mostra tutte le attività <i className="bi bi-arrow-right"></i>
        </a>
      </Card.Footer>
    </Card>
  );
};
export default BestJobsOffer;
