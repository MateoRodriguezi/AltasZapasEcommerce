import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHardHat, faToolbox } from '@fortawesome/free-solid-svg-icons';

import './Contacto.css'

const Contacto = () => {
  return (
    <div className="d-flex justify-content-center align-items-center h-100 mt-5">
      <div className="d-flex flex-column align-items-center">
        <h1 className="construction-title">Página en construcción</h1>
        <div className="d-flex justify-content-center">
          <FontAwesomeIcon icon={faHardHat} size="4x" className="icon mr-3" style={{ color: '#FFA728' }} />
          <FontAwesomeIcon icon={faToolbox} size="4x" className="icon" style={{ color: '#FFA728' }} />
        </div>
      </div>
    </div>
  );
};

export default Contacto;