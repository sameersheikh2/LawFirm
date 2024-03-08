import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

const Card = ({ imageSource, type }) => {
  if (type === "features") {
    return (
      <Card
        sx={{
          maxWidth: 345,
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

export default Card;
