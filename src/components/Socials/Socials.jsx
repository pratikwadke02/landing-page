import React from "react";
import { Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Socials = () => {
  const socials = [
    {
      icon: (
        <InstagramIcon
          sx={{ color: "#fff", fontSize: { xs: "4rem", md: "2.5rem" } }}
        />
      ),
      link: "https://www.instagram.com/djsanghvi_acm/",
    },
    {
      icon: (
        <LinkedInIcon
          sx={{ color: "#fff", fontSize: { xs: "4rem", md: "2.5rem" } }}
        />
      ),
      link: "https://www.linkedin.com/company/dj-sanghvi-acm/",
    },
    {
      icon: (
        <LanguageIcon
          sx={{ color: "#fff", fontSize: { xs: "4rem", md: "2.5rem" } }}
        />
      ),
      link: "http://djacm.co.in/",
    },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        placeItems: "center",
        height: "100px",
        width: "300px",
        m: { xs: "5em auto 0", md: "0" },
        gridColumn: { xs: "1 / -1", md: "auto" },
      }}>
      {socials.map((item, index) => {
        return (
          <Box
            key={index}
            component='a'
            href={item.link}
            target='_blank'
            rel='noreferrer'>
            {item.icon}
          </Box>
        );
      })}
    </Box>
  );
};

export default Socials;
