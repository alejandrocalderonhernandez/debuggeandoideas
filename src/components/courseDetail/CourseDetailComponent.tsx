import React, { useEffect, useState } from 'react';
import { useLocation, useParams, Navigate } from 'react-router-dom';
import './CourseDetailComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Course } from '../../types/Course';


const fetchCourses = async (): Promise<Course[]> => {
  const response = await fetch('https://api.jsonbin.io/v3/b/67fc43978960c979a5846e88');
  const data = await response.json();
  return data.record;
};

const CourseDetailComponent: React.FC = () => {
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(location.state?.course || null);
  const [loading, setLoading] = useState<boolean>(!course);

  useEffect(() => {
    if (!course && id) {
      const loadCourse = async () => {
        try {
          const allCourses = await fetchCourses();
          const found = allCourses.find(c => c.id === parseInt(id, 10));
  
          if (found) {
            const couponCode = found.customCupon ?? found.defaultCupon;
            const urlWithCoupon = `${found.url}?couponCode=${couponCode}`;
          
            const enrichedCourse: Course = {
              ...found,
              url: urlWithCoupon,
            };
  
            setCourse(enrichedCourse);
          } else {
            setCourse(null);
          }
        } catch (error) {
          console.error("Error fetching course:", error);
          setCourse(null);
        } finally {
          setLoading(false);
        }
      };
      loadCourse();
    }
  }, [course, id]);
  

  if (loading) {
    return <p className="text-center mt-5">Cargando curso...</p>;
  }

  if (!course) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="course-detail">
      <div className="course-cover">
        <img src={course.cover || course.img} alt="Course Cover" className="cover-image" />
      </div>

      <div className="course-content">
        <h1 className="course-title">{course.name}</h1>
        <p className="course-description">{course.fullDescription}</p>

        <h2 className="topics-title">¿Qué aprenderás?</h2>
        <ul className="topics-list">
          {Array.isArray(course.topics) && course.topics.length > 0 ? (
            course.topics.map((topic, index) => <li key={index}>{topic}</li>)
          ) : (
            <li>No hay temas disponibles</li>
          )}
        </ul>



        <button
          className="buy-button"
          onClick={() => window.open(course.url, '_blank')}
        >
          <FontAwesomeIcon icon={faShoppingCart} className="icon" /> Comprar con descuento en Udemy
        </button>
      </div>
    </div>
  );
};

export default CourseDetailComponent;
