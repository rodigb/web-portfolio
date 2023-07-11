import { Box, Grid, Paper, styled } from "@mui/material";
import React from "react";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";

function sidebarContentListGrid() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 10,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={4}>
        <Grid item md={6}>
          <Paper
            sx={{
              height: 400,
              width: "100%",
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          />
        </Grid>
        <Grid item md={6}>
          <Paper
            sx={{
              height: 400,
              width: "100%",
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          />
        </Grid>
        <Grid item md={4}>
          <Paper
            sx={{
              height: 400,
              width: "100%",
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          />
        </Grid>
        <Grid item md={4}>
          <Paper
            sx={{
              height: 400,
              width: "100%",
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          />
        </Grid>
        <Grid item md={4}>
          <Paper
            sx={{
              height: 400,
              width: "100%",
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          />
        </Grid>
        <Grid item md={3}>
          <Paper
            sx={{
              height: 400,
              width: "100%",
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          />
        </Grid>
        <Grid item md={3}>
          <Paper
            sx={{
              height: 400,
              width: "100%",
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          />
        </Grid>
        <Grid item md={3}>
          <Paper
            sx={{
              height: 400,
              width: "100%",
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          />
        </Grid>
        <Grid item md={3}>
          <Paper
            sx={{
              height: 400,
              width: "100%",
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default sidebarContentListGrid;
