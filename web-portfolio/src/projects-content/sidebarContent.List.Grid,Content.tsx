import { Box, Paper, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const GridContent = ({
  image,
  title,
  description,
  gradient,
}: {
  image: string;
  title: string;
  description: string;
  gradient: string;
}) => {
  return (
    <Paper
      sx={{
        height: 400,
        width: "100%",
        border: "none",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? `${grey[400]}` : "#fff",
      }}
    >
      <Box position="relative" display="inline-block" sx={{ height: "100%" }}>
        {/* Image */}
        <Box
          component="img"
          alt="Project 1."
          sx={{
            height: "100%",
            width: "100%",
            zIndex: "0",
            bgcolor: "black",
          }}
          src={image}
        />
        {/* Gradient Overlay */}
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          sx={{ background: `${gradient}` }}
        ></Box>
        <Box sx={{ position: "absolute", bottom: 0, p: 1 }}>
          <Stack>
            <Typography pb={1} fontWeight={800}>
              {title}
            </Typography>
            <Typography>{description}</Typography>
          </Stack>
        </Box>
      </Box>
    </Paper>
  );
};

export default GridContent;
