import { AppBar, Divider } from "@mui/material";
import { TopBar } from "./topbar";
import { BottomBar } from "./BottomBar";

export { Header };

const Header = () => {
  return (
    <AppBar position="relative" sx={{ zIndex: "drawer" }}>
      <TopBar />
      <BottomBar />
      <Divider
        sx={{
          display: { xs: "block", md: "none" },
          bgcolor: "primary.main",
          py: 0.5,
        }}
      />
    </AppBar>
  );
};
