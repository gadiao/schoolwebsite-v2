import { Container, Divider, Fade, Paper, Typography } from "@mui/material";

// Back-end fetching required

const Page = () => {
  // Has to check if loggedin
  // ===================================================
  // - Lift state of loggedin from Header
  // - If redirected to /account and not loggedin, render Signin.js from Account
  // - else, render this page.js
  // (Caching loggedin may be necessary)

  return (
    <Fade in={true} timeout={400}>
      <Container sx={{ pt: 15, pb: 4, justifyContent: 'center' }}>
        <Paper sx={{ p: 4 }} elevation={4}>
          <Typography
            variant="h3"
            sx={{ color: "primary.main", fontWeight: "medium" }}
            gutterBottom
          >
            Profile
          </Typography>
          <Divider sx={{ mb: 2 }} />
        </Paper>
        
      </Container>
    </Fade>
  );
};

export default Page;