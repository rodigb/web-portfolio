import React from "react";
import { List, ListItemButton, ListItemText, Typography } from "@mui/material";
import { MyListComponentProps } from "./interfaces";

const MyListComponent: React.FC<MyListComponentProps> = ({ items, title }) => {
  return (
    <List disablePadding sx={{ justifyContent: "flex-start", pl: 2 }}>
      <Typography
        sx={{ pl: 0, fontWeight: "bold", color: "black" }}
        variant="subtitle1"
      >
        {title}
      </Typography>
      {items.map((item, index) => (
        <ListItemButton key={index} sx={{ p: 0, textAlign: "center" }}>
          <ListItemText
            disableTypography
            primary={
              <Typography variant="caption" style={{ color: "black" }}>
                {item.text}
              </Typography>
            }
          />
        </ListItemButton>
      ))}
    </List>
  );
};

export default MyListComponent;
