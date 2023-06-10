import React from "react";

// MUI components
import { AppBar, Toolbar, IconButton } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

// MUI icons
import { Menu } from "@mui/icons-material";

const CustomAppBar = styled(AppBar)({});

const HamburgerIcon = styled(IconButton)({
  "&, &:hover": {
    background: "#53575A",
    color: "#fff",
    borderRadius: "5px",
    padding: "4px",
  },
});

function Header({ handleDrawerOpen }) {
  return (
    <CustomAppBar position="static" color="white" elevation={1}>
      <Toolbar>
        <HamburgerIcon edge="start" color="inherit" onClick={handleDrawerOpen}>
          <Menu />
        </HamburgerIcon>
        {/* Add other app bar components as needed */}
      </Toolbar>
    </CustomAppBar>
  );
}

export default Header;

