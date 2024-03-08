import { Card, CardContent, Divider, Typography } from "@mui/material";
import React from "react";

const Introduction = () => {
  return (
    <>
      <section className=" my-28 flex justify-between flex-wrap items-center">
        <h1 className="font-semibold text-white text-secondary w-[42%]">
          Let’s Introduce Ourself
        </h1>
        <Divider
          sx={{ backgroundColor: "#6A6A6A" }}
          orientation="vertical"
          variant="middle"
          flexItem
        />
        <Card
          sx={{
            maxWidth: 345,
            backgroundColor: "transparent",
            border: "none",
            boxShadow: "none",
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: "32px", fontWeight: "600", color: "white" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              Criminal Lawyer
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "500",
                opacity: "30%",
                color: "white",
              }}
              variant="body2"
            >
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
