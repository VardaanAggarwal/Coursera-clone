import { Button, TextField, Card, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
export const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsernameInput = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };
  const handleSignUp = () => {
    axios
      .post(
        "http://localhost:3000/admin/signup",
        {
          username: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => res.data)
      .then((data) => {
        localStorage.setItem("token", "Bearer " + data.token);
        window.location = "/";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
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
            Welcome to Coursera. Sign up below.
          </Typography>
        </div>
        <Card variant="outlined" style={{ width: 400, padding: 50 }}>
          <TextField
            onChange={handleUsernameInput}
            fullWidth
            label="Username"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            onChange={handlePasswordInput}
            fullWidth
            id="outlined-basic"
            type="password"
            label="Password"
            variant="outlined"
          />
          <br />
          <br />
          <br />

          <Button variant="contained" onClick={handleSignUp}>
            Signup
          </Button>
        </Card>
      </div>
    </div>
  );
};
