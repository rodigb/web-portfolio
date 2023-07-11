import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import SidebarContentListItems from "./sidebarContent.List.Items";
import SidebarContentListGrid from "../projects-content/sidebarContent.List.Grid";

function sidebarContentList() {
  const projectItems = [
    { text: "Project 1", url: "" },
    { text: "Project 1", url: "" },
    { text: "Project 1", url: "" },
  ];

  const cvItems = [{ text: "Download CV", url: "" }];
  return (
    <Box sx={{ width: "100%", maxWidth: 300 }}>
      <Stack direction="row" spacing={10} sx={{ p: 2 }}>
        <SidebarContentListItems title={"Projects"} items={projectItems} />

        <SidebarContentListItems title={"Expertise"} items={projectItems} />
      </Stack>
      <Stack direction="row" spacing={10} sx={{ p: 2 }}>
        <SidebarContentListItems title={"CV"} items={cvItems} />
      </Stack>
      <Stack direction="row" spacing={10} sx={{ p: 2 }}>
        <SidebarContentListGrid />
      </Stack>
    </Box>
  );
}

export default sidebarContentList;
