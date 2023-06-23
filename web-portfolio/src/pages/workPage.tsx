import { Box, Paper } from "@mui/material";

export const WorkPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "100%",
          height: "100vh",
        },
      }}
    >
      <Paper elevation={2}>My Work</Paper>
    </Box>
  );
};

export default WorkPage;
