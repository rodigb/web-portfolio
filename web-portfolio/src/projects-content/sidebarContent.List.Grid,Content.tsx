import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const GridContent = ({
  image,
  title,
  description,
  gradient,
}: {
  image: string;
  title: string;
  description: string;
  gradient: string;
}) => {
  return (
    <Paper
      sx={{
        height: 400,
        width: "100%",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Box position="relative" display="inline-block" sx={{ height: "100%" }}>
        {/* Image */}
        <Box
          component="img"
          alt="Project 1."
          sx={{
            height: "100%",
            width: "100%",
            zIndex: "0",
          }}
          src={image}
        />
        {/* Gradient Overlay */}
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          sx={{}}
        ></Box>
        <Box sx={{ position: "absolute", bottom: 0, p: 2 }}>
          <Typography>{description}</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default GridContent;
