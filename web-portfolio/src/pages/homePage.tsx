import { Box, Paper } from "@mui/material";

export const homePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "80vw",
          height: "80vh",
        },
      }}
    >
      <Paper elevation={2}> asdsdsdasda</Paper>
    </Box>
  );
};

export default homePage;
