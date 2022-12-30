import React from "react";
import Box from "@mui/material/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Socials = () => {
  const size = { xs: "2rem", md: "1.5rem", lg: "2.5rem" };

  const socials = [
    {
      icon: <InstagramIcon sx={{ color: "#fff", fontSize: size }} />,
      link: "https://www.instagram.com/djsanghvi_acm/",
    },
    {
      icon: <LinkedInIcon sx={{ color: "#fff", fontSize: size }} />,
      link: "https://www.linkedin.com/company/dj-sanghvi-acm/",
    },
    {
      icon: <LanguageIcon sx={{ color: "#fff", fontSize: size }} />,
      link: "http://djacm.co.in/",
    },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        placeItems: "center",
        width: "fit-content",
        gap: "1.5em",
        m: { xs: "0.25em auto", md: "1em 3em", lg: "1.5em 4em" },
        gridColumn: { xs: "1 / -1", md: "auto" },
      }}>
      {socials.map((item, index) => {
        return (
          <Box key={index} component='a' href={item.link} target='_blank' rel='noreferrer'>
            {item.icon}
          </Box>
        );
      })}
    </Box>
  );
};

export default Socials;
