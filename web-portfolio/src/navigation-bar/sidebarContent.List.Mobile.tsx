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

function SidebarContentListMobile() {
  const theme = useTheme();
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

  const mobileContent = (
    <>
      <Accordion
        disableGutters
        sx={{
          p: 1,
          width: "100vw",
          bgcolor: "transparent",
          border: "none",
          "&:before": {
            display: "none",
          },
        }}
      >
        <AccordionSummary
          sx={{
            bgcolor: "transparent",
            borderBottom: "2px solid",
          }}
          expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
        >
          <Typography color="black">PROJECTS</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            width: "100%", // Set width to 100% to prevent expansion affecting width
          }}
        >
          <SidebarContentListItems title={""} items={projectItems} />
        </AccordionDetails>
      </Accordion>

      <Accordion
        disableGutters
        sx={{
          p: 1,
          width: "100vw",
          bgcolor: "transparent",
          border: "none",
          "&:before": {
            display: "none",
          },
        }}
      >
        <AccordionSummary
          sx={{
            bgcolor: "transparent",
            borderBottom: "2px solid",
          }}
          expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
        >
          <Typography color="black">PROJECTS</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            width: "100%", // Set width to 100% to prevent expansion affecting width
          }}
        >
          <SidebarContentListItems title={""} items={projectItems} />
        </AccordionDetails>
      </Accordion>

      <Accordion
        disableGutters
        sx={{
          p: 1,
          width: "100vw",
          bgcolor: "transparent",
          border: "none",
          "&:before": {
            display: "none",
          },
        }}
      >
        <AccordionSummary
          sx={{
            bgcolor: "transparent",
            borderBottom: "2px solid",
          }}
          expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
        >
          <Typography color="black">PROJECTS</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            width: "100%", // Set width to 100% to prevent expansion affecting width
          }}
        >
          <SidebarContentListItems title={""} items={projectItems} />
        </AccordionDetails>
      </Accordion>
    </>
  );
  return mobileContent;
}

export default SidebarContentListMobile;
