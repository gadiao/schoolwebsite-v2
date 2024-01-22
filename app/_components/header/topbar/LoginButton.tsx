"use client";

import { useState } from "react";
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

const LoginButton = ({
  isMobile,
  isLoggedin,
}: {
  isMobile: boolean;
  isLoggedin: boolean;
}) => {
  // login for checking if user pressed signin but not actually logged in
  const [login, setLogin] = useState(isLoggedin);

  // activeIndex for handling DialogLogin starting with close until click
  const [activeIndex, setActiveIndex] = useState(-1);
  const handleCloseDialog = () => setActiveIndex(-1);

  const userService = useUserService();

  // get functions to build form with useForm() hook
  const { handleSubmit, formState, control } = useForm();
  const { errors } = formState;

  async function onSubmit({ username, password }: any) {
    await userService.login(username, password);
  }

  async function logout() {
    await userService.logout();
  }

  return (
    <>
      <Box
        sx={{
          display: isMobile
            ? { xs: "flex", md: "none" }
            : { xs: "none", md: "flex" },
        }}
      >
        {login ? (
          // redirect to Profile page
          <MUILink href="/" component={NextLink} onClick={logout}>
            <IconButton>
              <AccountCircle />
            </IconButton>
          </MUILink>
        ) : (
          // toggles DialogLogin on activeIndex == 0 for Signin Dialog
          <Button
            onClick={() => setActiveIndex(0)}
            startIcon={<AccountCircle />}
          >
            LOGIN
          </Button>
        )}
      </Box>
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
