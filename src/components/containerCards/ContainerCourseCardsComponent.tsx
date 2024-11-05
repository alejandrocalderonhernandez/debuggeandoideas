import React from 'react';
import CourseCardComponent from '../cardCourse/CourseCardComponent';
import courses from '../../courses.json';

const ContainerCourseCardsContainer: React.FC = () => {
  return (
    <div className="container my-4">
      <div className="row">
        {courses.map((course, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <CourseCardComponent
              name={course.name}
              description={course.description}
              nivel={course.nivel}
              img={course.img}
              url={course.url}
              borderColor={course.borderColor}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContainerCourseCardsContainer;
