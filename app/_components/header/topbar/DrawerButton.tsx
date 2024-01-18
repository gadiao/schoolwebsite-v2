"use client";

import * as React from "react";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavList } from "./NavList";

export { DrawerButton };

const DrawerButton = ({ loggedin }: { loggedin: boolean }) => {
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
        <NavList loggedin={loggedin} />
      </Drawer>
    </>
  );
};
