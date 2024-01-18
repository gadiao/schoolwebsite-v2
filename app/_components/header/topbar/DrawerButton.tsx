"use client";

import * as React from "react";
import NextLink from "next/link";
import { Link as MUILink } from "@mui/material";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export { DrawerButton };

const sections = [
  { title: "HOME", url: "/" },
  { title: "Our School", url: "/ourschool" },
  { title: "Academics", url: "/academics" },
  { title: "Admissions", url: "/admissions" },
  { title: "Events", url: "/events" },
  { title: "News", url: "/news" },
  { title: "Contact", url: "/contact" },
];

const DrawerButton = ({ children }: { children: React.ReactNode }) => {
  // open State for handling Drawer
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton
        onClick={() => {
          handleOpen();
        }}
        sx={{ display: { xs: "flex", md: "none" }, ml: 20 }}
      >
        <MenuIcon sx={{ fontSize: 35 }} />
      </IconButton>
      {/* NavList inserted into Drawer */}
      <Drawer anchor="right" open={open} onClose={handleClose}>
        <Box role="presentation" sx={{ px: 1, flexShrink: 0 }}>
          <List>
            <ListItem>
              {/* Login/Account button in NavList for Mobile*/}
              {children}
            </ListItem>
          </List>
          <Divider variant="middle" />
          <List>
            {sections.map((section) => (
              <MUILink
                color="inherit"
                noWrap
                key={section.title}
                href={section.url}
                underline="hover"
                component={NextLink}
              >
                <ListItem>
                  <ListItemButton>
                    <ListItemText primary={section.title} />
                  </ListItemButton>
                </ListItem>
              </MUILink>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};
