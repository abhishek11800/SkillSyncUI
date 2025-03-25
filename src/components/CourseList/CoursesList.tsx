import React from "react";
import CourseCard from "../CourseCard/CourseCard";
import "./CoursesList.css"; // Import CSS

interface CoursesListProps {
  courses: any[];
  enrolledCourses: number[];
  onEnroll: (courseId: number) => void;
  onComplete: (courseId: number) => void;
}

const CoursesList: React.FC<CoursesListProps> = ({ courses, enrolledCourses, onEnroll, onComplete }) => {
  return (
    <div className="courses-container">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          isEnrolled={enrolledCourses.includes(course.id)}
          onEnroll={() => onEnroll(course.id)}
          onComplete={() => onComplete(course.id)}
        />
      ))}
    </div>
  );
};

export default CoursesList;
