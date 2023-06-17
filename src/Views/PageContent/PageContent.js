import React from "react";

// MUI components
import { Grid } from "@mui/material";

// Core components
import CustomCard from "../../components/CustomCard/CustomCard";

// Sub components
import ConveyorId01 from "./ConveyorId01";

function PageContent() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <CustomCard title="Conveyor Id - 01">
          <ConveyorId01 />
        </CustomCard>
      </Grid>
      <Grid item xs={2}>
        <CustomCard title="Carrier Props" />
        <CustomCard title="P. Id: 11 Commands" sx={{ mt: 1 }} />
        <CustomCard title="System Occupancy" sx={{ mt: 1 }} />
      </Grid>
      <Grid item xs={6}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CustomCard
              title="Panel 3D"
              expandIconColor="#fff"
              sx={{
                minHeight: { xs: "300px", sm: "350px", md: "500px" },
                background: "#2D2C3F",
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <CustomCard title="Pallet Id - 11" />
          </Grid>
          <Grid item xs={8}>
            <CustomCard title="Fill Rate of Systems" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <CustomCard
          title="Room Sensors"
          sx={{
            "& .MuiCardContent-root": {
              display: "flex",
              minHeight: "220px",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          No data to display
        </CustomCard>
        <CustomCard
          title="Exit List"
          sx={{
            mt: 1,
            "& .MuiCardContent-root": {
              display: "flex",
              minHeight: "400px",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          No data to display
        </CustomCard>
        <CustomCard
          title="Alarms"
          sx={{
            mt: 1,
            "& .MuiCardContent-root": {
              display: "flex",
              minHeight: "220px",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          No data to display
        </CustomCard>
      </Grid>
    </Grid>
  );
}

export default PageContent;

