import React from 'react';
import CourseCardComponent from '../cardCourse/CourseCardComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from '@tanstack/react-query';
import { Course } from '../../types/Course';


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
    <div className="container my-4">
      <br />
      {isLoading ? (
        <div className="text-center">
          <FontAwesomeIcon icon={faSpinner} spin size="3x" />
          <p>Loading courses...</p>
        </div>
      ) : (
        <div className="row">
          {courses.map((course) => {
            const couponCode = course.customCupon ?? course.defaultCupon;
            const urlWithCoupon = `${course.url}?couponCode=${couponCode}`;

            return (
              <div className="col-md-4 mb-4" key={course.id}>
                <CourseCardComponent
                  name={course.name}
                  description={course.description}
                  nivel={course.nivel}
                  img={course.img}
                  url={urlWithCoupon}
                  borderColor={course.borderColor || "#000000"}
                  id={course.id}
                  fullDescription={course.fullDescription}
                  cover={course.cover}
                  topics={course.topics}
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