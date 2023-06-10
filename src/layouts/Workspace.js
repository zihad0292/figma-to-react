import React, { useState } from "react";

// MUI components
import { Grid } from "@mui/material";

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

import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const WorkSpace = () => {
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
      icon: <Settings />,
      items: ["Lift 1", "Turn Table 1", "Lift 3"],
    },
    {
      text: "Recent",
      icon: <RestoreOutlined />,
      items: ["Lift 1", "Turn Table 1", "Lift 3"],
    },
    {
      text: "Facility Props",
      icon: <WidgetsRounded />,
      items: ["Lift 1", "Turn Table 1", "Lift 3"],
    },
    {
      text: "Rooms",
      icon: <TabUnselectedRounded />,
      items: ["Lift 1", "Turn Table 1", "Lift 3"],
    },
    {
      text: "Conveyors",
      icon: <TramRounded />,
      items: ["Lift 1", "Turn Table 1", "Lift 3", "Turn Table 3"],
    },
    {
      text: "Carriers",
      icon: <RvHookupRounded />,
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
      icon: <SplitscreenRounded />,
      items: ["Lift 1", "Turn Table 1", "Lift 3"],
    },
    // Add more menu items as needed
  ];

  return (
    <div>
      <Sidebar
        drawerOpen={drawerOpen}
        handleDrawerClose={handleDrawerClose}
        menuItems={menuItems}
      />
      <Header handleDrawerOpen={handleDrawerOpen} />

      <Grid container spacing={2}>
        <Grid item xs={2}>
          {/* Content for grid item 1 */}
        </Grid>
        <Grid item xs={2}>
          {/* Content for grid item 2 */}
        </Grid>
        <Grid item xs={2}>
          {/* Content for grid item 3 */}
        </Grid>
        <Grid item xs={2}>
          {/* Content for grid item 4 */}
        </Grid>
        <Grid item xs={2}>
          {/* Content for grid item 5 */}
        </Grid>
        <Grid item xs={2}>
          {/* Content for grid item 6 */}
        </Grid>
      </Grid>

      {/* Add other main component content as needed */}
    </div>
  );
};

export default WorkSpace;

