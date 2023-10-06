import { Card, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/courses", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setCourses(data.courses);
      });
  }, []);
  return (
    <div>
      <Typography textAlign={"center"} variant="h3">
        Courses
      </Typography>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {courses ? (
          courses.map((course) => {
            return (
              <Card
                style={{ width: 200, padding: 20, margin: 20 }}
                key={course._id}
                variant="outlined"
              >
                <Typography>{course.title}</Typography>
                <Typography>{course.description}</Typography>
                <Typography>{course.price}</Typography>
              </Card>
            );
          })
        ) : (
          <p>something</p>
        )}
      </div>
    </div>
  );
};

export default Courses;
