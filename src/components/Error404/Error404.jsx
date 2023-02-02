import React from 'react';

import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import './Error404.css'

const Error404 = () => {
  const errorAnimation = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
  });

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
      <Row>
        <Col>
          <animated.div style={errorAnimation}>
            <FontAwesomeIcon icon={faExclamationTriangle} size="5x" color="#FFC107" className="mb-3" />
            <h1 className="error-header">404</h1>
            <p className="error-message">La página que buscas no ha sido encontrada.</p>
          </animated.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Error404;