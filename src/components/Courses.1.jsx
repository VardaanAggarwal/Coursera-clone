import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { courseLoadingState } from "../store/selectors/course";

export const Courses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState(null);
  const isCourseLoading = useRecoilValue(courseLoadingState);
  const handleCourseDelete = (courseId) => {
    axios
      .delete(`http://localhost:3000/admin/courses/${courseId}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => res.data)
      .then((data) => {
        const newCourses = courses.filter((course) => course._id == courseId);
        setCourses(newCourses);
      });
  };
};
