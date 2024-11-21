import React from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetailComponent.css';
import courses from '../../courses.json'; // Asegúrate de que la ruta sea correcta
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import useCourseUrl from '../../hooks/useCourseUrl';

// Definir la interfaz para un curso individual


const CourseDetailComponent: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Obtén el ID de los parámetros de la URL
  const course = courses.find((course) => course.id === parseInt(id || '0'));

  // Usa el hook para obtener la URL del curso con el cupón
  const courseUrl = useCourseUrl(parseInt(id || '0'));

  if (!course) {

    return <p>Curso no encontrado</p>;
  }

  return (
    <div className="course-detail">
      {/* Portada de curso */}
      <div className="course-cover">
        <img
          src={course.cover}
          alt="Course Cover"
          className="cover-image"
        />
      </div>
      
      {/* Contenido del curso */}
      <div className="course-content">
        <h1 className="course-title">{course.name}</h1>
        <p className="course-description">{course.fullDescription}</p>
        
        {/* Lista de tópicos */}
        <h2 className="topics-title">¿Qué aprenderás?</h2>
        <ul className="topics-list">
          {course.topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>

        {/* Botón de compra */}
        <button 
          className="buy-button" 
          onClick={() => courseUrl && window.open(courseUrl, '_blank')}
        >
          <FontAwesomeIcon icon={faShoppingCart} className="icon" /> Comprar con descuento en Udemy
        </button>
      </div>
    </div>
  );
};

export default CourseDetailComponent;