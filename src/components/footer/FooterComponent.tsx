import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './FooterComponent.module.css';

const FooterComponent: React.FC = () => {
  return (
    <footer className={styles['footer-custom']}>
      <Container>
        <div className={styles['footer-text']}>
          &copy; {new Date().getFullYear()} Debuggeando Ideas. Todos los derechos reservados.
        </div>

        {/* Iconos de redes sociales */}
        <div className={styles['footer-icons']}>
          <a href="https://www.youtube.com/@debuggeandoideas1756" target="_blank" rel="noopener noreferrer" className={styles['footer-link']}>
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="https://www.linkedin.com/in/rene-alejandro-calderón-hernández-1bb0a216b" target="_blank" rel="noopener noreferrer" className={styles['footer-link']}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:debuggeandoideas@gmail.com" className={styles['footer-link']}>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>

        
      </Container>
    </footer>
  );
};

export default FooterComponent;
