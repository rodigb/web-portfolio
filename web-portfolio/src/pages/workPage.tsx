import { Box, Paper, Typography } from "@mui/material";
import SidebarContentListGrid from "../projects-content/sidebarContent.List.Grid";

export const WorkPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 15,
          mt: 0,
          width: "100%",
          height: "100%",
        },
      }}
    >
      <Paper elevation={2} sx={{ border: "none" }}>
        <Typography sx={{ p: 2 }} color={"black"} fontWeight={800}>
          My Work
        </Typography>
        <SidebarContentListGrid />
      </Paper>
    </Box>
  );
};

export default WorkPage;
