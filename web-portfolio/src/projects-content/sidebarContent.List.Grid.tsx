import { Box, Grid, Paper, Typography, styled } from "@mui/material";
import React from "react";
import img2 from "./images/project2.png";
import GridContent from "./sidebarContent.List.Grid,Content";

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
          <GridContent
            image={img2}
            title={"Project 1"}
            description={
              "During my time at Dtime, I helped develop a data search portal for querying, searching, filtering and downloading of public datasets via an API to form JSON objects using Python, JavaScript, HTML and CSS with a team using agile software development."
            }
            gradient={""}
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
          <GridContent image={""} title={""} description={""} gradient={""} />
        </Grid>
        <Grid item md={4}>
          <GridContent image={""} title={""} description={""} gradient={""} />
        </Grid>
        <Grid item md={4}>
          <GridContent image={""} title={""} description={""} gradient={""} />
        </Grid>
        <Grid item md={3}>
          <GridContent image={""} title={""} description={""} gradient={""} />
        </Grid>
        <Grid item md={3}>
          <GridContent image={""} title={""} description={""} gradient={""} />
        </Grid>
        <Grid item md={3}>
          <GridContent image={""} title={""} description={""} gradient={""} />
        </Grid>
        <Grid item md={3}>
          <GridContent image={""} title={""} description={""} gradient={""} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default sidebarContentListGrid;
