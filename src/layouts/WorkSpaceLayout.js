import React, { useState } from "react";

// MUI components
import { Box } from "@mui/material";

// MUI icons
import {
  Settings,
  RestoreOutlined,
  WidgetsRounded,
  TabUnselectedRounded,
  TramRounded,
  RvHookupRounded,
  SplitscreenRounded,
} from "@mui/icons-material";

// Sub components
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

// View
import PageContent from "../Views/PageContent/PageContent";

const WorkSpaceLayout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const menuItems = [
    {
      text: "Settings",
      icon: <Settings color="iconWhite" />,
      items: ["Lift 1", "Turn Table 1", "Lift 3"],
    },
    {
      text: "Recent",
      icon: <RestoreOutlined color="iconWhite" />,
      items: ["Lift 1", "Turn Table 1", "Lift 3"],
    },
    {
      text: "Facility Props",
      icon: <WidgetsRounded color="iconWhite" />,
      items: ["Lift 1", "Turn Table 1", "Lift 3"],
    },
    {
      text: "Rooms",
      icon: <TabUnselectedRounded color="iconWhite" />,
      items: ["Lift 1", "Turn Table 1", "Lift 3"],
    },
    {
      text: "Conveyors",
      icon: <TramRounded color="iconWhite" />,
      items: ["Lift 1", "Turn Table 1", "Lift 3", "Turn Table 3"],
    },
    {
      text: "Carriers",
      icon: <RvHookupRounded color="iconWhite" />,
      items: [
        "Lift 1",
        "Turn Table 1",
        "Lift 3",
        "Turn Table 3",
        "Shuttle 4",
        "Shuttle 5",
        "Shuttle 6",
        "Shuttle 7",
        "Shuttle 8",
        "Lift 4",
      ],
    },
    {
      text: "Shelf Groups",
      icon: <SplitscreenRounded color="iconWhite" />,
      items: ["Lift 1", "Turn Table 1", "Lift 3"],
    },
    // Add more menu items as needed
  ];

  return (
    <div style={{ background: "#EAEAEA" }}>
      {/* Left Sidebar */}
      <Sidebar
        drawerOpen={drawerOpen}
        handleDrawerClose={handleDrawerClose}
        menuItems={menuItems}
      />
      {/* Header and navigation */}
      <Header handleDrawerOpen={handleDrawerOpen} />
      {/* Page content */}
      <Box p={1.5}>
        <PageContent />
      </Box>
    </div>
  );
};

export default WorkSpaceLayout;

