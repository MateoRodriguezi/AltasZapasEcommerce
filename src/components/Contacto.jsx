import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHardHat, faToolbox } from '@fortawesome/free-solid-svg-icons';

const Contacto = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', margin: '-90px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{
          background: '#FFA728',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          animation: 'shine 3s ease-out infinite',
        }}>Página en construcción</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <FontAwesomeIcon icon={faHardHat} size="4x" className="icon" style={{ color: '#FFA728', marginRight: '10px' }} />
          <FontAwesomeIcon icon={faToolbox} size="4x" className="icon" style={{ color: '#FFA728' }} />
        </div>
      </div>
    </div>
  );
};

export default Contacto;