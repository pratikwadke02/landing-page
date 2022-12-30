import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
// import {
//   Box,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   SwipeableDrawer,
//   Typography,
//   IconButton,
// } from "@mui/material";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const size = "2.5rem";
  const navItems = [
    {
      name: "HOME",
      icon: <HomeOutlinedIcon sx={{ color: "#fff", fontSize: size }} />,
      to: "/",
    },
    {
      name: "THEMES",
      icon: <ContentCopyOutlinedIcon sx={{ color: "#fff", fontSize: size }} />,
      to: "/themes",
    },
    {
      name: "RULES",
      icon: <DescriptionOutlinedIcon sx={{ color: "#fff", fontSize: size }} />,
      to: "rules",
    },
    {
      name: "FAQS",
      icon: <LiveHelpOutlinedIcon sx={{ color: "#fff", fontSize: size }} />,
      to: "/faqs",
    },
  ];

  const toggleDrawer = (anchor, open) => event => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setDrawerOpen(!drawerOpen);
  };

  const list = anchor => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        backgroundColor: "#06021B",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        paddingTop: "20px",
      }}
      role='presentation'
      onClick={toggleDrawer("left", false)}
      onKeyDown={toggleDrawer("left", false)}>
      <Box sx={{ width: "100%" }}>
        <img src={images.acm_logo} alt='' height={50} style={{ marginLeft: "10px" }} />
      </Box>
      <List sx={{ display: "flex", flexDirection: "column" }}>
        {navItems.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              paddingLeft: "20px",
            }}
            to={item.to}
            component={Link}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>
              <Typography variant='h6' sx={{ color: "#fff" }}>
                {item.name}
              </Typography>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Hamburger toggleDrawer={toggleDrawer} />

      <Box
        sx={{
          display: { xs: "none", md: "grid" },
          gridTemplateRows: "auto 1fr",
          gridRow: "1 / -1",
        }}>
        <Box href='http://djacm.co.in/' component='a'>
          <img
            src={images.acm_logo}
            alt='DJACM Logo'
            style={{ maxHeight: "150px", objectFit: "contain" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { md: "1em", lg: "1.5em", xl: "2em" },
            pt: "2em",
          }}>
          {navItems.map((item, index) => {
            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textDecoration: "none",
                }}
                to={item.to}
                component={Link}>
                <Box sx={{ pt: "10px" }}>{item.icon}</Box>
                <Typography variant='h4' sx={{ color: "#fff" }}>
                  {item.name}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>

      <SwipeableDrawer
        anchor={"left"}
        open={drawerOpen}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}>
        {list("left")}
      </SwipeableDrawer>
    </>
  );
};

const Hamburger = ({ toggleDrawer }) => {
  return (
    <Box
      sx={{
        display: { xs: "block", md: "none" },
        p: { xs: 2, md: 5 },
      }}>
      <IconButton sx={{ color: "#fff" }} onClick={toggleDrawer("left", true)}>
        <MenuIcon fontSize='large' />
      </IconButton>
    </Box>
  );
};

export default Navbar;
