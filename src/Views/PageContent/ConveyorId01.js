import React from "react";

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

function ConveyorId01() {
  return (
    <List
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Lift Conveyor 1
        </ListSubheader>
      }
      sx={{
        "& .MuiListSubheader-root": {
          fontSize: "14px",
          fontWeight: "700!important",
          color: "#53575A!important",
        },
      }}
      dense
    >
      <ListItemButton>
        <ListItemText primary="Mode:" /> Auto
      </ListItemButton>
      <Divider />
      <ListItemButton>
        <ListItemText primary="Status:" /> Waiting
      </ListItemButton>
      <Divider />
      <ListItemButton>
        <ListItemText primary="Task Type:" /> Idle
      </ListItemButton>
      <Divider />
      <ListItemButton>
        <ListItemText primary="Alarms:" /> 109
      </ListItemButton>
      <Divider />
      <ListItemButton>
        <ListItemText primary="Why Not Working:" />
      </ListItemButton>
      <Divider />
      <ListItemButton>
        <ListItemText primary="Warning List:" />
      </ListItemButton>
      <Divider />
      <ListItemButton>
        <ListItemText primary="Start Condition:" />
      </ListItemButton>
      <Divider />
      <ListItemButton>
        <ListItemText primary="Pallet Sensors:" />
      </ListItemButton>
      <Divider />
      <ListItemButton>
        <ListItemText primary="Car Weight:" />
      </ListItemButton>
      <Divider />
      <ListItemButton>
        <ListItemText primary="Job Status:" /> Unknown
      </ListItemButton>
      <Divider />
      <ListItemButton>
        <ListItemText primary="Active Shelf:" /> 0
      </ListItemButton>
      <Divider />
      <ListItemButton>
        <ListItemText primary="PLC Pallet Exists:" />
      </ListItemButton>
      <Divider />
      <ListItemButton>
        <ListItemText primary="Front Lock Status:" />
      </ListItemButton>
      <Divider />
      <ListItemButton>
        <ListItemText primary="Rear Lock Status:" />
      </ListItemButton>
      <Divider />
      <ListItemButton>
        <ListItemText primary="Actual Velocity:" />
      </ListItemButton>
    </List>
  );
}

export default ConveyorId01;

