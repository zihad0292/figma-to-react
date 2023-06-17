import React from "react";
import Slider from "react-slick";

// MUI components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";

// icons
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const buttonItems = [
  { text: "Workspace 1", link: "/" },
  { text: "Workspace 2", link: "/" },
  { text: "Workspace 3", link: "/" },
  { text: "Workspace 4", link: "/" },
  { text: "Workspace 5", link: "/" },
  { text: "Workspace 6", link: "/" },
  { text: "Workspace 7", link: "/" },
  { text: "Workspace 8", link: "/" },
  { text: "Workspace 9", link: "/" },
  { text: "Workspace 10", link: "/" },
  { text: "Workspace 11", link: "/" },
];

const arrowStyles = {
  background: "#F1F1F9",
  fontSize: "28px",
  padding: "5px",
  color: "#808495",
};

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowForwardIosIcon
      className={className}
      style={{
        ...style,
        ...arrowStyles,
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowBackIosIcon
      className={className}
      style={{
        ...style,
        ...arrowStyles,
      }}
      onClick={onClick}
    />
  );
}

function WorkSpaceSlider() {
  const isMinWidth1600 = useMediaQuery("(min-width:1600px)");
  const isMinWidth1920 = useMediaQuery("(min-width:1920px)");

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box
      sx={{
        maxWidth: isMinWidth1600
          ? "1150px"
          : isMinWidth1920
          ? "1400px"
          : "650px",
        margin: "auto",
      }}
    >
      <Slider {...settings}>
        {buttonItems.map((item, idx) => {
          return (
            <Box
              key={`workspace-button-${idx}`}
              sx={{ justifyContent: "center", textAlign: "center" }}
            >
              <Button
                color="buttonDark"
                variant="contained"
                onClick={() => console.log(item.link)}
                sx={{
                  fontSize: "16px",
                  textTransform: "unset",
                  fontWeight: "400",
                }}
              >
                {item.text}
              </Button>
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
}

export default WorkSpaceSlider;

