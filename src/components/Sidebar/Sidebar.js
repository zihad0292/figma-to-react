import React, { useState } from "react";

// MUI components
import {
  Drawer,
  List,
  ListItem,
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
    items.map((item, index) => (
      <div key={index}>
        <ListItem button onClick={() => handleExpand(item.text)}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
          {expandItems[item.text] ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={expandItems[item.text]} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.items.map((childItem, childIndex) => (
              <ListItem button key={childIndex}>
                <ListItemIcon>{/* Child Item Icon */}</ListItemIcon>
                <ListItemText primary={childItem} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </div>
    ));

  const Sidebar = styled(Drawer)({
    "& .MuiDrawer-paper": {
      background: "#494D50",
      color: "#fff",
    },
    "& .MuiListItemIcon-root": {
      color: "#fff",
    },
  });
  const MenuTitle = styled(Alert)({
    background: "#343739",
    color: "#fff",
    "& .MuiIconButton-root": {
      color: "#FFBF3C",
    },
  });

  return (
    <Sidebar anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
      <MenuTitle icon={false} onClose={handleDrawerClose}>
        Select Elements
      </MenuTitle>
      <List>{renderMenuItems(menuItems)}</List>
    </Sidebar>
  );
}

export default Sidebar;

