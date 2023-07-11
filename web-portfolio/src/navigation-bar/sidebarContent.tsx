import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
  makeStyles,
  styled,
} from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import SidebarContentList from "./sidebarContent.List";

function sidebarContent() {
  const socialIcons = (
    <Stack direction="row" spacing={2}>
      <IconButton style={{ backgroundColor: "white " }}>
        <GitHubIcon sx={{ color: "black" }} />
      </IconButton>
      <IconButton style={{ backgroundColor: "white" }}>
        <LinkedInIcon sx={{ color: "#0A66C2" }} />
      </IconButton>
      <IconButton style={{ backgroundColor: "white" }}>
        <MailIcon sx={{ color: "#15a5ee" }} />
      </IconButton>
    </Stack>
  );
  return (
    <Box sx={{ ml: 10 }}>
      <Stack direction="row" spacing={2}>
        <Typography sx={{ mr: 5 }} variant="h5" fontWeight={"bold"}>
          Rodi Gemici.
        </Typography>
        <Box sx={{ p: 1 }}>{socialIcons}</Box>
      </Stack>

      <Stack direction="row" spacing={10}>
        <SidebarContentList />
      </Stack>
    </Box>
  );
}

export default sidebarContent;
