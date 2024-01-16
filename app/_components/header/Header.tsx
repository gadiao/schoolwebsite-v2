import * as React from "react";
import { AppBar, Divider } from "@mui/material";
import { TopBar } from "./TopBar";
import { BottomBar } from "./BottomBar";

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

export { Header };

const Header = ({ loggedin }: { loggedin: Boolean }) => {
  return (
    <AppBar position="relative" sx={{ zIndex: "drawer" }}>
      <TopBar loggedin={loggedin} navSections={sections} />
      <BottomBar navSections={sections} />
      <Divider
        sx={{
          display: { xs: "block", md: "none" },
          bgcolor: "primary.main",
          py: 0.5,
        }}
      />
    </AppBar>
  );
};
