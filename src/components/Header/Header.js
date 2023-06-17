import React from "react";

// MUI components
import { AppBar, Toolbar, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

// MUI icons
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";
import MenuIcon from "@mui/icons-material/Menu";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import Face3Icon from "@mui/icons-material/Face3";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Sub components
import ProfileMenu from "./ProfileMenu";
import WorkSpaceSlider from "./WorkSpaceSlider";

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
  const anchorRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <CustomAppBar position="static" color="white" elevation={1}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <HamburgerIcon edge="start" onClick={handleDrawerOpen}>
          <MenuIcon color="iconWhite" />
        </HamburgerIcon>
        <Divider
          orientation="vertical"
          flexItem
          light
          sx={{
            height: "30px",
            alignSelf: "center",
            display: { xs: "none", sm: "none", md: "none", lg: "flex" },
          }}
        />
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "none", lg: "flex" },
          }}
        >
          <WorkSpaceSlider />
        </Box>
        {/* Header right icons */}
        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size="large">
              <BorderColorRoundedIcon />
            </IconButton>
            <IconButton size="large">
              <WifiRoundedIcon color="iconGreen" />
            </IconButton>
            <IconButton size="large">
              <QuestionAnswerRoundedIcon />
            </IconButton>
            <IconButton size="large">
              <Badge
                badgeContent={<FiberManualRecordRoundedIcon />}
                color="orange"
                variant="dot"
                overlap="circular"
              >
                <NotificationsRoundedIcon />
              </Badge>
            </IconButton>
            <Divider
              orientation="vertical"
              flexItem
              light
              sx={{
                height: "30px",
                alignSelf: "center",
              }}
            />
          </Box>
          {/* User menu */}
          <Box
            sx={{ display: "flex", alignItems: "center" }}
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <Button
              ref={anchorRef}
              variant="text"
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                textTransform: "unset",
              }}
              color="textMain"
            >
              John Doe
            </Button>

            <IconButton
              sx={{
                "& .MuiSvgIcon-root": {
                  color: "#009DB3",
                },
              }}
            >
              <Face3Icon />
            </IconButton>
            {/* Menu items */}
            <ProfileMenu
              open={open}
              handleClose={handleClose}
              anchorRef={anchorRef}
            />
          </Box>
        </Box>
      </Toolbar>
    </CustomAppBar>
  );
}

export default Header;

