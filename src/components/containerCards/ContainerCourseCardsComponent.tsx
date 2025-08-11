import React from 'react';
import CourseCardComponent from '../cardCourse/CourseCardComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from '@tanstack/react-query';
import { Course } from '../../types/Course';
import './ContainerCourseCardsContainer.css';

const fetchCourses = async (): Promise<Course[]> => {
  const response = await fetch('https://api.jsonbin.io/v3/b/67fc43978960c979a5846e88');
  const data = await response.json();
  return data.record;
};

const ContainerCourseCardsContainer: React.FC = () => {
  const { data: courses = [], isLoading } = useQuery({
    queryKey: ['courses'],
    queryFn: fetchCourses,
    staleTime: 1000 * 60 * 60 * 24,
  });

  return (
    <div className="courses-container">
      {isLoading ? (
        <div className="loading-state">
          <FontAwesomeIcon icon={faSpinner} spin size="3x" className="loading-spinner" />
          <p className="loading-text">Cargando cursos increíbles...</p>
        </div>
      ) : (
        <div className="courses-grid">
          {courses.map((course) => {
            const couponCode = course.customCupon ?? course.defaultCupon;
            const urlWithCoupon = `${course.url}?couponCode=${couponCode}`;

            return (
              <div className="course-item" key={course.id}>
                <CourseCardComponent
                  {...course}
                  url={urlWithCoupon}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ContainerCourseCardsContainer;