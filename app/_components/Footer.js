"use client";

import * as React from "react";
import { useRef } from "react";
import NextLink from "next/link";
import { Link as MUILink } from "@mui/material";
import {
  Box,
  Card,
  CardMedia,
  Fade,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import logocaption from "_helpers/client/img/logocaption.jpg";
import { useAnimate } from "./useAnimate";

const sections = [
  { title: "Home", url: "/" },
  { title: "Our School", url: "/ourschool" },
  { title: "Academics", url: "/academics" },
  { title: "Admissions", url: "/admissions" },
  { title: "Events", url: "/events" },
  { title: "News", url: "/news" },
  { title: "Contact", url: "/contact" },
];

function Copyright() {
  return (
    <Typography>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        CREF
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export { Footer };

const Footer = () => {
  const animRef = useRef(null);
  const animate = useAnimate(animRef);

  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "primary.main",
        justifyContent: "center",
        p: 8
      }}
    >
      <Grid
        container
        sx={{
          flexDirection: { xs: "column", md: "row" },
          maxWidth: "lg",
          bgcolor: "inherit",
          color: "#fff",
          justifyContent: "space-between",
        }}
        ref={animRef}
      >
        <Fade
          in={animate}
          timeout={800}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <Grid item>
            <Card>
              <CardMedia>
                <Image
                  alt="Logo with Caption"
                  src={logocaption}
                  width={250}
                  height={200}
                  priority
                />
              </CardMedia>
            </Card>
          </Grid>
        </Fade>
        <Fade in={animate} timeout={1600} sx={{ pb: { xs: 4, md: 0 } }}>
          <Grid item>
            <Typography gutterBottom sx={{ color: "text.secondary", mb: 3 }}>
              QUICK NAVIGATION
            </Typography>
            <Stack direction="row" spacing={{ xs: 0, md: 4 }}>
              <Grid container sx={{ flexDirection: "column" }}>
                {sections.slice(0, 4).map((section) => (
                  <Grid item key={section.title} sx={{ pr: 2, pb: 2 }}>
                    <MUILink
                      variant="body1"
                      color="inherit"
                      href={section.url}
                      underline="hover"
                      sx={{ flexShrink: 0 }}
                      component={NextLink}
                    >
                      {section.title}
                    </MUILink>
                  </Grid>
                ))}
              </Grid>
              <Grid container sx={{ flexDirection: "column" }}>
                {sections.slice(4).map((section) => (
                  <Grid item key={section.title} sx={{ pb: 2 }}>
                    <MUILink
                      variant="body1"
                      color="inherit"
                      href={section.url}
                      underline="hover"
                      sx={{ flexShrink: 0 }}
                      component={NextLink}
                    >
                      {section.title}
                    </MUILink>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>
        </Fade>
        <Fade in={animate} timeout={2400}>
          <Grid item>
            <Typography gutterBottom sx={{ color: "text.secondary", mb: 3 }}>
              CONTACT US
            </Typography>
            <Typography gutterBottom sx={{ mb: 2 }}>
              500 Terry Francine Street,
            </Typography>
            <Typography gutterBottom sx={{ mb: 2 }}>
              San Francisco, CA 94158
            </Typography>
            <Typography gutterBottom sx={{ mb: 2 }}>
              Tel: 123-456-7890
            </Typography>
            <Typography gutterBottom sx={{ mb: 2 }}>
              Email: info@mysite.com
            </Typography>
            <Copyright />
          </Grid>
        </Fade>
      </Grid>
    </Box>
  );
}
