import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

const MyCard = ({ imageSource, type, title, description }) => {
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
              aria-label="recipe"
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
          //   maxWidth: 345,
          backgroundColor: "black",
          border: "1px solid white",
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
                width: 56,
                height: 56,
              }}
              aria-label="recipe"
              src={imageSource}
            />
          }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: "white" }}>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    );
};

export default MyCard;
