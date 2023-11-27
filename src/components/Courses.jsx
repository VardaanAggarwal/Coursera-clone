import { Card, Typography, Button, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { courseLoadingState } from "../store/selectors/course";
const Courses = () => {
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
        window.location.reload();
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/courses", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => res.data)
      .then((data) => {
        // console.log(data);
        setCourses(data.courses);
      });
  }, []);

  return (
    <div>
      <Typography textAlign={"center"} variant="h3">
        Courses
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {courses ? (
          courses.map((course) => {
            return (
              <div key={course._id}>
                <Card
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    maxWidth: "25vw",
                    minWidth:"25vw",
                    maxHeight: "72vh",
                    minHeight:"60vh",
                    padding: 20,
                    margin: 20,
                    borderRadius: "40px",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                  variant="outlined"
                >
                  <img
                    style={{ maxWidth: "25vw", marginBottom: "5px" , maxHeight:"25vh"}}
                    src={course.imageLink}
                    alt=""
                  />
                  <p style={{ marginBottom: "5px" , fontWeight:"bolder" , fontSize:"23px"}}>
                    {course.title}
                  </p>
                  <p
                    style={{ marginBottom: "5px" }}
                
                  >
                    {course.description}
                  </p>
                  <p
                    style={{ marginBottom: "5px" , fontWeight:"bolder"}}
                   
                  >
                    Rs. {course.price}
                  </p>
                  <Button
                    onClick={() => navigate("/course/" + course._id)}
                    variant="contained"
                    style={{ marginRight: "10px", marginBottom:"5px" }}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => {
                      handleCourseDelete(course._id);
                      navigate("/courses");
                    }}
                    variant="contained"
                    style={{ marginRight: "10px" }}
                  >
                    Delete
                  </Button>
                </Card>
              </div>
            );
          })
        ) : (
          <CircularProgress color="success" />
        )}
      </div>
    </div>
  );
};

export default Courses;
