import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  TextField,
  Checkbox,
  Button,
  Typography,
} from "@mui/material";
import React from "react";

const SignUp = () => {
  const labelStyle = { sx: { color: "text.dark" }, color: "primary" };

  return (
    <Box
      sx={{
        backgroundColor: "#06021B",
        color: "#fff",
        width: { xs: "80%", md: "50%" },
        borderRadius: "20px",
        boxShadow: "#05031680 0 0 20px 25px",
      }}>
      <Typography variant='h1' sx={{ p: ".5em 1em", mb: 0 }}>
        Sign Up
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: "0.5em",
          p: "1.5em",
          pt: "0",
          fontSize: "48px",
          "& .MuiTextField-root": { backgroundColor: "#cb9afb" },
        }}
        component='form'>
        <TextField
          id='fname'
          label='First Name'
          variant='filled'
          fullWidth
          autoFocus
          InputLabelProps={labelStyle}
        />
        <TextField
          id='lname'
          label='Last Name'
          variant='filled'
          fullWidth
          InputLabelProps={labelStyle}
        />
        <TextField
          id='phone'
          label='Phone no.'
          variant='filled'
          sx={{ gridColumn: "1 / -1" }}
          InputLabelProps={labelStyle}
          fullWidth
        />
        <TextField
          id='email'
          label='Email'
          variant='filled'
          sx={{ gridColumn: "1 / -1" }}
          fullWidth
          type='email'
          InputLabelProps={labelStyle}
        />
        <FormControlLabel
          value='end'
          control={
            <Checkbox
              sx={{ color: "#b98ce4", fontSize: "32px" }}
              color='secondary'
            />
          }
          label={
            <Typography variant='h3'>
              Recieve updates regarding LOC 5.0!
            </Typography>
          }
          labelPlacement='end'
        />
        <Button variant='contained' sx={{ fontSize: "32px" }}>
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default SignUp;
