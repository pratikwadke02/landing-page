import React, { useState, useEffect } from "react";
// import { Box, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { getRemainingTimeUntilMsTimestamp } from "../utils/TimerUtil";

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

  const countdownSize = { xs: "0.75rem", md: "1rem", lg: "1.5rem" };
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "grid",
        gridTemplateRows: "1fr auto",
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", sm: "start" },
          maxWidth: "900px",
          m: { xs: "0 2em", md: "1em 3em 0", lg: "2.5em 4em 0" },
          textAlign: { xs: "center", sm: "start" },
        }}>
        <Typography
          variant='h1'
          sx={{
            color: "#fff",
            fontSize: { xs: "3rem", sm: "100px", md: "4.5rem", lg: "6rem", xl: "7.5rem" },
            lineHeight: "1.2",
            borderBottom: { xs: "#fff 10px solid", md: "#fff 12px solid" },
            minWidth: { xs: "7ch", md: "6.25ch" },
          }}>
          LOC 5.0
        </Typography>

        <Box sx={{ mt: { xs: "1em", md: "1.5em", lg: "2em" } }}>
          <Typography
            variant='h2'
            sx={{
              color: "#fff",
              fontSize: { xs: "1.75rem", md: "2rem", lg: "2rem", xl: "3rem" },
              lineHeight: "1.2",
            }}>
            LINES OF CODE
          </Typography>

          <Typography
            variant='h3'
            sx={{
              color: "#fff",
              fontSize: { xs: "1rem", md: "1.25rem", lg: "1.25rem", xl: "1..5rem" },
              mt: "0.5em",
            }}>
            DJSCE ACM 24-hour annual hackathon
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: { xs: "center", sm: "flex-end" },
        }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            alignItems: "center",
            justifyContent: "center",
            m: { md: "0 3em 0 0", lg: "0 5em 0 0" },
          }}>
          <Box
            sx={{
              display: "grid",
              placeItems: "center",
              borderRight: "#fff 3px solid",
              p: 2,
            }}>
            <Box>
              <Typography sx={{ color: "#fff", fontSize: countdownSize }}>
                {remainingTime.days}
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ color: "#fff", fontSize: countdownSize }}>Days</Typography>
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
              <Typography sx={{ color: "#fff", fontSize: countdownSize }}>
                {remainingTime.hours}
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ color: "#fff", fontSize: countdownSize }}>Hours</Typography>
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
              <Typography sx={{ color: "#fff", fontSize: countdownSize }}>
                {remainingTime.minutes}
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ color: "#fff", fontSize: countdownSize }}>Mins</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "grid",
              placeItems: "center",
              p: 3,
            }}>
            <Box>
              <Typography sx={{ color: "#fff", fontSize: countdownSize }}>
                {remainingTime.seconds}
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ color: "#fff", fontSize: countdownSize }}>Secs</Typography>
            </Box>
          </Box>
          <Typography
            variant='h1'
            sx={{
              color: "#fff",
              fontSize: countdownSize,
              gridColumn: "1 / -1",
              textAlign: "center",
            }}>
            4<sup>th</sup> & 5<sup>th</sup> March, 2023
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
