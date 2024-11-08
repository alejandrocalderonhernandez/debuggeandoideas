import { useEffect, useState } from 'react';

interface Course {
  id: number;
  url: string;
  customCupon: string | null;
  defaultCupon: string;
}

const useCourseUrl = (id: number): string | null => {
  const [courseUrl, setCourseUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchCoupons = async () => {
      try {
        const response = await fetch('https://api.jsonbin.io/v3/b/672cef2cacd3cb34a8a47a22');
        const data = await response.json();
        const coursesData: Course[] = data.record;

        const course = coursesData.find((course: Course) => course.id === id);
        if (course) {
          const couponCode = course.customCupon == null ? course.defaultCupon : course.customCupon;
          const urlWithCoupon = `${course.url}?couponCode=${couponCode}`;
          setCourseUrl(urlWithCoupon);
        } else {
          setCourseUrl(null);
        }
      } catch (error) {
        console.error('Error fetching coupons:', error);
        setCourseUrl(null);
      }
    };

    fetchCoupons();
  }, [id]);

  return courseUrl;
};

export default useCourseUrl;
