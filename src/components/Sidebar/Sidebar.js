import React, { useState } from "react";

// MUI components
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
  Alert,
} from "@mui/material";

import { styled } from "@mui/material/styles";

// MUI icons
import { ExpandLess, ExpandMore } from "@mui/icons-material";

function Sidebar({ drawerOpen, handleDrawerClose, menuItems }) {
  const [expandItems, setExpandItems] = useState({});

  const handleExpand = item => {
    setExpandItems(prevExpandItems => ({
      ...prevExpandItems,
      [item]: !prevExpandItems[item],
    }));
  };

  const renderMenuItems = items =>
    items.map((item, index) => {
      const isActiveItem = expandItems[item.text];
      return (
        <div key={index}>
          <ListItemButton
            onClick={() => handleExpand(item.text)}
            sx={{
              pt: 2,
              pb: 2,
              backgroundColor: isActiveItem ? "#343739" : "transparent",
              borderLeft: isActiveItem
                ? "5px solid #696563"
                : "5px solid transparent",
              "&>.MuiSvgIcon-root ": {
                color: isActiveItem ? "#FFBF3C" : "#fff",
              },
              "&:hover": {
                backgroundColor: isActiveItem ? "#343739" : "transparent",
              },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
            {expandItems[item.text] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={expandItems[item.text]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.items.map((childItem, childIndex) => (
                <ListItemButton
                  key={childIndex}
                  sx={{
                    borderTop: "1px solid #696563",
                    pt: 0,
                    pb: 0,
                    backgroundColor: "#3E4143",
                    // "&:hover": {
                    //   backgroundColor: "#3E4143",
                    // },
                  }}
                >
                  <ListItemIcon>{/* Child Item Icon */}</ListItemIcon>
                  <ListItemText primary={childItem} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </div>
      );
    });

  const Sidebar = styled(Drawer)({
    "& .MuiDrawer-paper": {
      background: "#494D50",
      color: "#fff",
      position: "absolute",
      left: "8px", // Adjust the desired distance from the left edge
      top: "72px", // Adjust the desired distance from the top edge
      borderRadius: "5px",
    },
    "& .MuiListItemIcon-root": {
      color: "#fff",
    },
  });
  const MenuTitle = styled(Alert)({
    paddingTop: 0,
    paddingBottom: 0,
    background: "#343739",
    color: "#fff",
    "& .MuiIconButton-root": {
      color: "#FFBF3C",
      paddingTop: 0,
      paddingBottom: 0,
      "& .MuiSvgIcon-root ": {
        fontSize: "14px",
      },
    },
  });

  return (
    <Sidebar
      anchor="left"
      open={drawerOpen}
      onClose={handleDrawerClose}
      hideBackdrop={true}
      elevation={0}
    >
      <MenuTitle icon={false} onClose={handleDrawerClose}>
        Select Elements
      </MenuTitle>
      <List
        sx={{
          width: "200px",
          "& .MuiListItemIcon-root": {
            minWidth: "36px",
          },
        }}
      >
        {renderMenuItems(menuItems)}
      </List>
    </Sidebar>
  );
}

export default Sidebar;

