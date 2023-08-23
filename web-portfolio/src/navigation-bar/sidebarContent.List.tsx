import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SidebarContentListItems from "./sidebarContent.List.Items";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SidebarContentListMobile from "./sidebarContent.List.Mobile";

function SidebarContentList() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
  const projectItems = [
    { text: "Project 1", url: "" },
    { text: "Project 1", url: "" },
    { text: "Project 1", url: "" },
  ];
  const cvItems = [{ text: "Download CV", url: "" }];

  const desktopContent = (
    <>
      <Box>
        <Stack direction="row" spacing={2}>
          <Typography
            sx={{ mr: 5 }}
            variant="h5"
            fontWeight={"bold"}
            color={"black"}
          >
            Rodi Gemici.
          </Typography>
          <Box sx={{ p: 1 }}>{socialIcons}</Box>
        </Stack>

        <Stack direction="row" spacing={2}>
          <SidebarContentListItems title={"Projects"} items={projectItems} />

          <SidebarContentListItems title={"Expertise"} items={projectItems} />
        </Stack>
        <Stack direction="row" spacing={10}>
          <SidebarContentListItems title={"CV"} items={cvItems} />
        </Stack>
      </Box>
    </>
  );

  const mobileContent = (
    <>
      <SidebarContentListMobile />
    </>
  );
  return (
    <Stack direction="row" spacing={10}>
      <Box sx={{ ml: 0 }}>{isMobile ? mobileContent : desktopContent}</Box>
    </Stack>
  );
}

export default SidebarContentList;
