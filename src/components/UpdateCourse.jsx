import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  Typography,
  TextField,
  Button,
  Grid,
  Skeleton,
} from "@mui/material";

const UpdateCourse = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/admin/course/${courseId}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => res.data)
      .then((data) => {
        setCourse(data.course);
        setIsLoading(false);
      });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        margin: "40px 100px",
      }}
    >
      {isLoading ? (
        <div>
          {/* For variant="text", adjust the height via font-size */}
          <Skeleton animation="wave" variant="text" sx={{ fontSize: "1rem" }} />
          <br />
          {/* For other variants, adjust the size with `width` and `height` */}
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
          <br />
          <br />
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={210}
            height={60}
          />
          <br />
          <br />
          <Skeleton
            animation="wave"
            variant="rounded"
            width={210}
            height={60}
          />
        </div>
      ) : (
        <Grid container>
          <Grid item lg={8} md={12} sm={12}>
            <UpdateCard course={course} setCourse={setCourse} />
          </Grid>
          <Grid item lg={4} md={12} sm={12}>
            <CourseCard course={course} />
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export const CourseCard = ({ course }) => {
  return (
    <div>
      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "400px",
          maxHeight: "400px",
          padding: 20,
          margin: 20,
          borderRadius: "40px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
        variant="outlined"
      >
        <img style={{ maxWidth: "400px" }} src={course.imageLink} alt="" />
        <Typography variant="h5">{course.title}</Typography>
        <Typography variant="subtitle1">{course.description}</Typography>
        <Typography variant="subtitle2">Rs. {course.price}</Typography>
      </Card>
    </div>
  );
};

export const UpdateCard = ({ course, setCourse }) => {
  const [title, setTitle] = useState(course.title);
  const [description, setDescription] = useState(course.description);
  const [price, setPrice] = useState(course.price);
  const [imageLink, setImageLink] = useState(course.imageLink);

  const handleUpdateCourse = () => {
    setCourse((prev) => ({ ...prev, title, description, price, imageLink }));
    axios
      .put(
        "http://localhost:3000/admin/courses/" + course._id,
        {
          title,
          description,
          price,
          imageLink,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <Card variant="outlined" style={{ width: 400, padding: 40 }}>
      <Typography variant="h5" style={{ fontWeight: "bold" }}>
        Update Course
      </Typography>
      <br />
      <br />
      <TextField
        fullWidth
        value={title}
        variant="outlined"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <br />
      <TextField
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        fullWidth
        id="outlined-basic"
        variant="outlined"
      />
      <br />
      <br />
      <TextField
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        fullWidth
        id="outlined-basic"
        variant="outlined"
      />
      <br />
      <br />
      <TextField
        value={imageLink}
        onChange={(e) => {
          setImageLink(e.target.value);
        }}
        fullWidth
        id="outlined-basic"
        variant="outlined"
      />
      <br />
      <br />
      <Button variant="contained" onClick={handleUpdateCourse}>
        Update Course
      </Button>
    </Card>
  );
};

export default UpdateCourse;
