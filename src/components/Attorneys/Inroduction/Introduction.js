import {
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";

const Introduction = () => {
  return (
    <>
      <section className=" mt-7 flex justify-between items-center">
        <h1 className="font-semibold text-white text-secondary w-[50%] text-wrap inline">
          Let’s Introduce Ourself
        </h1>
        <Divider
          sx={{ backgroundColor: "#6A6A6A" }}
          orientation="vertical"
          variant="middle"
          flexItem
        />
        <Card sx={{ maxWidth: 345, backgroundColor: "gray" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Criminal Lawyer
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit
              Exercitation.
            </Typography>
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default Introduction;
