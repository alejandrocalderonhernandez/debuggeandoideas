import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

interface CourseProps {
  name: string;
  description: string;
  nivel: string;
  img: string;
  url: string;
  borderColor: string;
}

const CourseCardComponent: React.FC<CourseProps> = ({
  name,
  description,
  nivel,
  img,
  url,
  borderColor,
}) => {
  return (
    <div
      className="card text-white mb-4"
      style={{
        border: `2px solid ${borderColor}`,
        backgroundColor: '#343a40',
        maxWidth: '18rem',
        height: '33rem', // Tamaño fijo de altura
        overflow: 'hidden', // Oculta el contenido que sobrepasa el área
      }}
    >
      {/* Imagen en la parte superior */}
      <img src={img} className="card-img-top" alt={name} />

      {/* Contenido de la tarjeta */}
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small>Nivel: {nivel}</small>
        </p>

        {/* Botones con íconos, uno debajo del otro */}
        <div className="d-flex flex-column">
          <a
            href={`${url}?coupon=YOUR_COUPON_CODE`}
            className="btn btn-primary mb-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTag} /> Obtener cupón
          </a>
          <a
            href={url}
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInfoCircle} /> Más información
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCardComponent;
