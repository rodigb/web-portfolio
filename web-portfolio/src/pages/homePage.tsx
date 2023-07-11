import { Box, Paper } from "@mui/material";
import SidebarContentListGrid from "../projects-content/sidebarContent.List.Grid";

export const homePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 10,
          width: "100%",
          height: "100%",
        },
      }}
    >
      <Paper elevation={2} sx={{ p: 2 }}>
        Home
        <SidebarContentListGrid />
      </Paper>
    </Box>
  );
};

export default homePage;
