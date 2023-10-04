import React, { useState } from "react";
import { Button, TextField, Card, Typography } from "@mui/material";
import axios from "axios";
const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(null);
  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionInput = (e) => {
    setDescription(e.target.value);
  };
  const handlePriceInput = (e) => {
    setPrice(e.target.value);
  };
  const handleAddCourse = () => {
    axios
      .post(
        "http://localhost:3000/admin/courses",
        {
          title,
          description,
          price,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => res.data)
      .then((data) => console.log(data))
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
              onChange={handleTitleInput}
            />
            <br />
            <br />
            <TextField
              onChange={handleDescriptionInput}
              fullWidth
              id="outlined-basic"
              label="Description"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              onChange={handlePriceInput}
              fullWidth
              id="outlined-basic"
              label="Price"
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
