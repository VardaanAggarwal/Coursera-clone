import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userEmailState } from "../store/selectors/userEmailState";
import { userLoadingState } from "../store/selectors/userLoadingState";
const Home = () => {
  const navigate = useNavigate();
  const username = useRecoilValue(userEmailState);
  // const isUserLoading = useRecoilValue(userLoadingState);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        minWidth: "100vw",
        minHeight: "100vh",
        marginTop: "-100px",
        backgroundColor: "#cfcfcf",
      }}
    >
      <Grid
        container
        style={{
          padding: "10vw",
          margin: "5vw",
        }}
      >
        <Grid item lg={8} md={12} sm={12}>
          <Typography variant="h2">Course Admin</Typography>
          <Typography style={{ margin: "20px 0px" }} variant="h4">
            A place to learn, earn and grow
          </Typography>
          {!username && (
            <div>
              <Button
                style={{ marginRight: "20px" }}
                variant="contained"
                onClick={() => navigate("/signup")}
              >
                Signup
              </Button>
              <Button variant="contained" onClick={() => navigate("/signin")}>
                Signin
              </Button>
            </div>
          )}
        </Grid>
        <Grid item lg={4} md={12} sm={12}>
          <img
            style={{
              width: "300px",
            }}
            src="https://s3.memeshappen.com/memes/Right-donkey-Time-to-study-meme-41260.jpg"
            alt=""
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
