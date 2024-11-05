import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './FooterComponent.module.css';

const FooterComponent: React.FC = () => {
  return (
    <footer className={styles['footer-custom']}>
      <Container>
        <Row className="py-3">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <span>&copy; {new Date().getFullYear()} Debuggeando Ideas. Todos los derechos reservados.</span>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="#privacy" className="footer-link me-3">Política de Privacidad</a>
            <a href="#terms" className="footer-link">Términos y Condiciones</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
