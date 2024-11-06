import { useEffect, useState } from 'react';
import coursesData from '../../src/courses.json';

interface Course {
  id: number;
  url: string;
  customCupon: string | null;
  defaultCupon: string;
}

const useCourseUrl = (id: number): string | null => {
  const [courseUrl, setCourseUrl] = useState<string | null>(null);

  useEffect(() => {
    const course = coursesData.find((course: Course) => course.id === id);

    if (course) {
      const couponCode = course.customCupon || course.defaultCupon;
      const urlWithCoupon = `${course.url}?couponCode=${couponCode}`;
      setCourseUrl(urlWithCoupon);
    } else {
      setCourseUrl(null);
    }
  }, [id]);

  return courseUrl;
};

export default useCourseUrl;
