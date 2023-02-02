import React from 'react';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const Error404 = () => {
  const errorAnimation = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
  });

  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", margin: "-100px"}}>
      <animated.div style={errorAnimation}>
        <FontAwesomeIcon icon={faExclamationTriangle} size="5x" color="#FFC107" style={{marginBottom: "20px"}} />
        <h1 style={{fontSize: "60px", color: "#FF4136"}}>404</h1>
        <p style={{fontSize: "24px", marginTop: "20px", color: "#FF4136"}}>La página que buscas no ha sido encontrada.</p>
      </animated.div>
    </div>
  );
};

export default Error404;