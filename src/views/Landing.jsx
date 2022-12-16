import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Faq from "../components/Faq/Faq";
import Main from "../components/Main/Main";
import Navbar from "../components/Navbar/Navbar";
import SignUp from "../components/Signup/SignUp";
import Socials from "../components/Socials/Socials";
import { images } from "../constants";

const Landing = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <video
        autoPlay
        loop
        muted
        src={images.bg_mov}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          inset: "0",
          zIndex: "-1",
        }}
      />
      <Router>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "100px 1fr", md: "auto 1fr" },
            gridTemplateRows: { xs: "100px 1fr auto", md: "5em 1fr 5em" },
            minHeight: { xs: "100%", sm: "100vh" },
            // height: "100%",
          }}>
          <Navbar />

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              flexDirection: "column",
              p: { xs: "0 1em", md: "0 1.5em" },
            }}>
            <IconButton onClick={handleClick}>
              <AccountCircleOutlinedIcon
                sx={{ color: "#fff", fontSize: { xs: "4rem", md: "3rem" } }}
              />
            </IconButton>
            <Menu
              id='basic-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              sx={{ color: "text.dark", fontWeight: "bold" }}>
              <MenuItem onClick={handleClose} component={Link} to='/signup'>
                Signup
              </MenuItem>
            </Menu>
          </Box>
          <Box
            sx={{
              gridColumn: { xs: "1 / -1", md: "auto" },
              display: "grid",
              placeItems: "center",
            }}>
            <Routes>
              <Route
                path='/'
                element={<Main countdownTimestampMs={1677974399000} />}
              />
              <Route
                path='/themes'
                element={<div className='test'>Themes</div>}
              />
              <Route
                path='/rules'
                element={<div className='test'>Rules</div>}
              />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/faqs' element={<Faq />} />
            </Routes>
          </Box>
          <Socials />
        </Box>
      </Router>
    </>
  );
};

export default Landing;
