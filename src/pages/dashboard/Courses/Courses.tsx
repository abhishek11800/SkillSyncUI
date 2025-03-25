import React, { useEffect, useState } from "react";
import api from "../../../config/axios.config";
import CourseCard from "../../../components/CourseCard/CourseCard";
import AlertBox from "../../../components/AlertBox/AlertBox";
// import { FaExclamationCircle } from "react-icons/fa";
import "./Courses.css"

const Courses: React.FC = () => {
  const [courses, setCourses] = useState<any[]>([]);
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);
  
  useEffect(() => {
    api.get("/courses")
      .then((res) => {
        // console.log("Courses Data:", res.data);
        setCourses(res.data.data || []); // Ensure it's an array
      })
      .catch((error) => console.error("Failed to fetch courses:", error));
  }, []);

  const enrollCourse = (course: any) => {
    setEnrolledCourses([...enrolledCourses, { ...course, isCompleted: false }]);
  };

  const completeCourse = (courseId: number) => {
    setEnrolledCourses(
      enrolledCourses.map((course) =>
        course.id === courseId ? { ...course, isCompleted: true } : course
      )
    );
  };

  return (
    <div className="p-4">
      <h1 className="EnrolledCourse"><b>Enrolled Courses</b></h1>
      {enrolledCourses.length === 0 && <AlertBox message="You are not enrolled in any courses" />}
      <div className="courses-container">
        {enrolledCourses.map((course) => (
          <CourseCard key={course.id} course={course} isEnrolled onEnroll={() => {}} onComplete={() => completeCourse(course.id)} />
        ))}
      </div>
  
      <h1 className="AvailableCourse"><b>Available Courses</b></h1>
      <div className="courses-container">
        {courses
          .filter((c) => !enrolledCourses.some((e) => e.id === c.id))
          .map((course) => (
            <CourseCard key={course.id} course={course} isEnrolled={false} onEnroll={() => enrollCourse(course)} onComplete={() => {}} />
          ))}
      </div>
    </div>
  );
  
};

export default Courses;