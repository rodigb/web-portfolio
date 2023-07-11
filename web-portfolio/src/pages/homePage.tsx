import { Box, Paper, Typography } from "@mui/material";
import SidebarContentListGrid from "../projects-content/sidebarContent.List.Grid";

export const homePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 25,
          mt: 2,
          width: "100%",
          height: "100%",
        },
      }}
    >
      <Paper elevation={2} sx={{ p: 2 }}>
        <Typography fontWeight={800}>My Work</Typography>
        <SidebarContentListGrid />
      </Paper>
    </Box>
  );
};

export default homePage;
