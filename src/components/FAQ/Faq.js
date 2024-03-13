import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const FAQ = () => {
  return (
    <div className="flex mt-16 justify-center">
      <div className="w-4/5">
        <h1 className="text-secondary text-white font-semibold">FAQ</h1>
        <div className="flex justify-between">
          <p className="text-[#FFFFFF] opacity-[30%] text-lg">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
          <div className="w-[45em] ml-10">
            <Accordion sx={{ border: "none", boxShadow: "none" }}>
              <AccordionSummary
                expandIcon={
                  <AddCircleIcon
                    sx={{
                      color: "#E3B748",
                      fontSize: "24px",
                      marginBottom: "20px",
                    }}
                  />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                  color: "#FFFFFF",
                  backgroundColor: "#1D1D1D",
                  border: "none",
                  fontSize: "24px",
                  fontWeight: "600",
                  boxShadow: "none",
                }}
              >
                <Typography className="pb-5">
                  Do I need a personal injury report?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="bg-colorGray shadow-none border-0">
                <Typography className="text-lg font-medium text-[#FFFFFF] opacity-[30%]">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequatduis enim velit mollit Exer.
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequatduis enim velit mollit Exer.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={
                  <AddCircleIcon
                    sx={{
                      color: "#E3B748",
                      fontSize: "24px",
                    }}
                  />
                }
                aria-controls="panel2a-content"
                id="panel2a-header"
                sx={{
                  color: "#FFFFFF",
                  backgroundColor: "#1D1D1D",
                  border: "none",
                  fontSize: "24px",
                  fontWeight: "600",
                  boxShadow: "none",
                }}
              >
                <Typography className="py-5">
                  How much is my case worth?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="bg-colorGray shadow-none border-0">
                <Typography className="text-lg font-medium text-[#FFFFFF] opacity-[30%]">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequatduis enim velit mollit Exer.
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequatduis enim velit mollit Exer.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={
                  <AddCircleIcon
                    sx={{
                      color: "#E3B748",
                      fontSize: "24px",
                    }}
                  />
                }
                aria-controls="panel2a-content"
                id="panel2a-header"
                sx={{
                  color: "#FFFFFF",
                  backgroundColor: "#1D1D1D",
                  border: "none",
                  fontSize: "24px",
                  fontWeight: "600",
                  boxShadow: "none",
                }}
              >
                <Typography className="py-5">
                  What should I do right after car accidect
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="bg-colorGray shadow-none border-0">
                <Typography className="text-lg font-medium text-[#FFFFFF] opacity-[30%]">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequatduis enim velit mollit Exer.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={
                  <AddCircleIcon
                    sx={{
                      color: "#E3B748",
                      fontSize: "24px",
                    }}
                  />
                }
                aria-controls="panel2a-content"
                id="panel2a-header"
                sx={{
                  color: "#FFFFFF",
                  backgroundColor: "#1D1D1D",
                  border: "none",
                  fontSize: "24px",
                  fontWeight: "600",
                  boxShadow: "none",
                }}
              >
                <Typography className="py-5">
                  How much is my case worth?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="bg-colorGray shadow-none border-0">
                <Typography className="text-lg font-medium text-[#FFFFFF] opacity-[30%]">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequatduis enim velit mollit Exer.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
