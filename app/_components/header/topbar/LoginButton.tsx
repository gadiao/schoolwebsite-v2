"use client";

import { useState, useEffect } from "react";
import NextLink from "next/link";
import { Link as MUILink } from "@mui/material";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LoadingButton from "@mui/lab/LoadingButton";
import { DialogLogin } from "./DialogLogin";
import { useForm, Controller } from "react-hook-form";
import { useUserService } from "_services";
import { InputTextField } from "_helpers/client";

export { LoginButton };

const LoginButton = ({ isLoggedin }: { isLoggedin: boolean }) => {
  // activeIndex for handling DialogLogin starting with close until click
  const [activeIndex, setActiveIndex] = useState(-1);
  const handleCloseDialog = () => setActiveIndex(-1);

  // Rudimentary way of changing loggedin, handle again at backend
  const [userLoggedin, setLoggedin] = useState(isLoggedin);
  const handleLogin = () => setLoggedin(true);
  const handleLogout = () => setLoggedin(false);

  const userService = useUserService();

  // get functions to build form with useForm() hook
  const { handleSubmit, formState, control } = useForm();

  async function onSubmit({ username, password }: any) {
    await userService.login(username, password);
    handleLogin();
  }
  async function logout() {
    await userService.logout();
    handleLogout();
  }

  return (
    <>
      {/* redirect to Profile page */}
      {userLoggedin ? (
        <MUILink href="/" component={NextLink} onClick={logout}>
          <IconButton>
            <AccountCircle />
          </IconButton>
        </MUILink>
      ) : (
        <Button onClick={() => setActiveIndex(0)} startIcon={<AccountCircle />}>
          LOGIN
        </Button>
      )}
      {/* toggles DialogLogin on activeIndex == 0 for Signin Dialog */}
      {/* Might be a cause of issue as tree goes from Server (parent) -> Client -> Server (child) */}
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
    </>
  );
};
