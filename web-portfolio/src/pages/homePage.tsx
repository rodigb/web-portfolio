import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";
import img from "./images/img1.jpg";

const Home = () => {
  const typewriterStrings = [
    "I Am A Frontend Developer!",
    "I have a keen interest in UX/UI Design!",
    "I Am A Web Developer!",
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        bgcolor: "black",
      }}
    >
      <Paper elevation={2} sx={{ border: "none", display: "flex" }}>
        <Box
          sx={{
            width: "60vw",
            height: "100vh",
            bgcolor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 10%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              mb: 10,
            }}
          >
            <Typography variant="h2" fontWeight={600} color="black">
              Hello,
            </Typography>
            <Typography variant="h2" fontWeight={600} color="black">
              My Name Is
            </Typography>
            <Typography
              width="100%"
              variant="h2"
              fontWeight={600}
              color="white"
              bgcolor="black"
            >
              Rodi Gemici Bektas
            </Typography>
            <Typography variant="h2" fontWeight={600} color="black">
              <Typewriter
                options={{
                  strings: typewriterStrings,
                  deleteSpeed: 2,
                  autoStart: true,
                  loop: true,
                }}
              />
            </Typography>
          </Box>
        </Box>
        <Box
          component="img"
          sx={{
            mt: 0,
            mr: 10,
            width: "50vw",
            height: "100vh",
          }}
          src={img}
          alt="Background"
        />
      </Paper>
    </Box>
  );
};

export default Home;
