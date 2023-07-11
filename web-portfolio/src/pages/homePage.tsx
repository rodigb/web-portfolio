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
          mt: 0,
          width: "100%",
          height: "100%",
        },
      }}
    >
      <Paper elevation={2} sx={{ border: "none" }}>
        <Typography color={"black"} fontWeight={800}>
          My Work
        </Typography>
        <SidebarContentListGrid />
      </Paper>
    </Box>
  );
};

export default homePage;
