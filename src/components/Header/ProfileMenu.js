import React from "react";

// MUI components
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import ClickAwayListener from "@mui/material/ClickAwayListener";

// MUI icons
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

function ProfileMenu({ open, handleClose, anchorRef }) {
  return (
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
  );
}

export default ProfileMenu;

