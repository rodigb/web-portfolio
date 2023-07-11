import { Box, Paper, Typography } from "@mui/material";
import SidebarContentListGrid from "../projects-content/sidebarContent.List.Grid";
import img from "./images/bgimg.jpg";

export const homePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          mt: 0,
          width: "100vw",
          height: "100vh",
          bgcolor: "black",
        },
      }}
    >
      <Paper elevation={2} sx={{ border: "none", display: "flex" }}>
        <Box
          component="img"
          alt="Project 1."
          sx={{
            mt: 0,
            width: "60vw",
            height: "100vh",
            bgcolor: "red",
          }}
          src={img}
        ></Box>{" "}
        <Box
          component="div"
          sx={{
            position: "absolute",
            left: 0,
            width: "60vw",
            height: "100vh",
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.74))",
          }}
        ></Box>
        <Box
          sx={{
            mt: 0,
            width: "40vw",
            height: "100vh",
          }}
        >
          <Typography color={"white"} fontWeight={800}>
            Hi, I'm Rodi Gemici Bektas, a front-end developer passionate about
            creating exceptional web experiences. With expertise in HTML, CSS,
            JavaScript I specialize in crafting intuitive and visually appealing
            interfaces. From responsive designs to interactive features, I
            strive to deliver seamless user interactions. Explore my portfolio
            to see examples of my work and let's collaborate to bring your ideas
            to life!
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default homePage;
