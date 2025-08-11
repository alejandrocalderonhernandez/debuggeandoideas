import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Course } from '../../types/Course';
import './CourseCardComponent.css';

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

  // CSS custom properties para usar borderColor dinámicamente
  const cardStyle = {
    '--border-color': borderColor,
    '--border-color-40': `${borderColor}40`,
    '--border-color-60': `${borderColor}60`,
    '--border-color-80': `${borderColor}80`,
    '--border-glow': `${borderColor}40`,
    '--overlay-gradient': `linear-gradient(135deg, ${borderColor}20 0%, transparent 50%, ${borderColor}10 100%)`,
    '--badge-gradient': `linear-gradient(135deg, ${borderColor}30, ${borderColor}50)`,
    '--button-gradient': `linear-gradient(135deg, ${borderColor}, ${borderColor}dd)`,
    '--button-shadow': `${borderColor}50`,
    '--button-hover-bg': `${borderColor}20`,
    border: `2px solid ${borderColor}`,
  } as React.CSSProperties;

  return (
    <div
      className="course-card text-white"
      style={cardStyle}
    >
      <div className="image-container">
        <img 
          src={img} 
          className="card-image" 
          alt={name}
        />
        <div className="image-overlay"></div>
      </div>

      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-description">{description}</p>
        
        <div className="level-badge">
          Nivel: {nivel}
        </div>

        <div className="button-container">
          <a
            href={url}
            className="primary-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="button-glow"></div>
            <FontAwesomeIcon icon={faTag} /> Obtener cupón
          </a>
          
          <Link
            to={`/course/${id}`}
            state={{ course }}
            className="secondary-button"
          >
            <FontAwesomeIcon icon={faInfoCircle} /> Más información
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCardComponent;