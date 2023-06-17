import * as React from "react";

// Mui components
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

// Mui icons
import TransitEnterexitIcon from "@mui/icons-material/TransitEnterexit";
import InfoIcon from "@mui/icons-material/Info";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";

// Card bottom right icon
const ExpandMore = styled(props => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(-90deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CustomCard({
  sx = [], // allow sx prop in the custom component
  title,
  expandIconColor,
  children,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={[
        {
          width: "auto",
          display: "flex",
          flexDirection: "column",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <CardHeader
        action={
          <Box
            sx={{
              "& .MuiIconButton-root": {
                padding: "0",
                marginLeft: "2px",
              },
            }}
          >
            <IconButton aria-label="info">
              <InfoIcon color="orange" />
            </IconButton>
            <IconButton aria-label="settings">
              <SettingsIcon color="orange" />
            </IconButton>
            <IconButton aria-label="close">
              <CloseIcon color="orange" />
            </IconButton>
          </Box>
        }
        title={title}
        sx={{
          background: "#53575A",
          padding: 1,
          "& .MuiCardHeader-action": {
            margin: 0,
          },
        }}
        titleTypographyProps={{
          color: "#fff",
          fontSize: "14px",
        }}
      />
      <CardContent sx={{ padding: 0 }}>{children}</CardContent>
      <CardActions disableSpacing sx={{ marginTop: "auto" }}>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <TransitEnterexitIcon color={expandIconColor} />
        </ExpandMore>
      </CardActions>
    </Card>
  );
}

