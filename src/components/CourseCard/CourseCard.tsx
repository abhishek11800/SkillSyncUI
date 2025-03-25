import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { showSuccessToast } from "../../utils/toastUtils";
import "./CourseCard.css";

interface CourseCardProps {
  course: {
    id: number;
    title: string;
    skills: { title: string }[];
    duration: number;
    description: string;
  };
  isEnrolled: boolean;
  onEnroll: () => void;
  onComplete?: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, isEnrolled, onEnroll, onComplete }) => {
    const [showDescription, setShowDescription] = useState(false);
    const [status, setStatus] = useState(isEnrolled ? "Ongoing" : "");

    const handleEnroll = () => {
        onEnroll();
        showSuccessToast(`You have successfully enrolled for the course: ${course.title}`);
    };

   const handleComplete = () => {
    setStatus("Completed");
    if (onComplete) {
      onComplete();
      showSuccessToast(`You have successfully Completed the course: ${course.title}`);
    }
  };

  const visibleSkills =
    course.skills.length > 4
      ? course.skills.slice(0, 4).map((s) => s.title).join(", ") + " ..."
      : course.skills.map((s) => s.title).join(", ");

  return (
    <div className="course-card">
      <div className="course-header">
        <h3 className="course-title">{course.title}</h3>
        {!isEnrolled && (
          <button className="info-button" onClick={() => setShowDescription(true)}><FaInfoCircle size={20} /></button>
        )}
      </div>

      {status && <div className={`badge ${status.toLowerCase()}`}>{status}</div>}

      <p className="course-skills">{visibleSkills}</p>
      <p className="course-duration">Duration: {course.duration} days</p>

      {!isEnrolled ? (
        <button className="course-button enroll" onClick={handleEnroll}>
          Enroll
        </button>
      ) : (
        status === "Ongoing" && (
          <button className="course-button complete" onClick={handleComplete}>
            Complete
          </button>
        )
      )}
      {showDescription && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <button className="close-button" onClick={() => setShowDescription(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseCard;
