import * as React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Link as MUILink } from "@mui/material";
import {
  Box,
  Container,
  Divider,
  Fade,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { GridNews, LandingHero, MoreInfo } from '_components/landing';
// import LandingHero from "@/components/landing/LandingHero";
// import GridNews from "@/components/landing/GridNews/";
// import MoreInfo from "@/components/landing/MoreInfo";
import { EventsAccordion } from "_components/events";
import founder from "_helpers/client/img/founder.jpg";

const welcomeinfo = {
  title: "Welcome to Center For Early Education (CFESchool)",
  description:
    "Center For Early Education (CFESchool) was founded in 1980, by Beverly Anne Russel-Lockhart as one of the first preschools in the Bahamas. Our goal is to provide a nurturing and stimulating environment for young children to learn and grow into leaders and pillars of their community.",
  image: "https://source.unsplash.com/random?wallpapers",
  imageText: "main image description",
  linkText: "Learn More",
};

const events = [
  {
    title: "Board Meeting",
    date: "August 24, 7:00 PM - 9:00 PM",
    addr: "Stapledon Gardens, Albatross Road",
    desc: "I’m an event description. Click here to open up the Event Editor and change my text.",
    url: "#",
  },
  {
    title: "Labour Day",
    date: "September 4, All Day",
    addr: "Stapledon Gardens, Albatross Road",
    desc: "I’m an event description. Click here to open up the Event Editor and change my text.",
    url: "#",
  },
  {
    title: "First Day of School for Students",
    date: "September 5, All Day",
    addr: "Stapledon Gardens, Albatross Road",
    desc: "I’m an event description. Click here to open up the Event Editor and change my text.",
    url: "#",
  },
  {
    title: "Governance and Policy Committee Meeting",
    date: "September 5, 7:00 PM - 9:00 PM",
    addr: "Stapledon Gardens, Albatross Road",
    desc: "I’m an event description. Click here to open up the Event Editor and change my text.",
    url: "#",
  },
  {
    title: "Board Meeting",
    date: "September 7, 7:00 PM - 9:00 PM",
    addr: "Stapledon Gardens, Albatross Road",
    desc: "I’m an event description. Click here to open up the Event Editor and change my text.",
    url: "#",
  },
  {
    title: "Student Achievement Committee Meeting",
    date: "October 12, 10:00AM  - 10:00 PM",
    addr: "Stapledon Gardens, Albatross Road",
    desc: "I’m an event description. Click here to open up the Event Editor and change my text.",
    url: "#",
  },
];

// Transitions would be nice but without making this a client js

const Home = () => {
  return (
    <Fade in={true} timeout={800}>
      <Box sx={{ flexGrow: 1, bgcolor: "#F3F3F3" }}>
      <LandingHero />
      <Container
        maxWidth="lg"
        sx={{ flexDirection: "column", bgcolor: "#F3F3F3", pb: 8 }}
      >
        <Grid container>
          <Grid item md={6}>
            <Paper
              sx={{
                justifyContent: "center",
                height: "100%",
                py: 10,
                px: { xs: 6, lg: 10 },
                alignItems: "center",
              }}
            >
              <Paper sx={{ position: "relative", py: 20, mb: 8 }}>
                <Image
                  alt="Founder"
                  src={founder.src}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Paper>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: "medium",
                  mb: 4,
                  color: "primary.main",
                }}
              >
                {welcomeinfo.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                {welcomeinfo.description}
              </Typography>
              <MUILink
                variant="subtitle1"
                href="/ourschool"
                component={NextLink}
              >
                {welcomeinfo.linkText}
              </MUILink>
            </Paper>
          </Grid>
          <Grid item md={6}>
            <Paper
              sx={{
                justifyContent: "center",
                height: "100%",
                py: 10,
                px: { xs: 6, lg: 10 },
                alignItems: "center",
                bgcolor: "primary.main",
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: "medium", color: "white", mb: 4 }}
              >
                Upcoming Events
              </Typography>
              {/* Can be converted to horizontal with calendar and 4 upcoming events */}
              <EventsAccordion events={events} />
            </Paper>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ justifyContent: "center", py: 10 }}
        >
          <Grid item sx={{ mb: 8 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: "medium", color: "primary.main" }}
            >
              NEWS
            </Typography>
            <Divider sx={{ mb: 4 }} />
            <GridNews />
          </Grid>
          <Grid item>
            <MoreInfo />
          </Grid>
        </Grid>
      </Container>
    </Box>

  </Fade>
  );
};

export default Home