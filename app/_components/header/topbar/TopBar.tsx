import * as React from "react";
import NextLink from "next/link";
import { Link as MUILink } from "@mui/material";
import { Paper, Toolbar } from "@mui/material";
import Image from "next/image";
import logocaption from "_helpers/client/img/logocaption.jpg";
import { LoginDrawer } from "./LoginDrawer";
import { LoginButton } from "./LoginButton";

import { auth } from '_helpers/server';

export { TopBar };

const TopBar = () => {
  return (
    <Toolbar
      variant="dense"
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        bgcolor: "#FDFDFD",
        color: "black",
        justifyContent: { xs: "space-around", md: "flex-end" },
      }}
    >
      <Paper
        elevation={0}
        sx={{ display: { xs: "flex", md: "none" }, ml: { xs: 5, sm: 20 } }}
      >
        <MUILink href="/" component={NextLink}>
          <Image
            alt="Logo with Caption"
            src={logocaption}
            width={200}
            height={150}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "cover",
            }}
            priority
          />
        </MUILink>
      </Paper>
      {/* Login/Account on Desktop site */}
      <LoginDrawer>
        <LoginButton isLoggedin={auth.isAuthenticated()}/>
      </LoginDrawer>
    </Toolbar>
  );
};
