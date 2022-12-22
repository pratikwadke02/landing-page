// import {
//   Accordion,
//   AccordionDetails,
//   AccordionSummary,
//   Box,
//   Typography,
// } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";

const Faq = () => {
  const [Expanded, setExpanded] = useState(null);
  const Questions = [
    {
      Q: "WHO IS THIS EVENT FOR?",
      A: "This event is open to all engineering as well as non engineering students currently pursuing a bachelor's degree.",
    },
    {
      Q: "ARE THERE ANY PREREQUISITES OR REQUIRED SKILLS?",
      A: "Having experience in development and coding is a huge plus, teams will also need people with strong presentation skills and brilliant ideas.",
    },
    {
      Q: "DO I NEED A TEAM?",
      A: "Yes, a team is needed to participate in the hackathon. The team size should be 2 to 4 members.",
    },
    {
      Q: "HOW MUCH DOES IT COST?",
      A: "The participation in LOC 5.0 is free of cost.",
    },
    {
      Q: "WHAT IS THE DURATION OF HACKATHON?",
      A: "It is a 24 hour hackathon which will be conducted in a hybrid mode.",
    },
    {
      Q: "WHAT ARE THE PRIZES?",
      A: "Winners will get cash prizes and goodies which will be disclosed soon before the hackathon.",
    },
  ];

  return (
    <Box
      sx={{
        width: { xs: "auto", md: "60%" },
        m: { xs: "auto 1em" },
        ".Mui-expanded": { marginBlock: "0.75em", borderRadius: "4px" },
      }}>
      {Questions.map((item, i) => (
        <Accordion
          key={i}
          sx={{
            backgroundColor: "background.light",
            color: "text.dark",
          }}
          expanded={Expanded == i}
          onChange={_ => setExpanded(x => (x == i ? null : i))}>
          <AccordionSummary
            sx={{ fontSize: "12px" }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'>
            <Typography
              sx={{ fontWeight: "bold", fontSize: { xs: "16px", md: "24px" } }}
              variant='h1'>
              {item.Q}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: "primary.main" }}>
            <Typography
              sx={{ fontSize: { xs: "16px", md: "24px" } }}
              variant='body1'>
              {item.A}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Faq;
