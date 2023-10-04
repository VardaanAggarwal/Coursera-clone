import { Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export const AppBar = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/me", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => response.data)
      .then((data) => {
        setUsername(data.username);
        console.log(data);
      });
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location = "/";
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "5px",
        paddingLeft: "10px",
        paddingRight: "10px",
      }}
    >
      <div>
        <Typography variant="h6">Coursera</Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {username ? (
          <>
            <Typography style={{ marginRight: "20px" }} variant="h6">
              {username}
            </Typography>
            <Button
              onClick={handleLogout}
              variant="contained"
              style={{ marginRight: "10px" }}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={() => navigate("/signup")}
              variant="contained"
              style={{ marginRight: "10px" }}
            >
              Signup
            </Button>
            <Button onClick={() => navigate("signin")} variant="contained">
              Signin
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
