"use client";

import * as React from "react";
import NextLink from "next/link";
import { Link as MUILink } from "@mui/material";
import {
  AppBar,
  Box,
  Button,
  Checkbox,
  Divider,
  Drawer,
  FormControlLabel,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import logocaption from "_helpers/client/img/logocaption.jpg";
import { DialogLogin } from "./DialogLogin";

const sections = [
  { title: "HOME", url: "/" },
  { title: "Our School", url: "/ourschool" },
  { title: "Academics", url: "/academics" },
  { title: "Admissions", url: "/admissions" },
  { title: "Events", url: "/events" },
  { title: "News", url: "/news" },
  { title: "Contact", url: "/contact" },
];

const TopBar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [activeIndex, setActiveIndex] = React.useState(-1);
  const handleCloseDialog = () => setActiveIndex(-1);

  const [login, setLogin] = React.useState(false); 
  const handleLogin = () => setLogin(true);
  const handleLogout = () => setLogin(false);

  // NavList for Drawer
  const NavList = () => {
    return (
      <Box
        role="presentation"
        onClick={() => {
          handleClose();
        }}
        sx={{ px: 1, flexShrink: 0 }}
      >
        <List>
          <ListItem>
            {login ? (
              <MUILink href="/account" component={NextLink}>
                <IconButton sx={{ display: { xs: "flex", md: "none" } }}>
                  <AccountCircle />
                </IconButton>
              </MUILink>
            ) : (
              <Button
                onClick={() => setActiveIndex(0)}
                startIcon={<AccountCircle />}
                sx={{ display: { xs: "flex", md: "none" } }}
              >
                LOGIN
              </Button>
            )}
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
      {/*====================LOGIN====================*/}
      {login ? (
        <MUILink href="/account" component={NextLink}>
          <IconButton sx={{ display: { xs: "none", md: "flex" } }}>
            <AccountCircle />
          </IconButton>
        </MUILink>
      ) : (
        <Button
          onClick={() => setActiveIndex(0)}
          startIcon={<AccountCircle />}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          LOGIN
        </Button>
      )}
      <IconButton
        onClick={() => {
          handleOpen();
        }}
        sx={{ display: { xs: "flex", md: "none" }, ml: 20 }}
      >
        <MenuIcon sx={{ fontSize: 35 }} />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={handleClose}>
        <NavList />
      </Drawer>
      <DialogLogin
        title="Sign In"
        isActive={activeIndex === 0}
        onClose={handleCloseDialog}
      >
        {activeIndex === 0 ? (
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={e => {
                e.preventDefault();
                handleLogin();
                handleCloseDialog();
              }}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Button variant="text" onClick={() => setActiveIndex(1)}>
                  Forgot Password
                </Button>
              </Grid>
              {/* <Grid item>
                <Button variant="text" onClick={() => setActiveIndex(2)}>
                  Sign Up
                </Button>
              </Grid> */}
            </Grid>
          </Box>
        ) : (
          <Typography>Error</Typography>
        )}
      </DialogLogin>
      <DialogLogin
        title="Forgot Password"
        isActive={activeIndex === 1}
        onClose={handleCloseDialog}
      >
        {activeIndex === 1 ? (
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Typography>
              Lost your password? Please your email address. You will receive a
              link to create a new password via email.
            </Typography>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={() => setActiveIndex(0)}
              sx={{ mt: 3, mb: 2 }}
            >
              Forgot Password
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button variant="text" onClick={() => setActiveIndex(0)}>
                  Already have an account? Sign in
                </Button>
              </Grid>
            </Grid>
          </Box>
        ) : (
          <Typography>Error</Typography>
        )}
      </DialogLogin>
      {/* <DialogLogin title="Sign Up" isActive={activeIndex === 2} onClose={handleCloseDialog}>
        {(activeIndex === 2) ? (
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={() => setActiveIndex(0)}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button variant="text" onClick={() => setActiveIndex(0)}>
                  Already have an account? Sign in
                </Button>
              </Grid>
            </Grid>
          </Box>
        ) : (
          <Typography>Error</Typography>
        )}
      </DialogLogin> */}
    </Toolbar>
  );
};

export { Header };

const Header = () => {
  return (
    <AppBar position="relative" sx={{ zIndex: "drawer" }}>
      <TopBar />
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
        {sections.slice(1).map((section) => (
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
      <Divider
        sx={{
          display: { xs: "block", md: "none" },
          bgcolor: "primary.main",
          py: 0.5,
        }}
      />
    </AppBar>
  );
}
