import React from "react";

// MUI components
import { AppBar, Toolbar, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import ClickAwayListener from "@mui/material/ClickAwayListener";

// MUI icons
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";
import MenuIcon from "@mui/icons-material/Menu";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import Face3Icon from "@mui/icons-material/Face3";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

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

  const handleProfileMenuOpen = event => {
    // setAnchorEl(event.currentTarget);
  };
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
      <Toolbar>
        <HamburgerIcon edge="start" color="primary" onClick={handleDrawerOpen}>
          <MenuIcon />
        </HamburgerIcon>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            sx={{
              " & .MuiSvgIcon-root": {
                color: "#53575A",
              },
            }}
          >
            {" "}
            <BorderColorRoundedIcon />
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            sx={{
              " & .MuiSvgIcon-root": {
                color: "#61BD63",
              },
            }}
          >
            {" "}
            <WifiRoundedIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            sx={{
              " & .MuiSvgIcon-root": {
                color: "#53575A",
              },
            }}
          >
            <QuestionAnswerRoundedIcon />
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            sx={{
              " & .MuiSvgIcon-root": {
                color: "#53575A",
              },
            }}
          >
            <Badge
              badgeContent={<FiberManualRecordRoundedIcon />}
              color="orange"
              variant="dot"
              overlap="circular"
            >
              <NotificationsRoundedIcon />
            </Badge>
          </IconButton>{" "}
          <Divider
            orientation="vertical"
            flexItem
            light
            sx={{
              height: "30px",
              alignSelf: "center",
            }}
          />
          <Box sx={{ flexGrow: 0 }}>
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
            </Box>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-end"
              transition
              disablePortal
              sx={{
                "& .MuiMenuItem-root+.MuiDivider-root": {
                  m: 0,
                },
              }}
            >
              {({ TransitionProps, placement }) => (
                <Grow {...TransitionProps}>
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        sx={{
                          "& .MuiMenuItem-root": {
                            pl: 3,
                            pr: 3,
                          },
                        }}
                      >
                        <MenuItem>
                          <ListItemIcon>
                            <DonutLargeIcon />
                          </ListItemIcon>
                          <ListItemText>
                            Stats:{" "}
                            <Box component="span" sx={{ color: "#61BD63" }}>
                              Online
                            </Box>
                          </ListItemText>
                        </MenuItem>
                        <Divider />
                        <MenuItem>
                          <ListItemIcon>
                            <ManageAccountsIcon />
                          </ListItemIcon>
                          <ListItemText>Account Settings</ListItemText>
                        </MenuItem>
                        <Divider />
                        <MenuItem>
                          <ListItemIcon>
                            <NotificationsNoneIcon />
                          </ListItemIcon>
                          <ListItemText>Notifications</ListItemText>
                        </MenuItem>
                        <Divider />
                        <MenuItem>
                          <ListItemIcon>
                            <HelpCenterOutlinedIcon />
                          </ListItemIcon>
                          <ListItemText>Help</ListItemText>
                        </MenuItem>
                        <Divider />
                        <MenuItem>
                          <ListItemIcon>
                            <LogoutOutlinedIcon />
                          </ListItemIcon>
                          <ListItemText>Logout</ListItemText>
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Box>
        </Box>
      </Toolbar>
    </CustomAppBar>
  );
}

export default Header;

