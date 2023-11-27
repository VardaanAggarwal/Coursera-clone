import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userEmailState } from "../store/selectors/userEmailState";
const Home = () => {
  const navigate = useNavigate();
  const username = useRecoilValue(userEmailState);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        minWidth: "100vw",
        minHeight: "100vh",
        paddingTop: "-100px",
        backgroundColor: "white",
      }}
    >
      <Grid
        container
        style={{
          padding: "2vw",
          margin: "1vw",
        }}
      >
        <Grid item lg={12} md={12} sm={12}>
          <img
            style={{ marginTop: "-100px", marginBottom: "40px" }}
            src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/412b1e98-625b-4bf9-b57e-54773b6810cb.jpg"
            alt=""
          />
        </Grid>
        <Grid item lg={8} md={12} sm={12}>
          <Typography
            variant="h2"
            style={{
              textDecoration: "underline",
              fontWeight: "bolder",
            }}
          >
            Course Admin
          </Typography>
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
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
