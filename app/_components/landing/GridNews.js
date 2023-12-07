"use client";

import * as React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const news = [
  {
    id: 121421,
    title: "Learning at Home Effectively",
    date: "Sept 12",
    description:
      "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
    image: "https://source.unsplash.com/sEgodrJdMGw",
    imageLabel: "Image Text",
  },
  {
    id: 121462,
    title: "Registration for Science Fair Is Now Open",
    date: "Oct 15",
    description:
      "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
    image: "https://source.unsplash.com/505eectW54k",
    imageLabel: "Image Text",
  },
  {
    id: 123421,
    title: "Back to School - All You Need to Know",
    date: "Nov 07",
    description:
      "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
    image: "https://source.unsplash.com/OyCl7Y4y0Bk",
    imageLabel: "Image Text",
  },
];

const News = (props) => {
  const { post } = props;

  return (
    // Can check for on scroll
    <Grid item lg={4}>
      <CardActionArea component="a" href={"/news/" + post.id}>
        {/* Edit to match school website news posts */}
        <Card sx={{ display: { xs: "block", md: "flex", lg: "block" }, height: { lg: "100%" } }}>
          <CardMedia
            sx={{
              position: "relative",
              py: 14,
              px: 24,
            }}
          >
            <Image
              alt={"Random image"}
              src={post.image}
              fill
              style={{ objectFit: "cover" }}
            />
          </CardMedia>
          <CardContent sx={{ mx: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: "medium" }}>
              {post.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              {post.date}
            </Typography>
            <Typography variant="body1" paragraph>
              {post.description}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

News.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export { GridNews };

const GridNews = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
      }}
    >
      {news.map((post) => (
        <News key={post.title} post={post} />
      ))}
    </Grid>
  );
};