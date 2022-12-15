import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

const Faq = () => {
  const Questions = [
    {
      Q: "Question 1",
      A: "This is Answers 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      Q: "Question 2",
      A: "This is Answers 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      Q: "Question 3",
      A: "This is Answers 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      Q: "Question 4",
      A: "This is Answers 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ];

  return (
    <Box sx={{ width: "70%", m: "5em 0 0 5em" }}>
      {Questions.map((item, i) => (
        <Accordion
          key={i}
          disableGutters
          sx={{
            backgroundColor: "background.light",
            color: "text.dark",
            fontSize: "large",
          }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'>
            <Typography sx={{ fontWeight: "bold" }}>{item.Q}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.A}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Faq;
