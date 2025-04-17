import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Course } from '../../types/Course';

const CourseCardComponent: React.FC<Course> = ({
  id,
  name,
  description,
  fullDescription,
  nivel,
  img,
  url,
  borderColor,
  cover,
  topics,
}) => {

  const course = {
    id,
    name,
    description,
    fullDescription,
    nivel,
    img,
    url,
    borderColor,
    cover,
    topics,
  };

  return (
    <div
      className="card text-white mb-4"
      style={{
        border: `2px solid ${borderColor}`,
        backgroundColor: '#343a40',
        maxWidth: '18rem',
        height: '33rem',
        overflow: 'hidden',
      }}
    >
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small>Nivel: {nivel}</small>
        </p>

        <div className="d-flex flex-column">
          <a
            href={url}
            className="btn btn-primary mb-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTag} /> Obtener cupón
          </a>
          <Link
            to={`/course/${id}`}
            state={{ course }}
            className="btn btn-secondary"
          >
            <FontAwesomeIcon icon={faInfoCircle} /> Más información
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCardComponent;
