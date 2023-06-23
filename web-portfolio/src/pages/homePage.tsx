import { Box, Paper } from "@mui/material";

export const homePage = () => {
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
      <Paper elevation={2}> Home</Paper>
    </Box>
  );
};

export default homePage;
