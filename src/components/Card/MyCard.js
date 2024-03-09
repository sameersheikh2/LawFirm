import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

const MyCard = ({
  active,
  index,
  imageSource,
  type,
  name,
  title,
  description,
}) => {
  if (type === "features") {
    return (
      <Card
        sx={{
          maxWidth: "359px",
          maxHeight: "377px",
          cursor: "pointer",
          backgroundColor: "#1D1D1D",
          border: "1.4px solid #FFFFFF1A",
          borderRadius: "10px",
          "&:hover": {
            backgroundColor: "#2E2E2E",
          },
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              sx={{
                bgcolor: "#191919",
                width: "101px",
                height: "101px",
              }}
              aria-label={title}
              src={imageSource}
            />
          }
        />
        <CardContent sx={{ margin: "10px 4px" }}>
          <Typography
            sx={{ fontSize: "24px", fontWeight: "600", color: "white" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "18px",
              fontWeight: "500",
              opacity: "30%",
              color: "white",
            }}
          >
            {description}
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#E3B748",
              color: "black",
              fontSize: "14px",
              fontWeight: "600",
              borderRadius: "24px",
              marginTop: "16px",
              marginBottom: "160px",
              padding: "12px 20px",
            }}
          >
            Read More
          </Button>
        </CardContent>
      </Card>
    );
  } else
    return (
      <Card
        sx={{
          maxWidth: "359px",
          maxHeight: "397px",
          cursor: "pointer",
          // backgroundColor: "#1D1D1D",
          border: "1.4px solid #FFFFFF1A",
          borderRadius: "10px",
          backgroundColor: index === active ? "#2E2E2E" : "#1D1D1D",
          "&:hover": {
            backgroundColor: "#2E2E2E",
          },
        }}
      >
        <CardHeader
          sx={{ marginTop: "10px" }}
          avatar={
            <Avatar
              sx={{
                bgcolor: "#191919",
                width: "101px",
                height: "101px",
              }}
              aria-label={title}
              src={imageSource}
            />
          }
        />
        <CardContent>
          <Typography
            sx={{ fontSize: "24px", fontWeight: "600", color: "white" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {name}
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              marginBottom: "20px",
              color: "white",
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "18px",
              fontWeight: "500",
              opacity: "30%",
              color: "white",
              marginBottom: "20px",
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    );
};

export default MyCard;
