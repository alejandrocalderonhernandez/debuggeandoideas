import React from 'react';
import CourseCardComponent from '../cardCourse/CourseCardComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from '@tanstack/react-query';

interface Course {
  id: number;
  name: string;
  description: string;
  nivel: string;
  img: string;
  url: string;
  borderColor?: string; // Opcional si no siempre tiene valor
}

const fetchCourses = async (): Promise<Course[]> => {
  const response = await fetch('https://api.jsonbin.io/v3/b/67fc43978960c979a5846e88');
  const data = await response.json();
  return data.record; // Devuelve los cursos dentro de "record"
};

const ContainerCourseCardsContainer: React.FC = () => {
  const { data: courses = [], isLoading } = useQuery({
    queryKey: ['courses'],
    queryFn: fetchCourses,
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
  });

  
  return (
    <div className="container my-4">
      <br />
      {isLoading ? (
        <div className="text-center">
          <FontAwesomeIcon icon={faSpinner} spin size="3x" />
          <p>Loading courses...</p>
        </div>
      ) : (
        <div className="row">
          {courses.map((course, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <CourseCardComponent
                name={course.name}
                description={course.description}
                nivel={course.nivel}
                img={course.img}
                url={course.url}
                borderColor={course.borderColor || "#000000"}
                id={course.id || 0}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContainerCourseCardsContainer;
