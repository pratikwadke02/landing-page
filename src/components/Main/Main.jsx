import React, { useState, useEffect } from "react";
import { Box, Typography, Menu } from "@mui/material";

import { getRemainingTimeUntilMsTimestamp } from "../utils/TimerUtil";
import { HorizontalRule } from "@mui/icons-material";

const defaultRemainingTime = {
  months: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const Main = ({ countdownTimestampMs, hamburger }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const interval = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(interval);
  }, [countdownTimestampMs]);

  const updateRemainingTime = countdown => {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "grid",
          maxWidth: "900px",
          m: { xs: "2em", md: "3em" },
          textAlign: { xs: "center", sm: "start" },
        }}>
        <Typography
          variant='h1'
          sx={{
            color: "#fff",
            fontSize: { xs: "80px", sm: "100px", md: "150px" },
            borderBottom: { xs: "#fff 10px solid", md: "#fff 15px solid" },
            maxWidth: { xs: "350px", md: "550px" },
            height: "0.8em",
          }}>
          LOC 5.0
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: "3em",
          }}>
          <Typography
            variant='h1'
            sx={{ color: "#fff", fontSize: { xs: "30px", md: "60px" } }}>
            LINES OF CODE
          </Typography>

          <Typography
            variant='h1'
            sx={{
              color: "#fff",
              fontSize: { xs: "16px", md: "24px" },
              mt: "0.5em",
            }}>
            DJSCE ACM 24-hour annual hackathon
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          mt: "3em",
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", sm: "flex-end" },
        }}>
        <Box
          sx={{
            // mt: 10,
            p: { xs: 0, md: 5 },
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            alignItems: "center",
            justifyContent: "center",
            mr: { md: "3em" },
          }}>
          <Box
            sx={{
              display: "grid",
              placeItems: "center",
              borderRight: "#fff 3px solid",
              p: 2,
            }}>
            <Box>
              <Typography
                sx={{ color: "#fff", fontSize: { xs: "20px", md: "32px" } }}>
                {remainingTime.days}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{ color: "#fff", fontSize: { xs: "20px", md: "32px" } }}>
                Days
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "grid",
              placeItems: "center",
              borderRight: "#fff 3px solid",
              p: 2,
            }}>
            <Box>
              <Typography
                sx={{ color: "#fff", fontSize: { xs: "20px", md: "32px" } }}>
                {remainingTime.hours}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{ color: "#fff", fontSize: { xs: "20px", md: "32px" } }}>
                Hours
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "grid",
              placeItems: "center",
              borderRight: "#fff 3px solid",
              p: 2,
            }}>
            <Box>
              <Typography
                sx={{ color: "#fff", fontSize: { xs: "20px", md: "32px" } }}>
                {remainingTime.minutes}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{ color: "#fff", fontSize: { xs: "20px", md: "32px" } }}>
                Mins
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "grid",
              placeItems: "center",
              p: 3,
            }}>
            <Box>
              <Typography
                sx={{ color: "#fff", fontSize: { xs: "20px", md: "32px" } }}>
                {remainingTime.seconds}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{ color: "#fff", fontSize: { xs: "20px", md: "32px" } }}>
                Secs
              </Typography>
            </Box>
          </Box>
          <Typography
            variant='h1'
            sx={{
              color: "#fff",
              fontSize: { xs: "24px", md: "32px" },
              gridColumn: "1 / -1",
              textAlign: "center",
            }}>
            3<sup>rd</sup> & 4<sup>th</sup> March, 2023
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
