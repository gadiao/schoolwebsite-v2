import * as React from "react";
import NextLink from "next/link";
import { Link as MUILink } from "@mui/material";
import { Paper, Toolbar } from "@mui/material";
import Image from "next/image";
import logocaption from "_helpers/client/img/logocaption.jpg";

export { BottomBar };

const BottomBar = ({
  navSections,
}: {
  navSections: { title: string; url: string }[];
}) => {
  return (
    <Toolbar
      component="nav"
      variant="dense"
      sx={{
        display: { xs: "none", md: "flex" },
        justifyContent: "center",
        color: "white",
        height: 50,
      }}
    >
      <Paper
        elevation={4}
        sx={{ alignSelf: "flex-start", width: 200, height: 150 }}
      >
        <MUILink href="/" component={NextLink}>
          <Image
            alt="Logo with Caption"
            src={logocaption}
            width={200}
            height={150}
            style={{ objectFit: "cover" }}
            priority
          />
        </MUILink>
      </Paper>
      {navSections.slice(1).map((section) => (
        <MUILink
          key={section.title}
          variant="body1"
          color="inherit"
          href={section.url}
          underline="hover"
          sx={{ px: 3, fontWeight: "medium", flexShrink: 0 }}
          component={NextLink}
        >
          {section.title}
        </MUILink>
      ))}
    </Toolbar>
  );
};
