"use client";

import * as React from "react";
import NextLink from "next/link";
import { Link as MUILink } from "@mui/material";
import {
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
import LoadingButton from "@mui/lab/LoadingButton";
import { DialogLogin } from "./DialogLogin";
import { useForm, Controller } from "react-hook-form";
import { useUserService } from "_services";
import { InputTextField } from "_helpers/client";

export { TopBar };

const TopBar = ({
  loggedin,
  navSections,
}: {
  loggedin: Boolean;
  navSections: { title: string; url: string }[];
}) => {
  // open State for handling Drawer
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // activeIndex for handling DialogLogin starting with close until click
  const [activeIndex, setActiveIndex] = React.useState(-1);
  const handleCloseDialog = () => setActiveIndex(-1);

  // login for checking if user is pressed signin but not actually logged in
  const [login, setLogin] = React.useState(loggedin);
  const [loggingOut, setLoggingOut] = React.useState(false);

  const userService = useUserService();

  // get functions to build form with useForm() hook
  const { handleSubmit, formState, control } = useForm();
  const { errors } = formState;

  async function onSubmit({ username, password }: any) {
    await userService.login(username, password);
  }

  async function logout() {
    setLoggingOut(true);
    await userService.logout();
  }

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
        {/* Login/Account button in NavList for Mobile*/}
        <List>
          <ListItem>
            {login ? (
              // redirect to Profile page
              <MUILink href="/" component={NextLink} onClick={logout}>
                <IconButton sx={{ display: { xs: "flex", md: "none" } }}>
                  <AccountCircle />
                </IconButton>
              </MUILink>
            ) : (
              // toggles DialogLogin on activeIndex == 0 for Signin Dialog
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
          {navSections.map((section) => (
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
      {/* Login/Account on Desktop site */}
      {login ? (
        // redirect to Profile page
        <MUILink href="/" component={NextLink} onClick={logout}>
          <IconButton sx={{ display: { xs: "none", md: "flex" } }}>
            <AccountCircle />
          </IconButton>
        </MUILink>
      ) : (
        // toggles DialogLogin on activeIndex == 0 for Signin Dialog
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
      {/* NavList inserted into Drawer */}
      <Drawer anchor="right" open={open} onClose={handleClose}>
        <NavList />
      </Drawer>
      {/* SignIn Dialog for activeIndex === 0 */}
      <DialogLogin
        title="Sign In"
        isActive={activeIndex === 0}
        onClose={handleCloseDialog}
      >
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
          <InputTextField control={control} name="username" />
          <InputTextField control={control} name="password" />
          <Controller
            name="remember"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <FormControlLabel
                control={<Checkbox {...field} color="primary" />}
                label="Remember me"
              />
            )}
          />
          <LoadingButton
            loading={formState.isSubmitting}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </LoadingButton>
          <Button variant="text" onClick={() => setActiveIndex(1)}>
            Forgot Password
          </Button>
        </Box>
      </DialogLogin>
      {/* ForgotPassword Dialog for activeIndex === 1 */}
      <DialogLogin
        title="Forgot Password"
        isActive={activeIndex === 1}
        onClose={handleCloseDialog}
      >
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
      </DialogLogin>
    </Toolbar>
  );
};
