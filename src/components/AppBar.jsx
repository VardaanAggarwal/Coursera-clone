import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userEmailState } from "../store/selectors/userEmailState";
import { userLoadingState } from "../store/selectors/userLoadingState";
import { userState } from "../store/atom/user";
export const AppBar = () => {
  const navigate = useNavigate();
  const isUserLoading = useRecoilValue(userLoadingState);
  const username = useRecoilValue(userEmailState);
  const setUser = useSetRecoilState(userState);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser({
      isLoading: false,
      userEmail: null,
    });
    navigate("/");
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
        <Typography
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
          variant="h6"
        >
          Coursera
        </Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {isUserLoading || username ? (
          <>
            <Typography style={{ marginRight: "20px" }} variant="h6">
              {username}
            </Typography>
            <Button
              onClick={() => navigate("/courses")}
              variant="contained"
              style={{ marginRight: "10px" }}
            >
              Courses
            </Button>
            <Button
              onClick={() => navigate("/addcourse")}
              variant="contained"
              style={{ marginRight: "10px" }}
            >
              Add course
            </Button>
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
