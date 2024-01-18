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
} from "@mui/material";
import { LoginButton } from "./LoginButton";

export { NavList };

// sections for each page in website except Account
const sections = [
  { title: "HOME", url: "/" },
  { title: "Our School", url: "/ourschool" },
  { title: "Academics", url: "/academics" },
  { title: "Admissions", url: "/admissions" },
  { title: "Events", url: "/events" },
  { title: "News", url: "/news" },
  { title: "Contact", url: "/contact" },
];

const NavList = ({ loggedin }: { loggedin: boolean }) => {
  // Removed open/close state from NavList and handleClose from Box
  return (
    <Box
      role="presentation"
      sx={{ px: 1, flexShrink: 0 }}
    >
      <List>
        <ListItem>
          {/* Login/Account button in NavList for Mobile*/}
          <LoginButton loggedin={loggedin} isMobile={true}/>
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
  );
};
