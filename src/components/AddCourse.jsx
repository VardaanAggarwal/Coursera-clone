import React, { useState } from "react";
import { Button, TextField, Card, Typography } from "@mui/material";
import axios from "axios";
const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(null);
  const [imageLink, setImageLink] = useState("");

  const handleAddCourse = () => {
    axios
      .post(
        "http://localhost:3000/admin/courses",
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
      .then((res) => {
        alert("course added");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          paddingTop: "50px",
        }}
      >
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h5" style={{ fontWeight: "bold" }}>
              Add Course
            </Typography>
          </div>
          <Card variant="outlined" style={{ width: 400, padding: 50 }}>
            <TextField
              fullWidth
              label="Title"
              variant="outlined"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <br />
            <br />
            <TextField
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              fullWidth
              id="outlined-basic"
              label="Description"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              fullWidth
              id="outlined-basic"
              label="Price"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              onChange={(e) => {
                setImageLink(e.target.value);
              }}
              fullWidth
              id="outlined-basic"
              label="Image"
              variant="outlined"
            />
            <br />
            <br />
            <Button variant="contained" onClick={handleAddCourse}>
              Add Course
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AddCourse;
