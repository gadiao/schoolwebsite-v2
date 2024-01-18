import * as React from "react";
import { Avatar, Box, Container, Dialog, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export { DialogLogin };

const DialogLogin = ({ children, title, isActive, onClose }: login) => {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (
    <Dialog
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      onClose={onClose}
      open={isActive}
    >
      <Container maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "black",
            p: 4,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {title}
          </Typography>
          {children}
        </Box>
      </Container>
    </Dialog>
  );
};

interface login {
  children: React.ReactNode,
  title: string,
  isActive: boolean,
  onClose: () => void
}