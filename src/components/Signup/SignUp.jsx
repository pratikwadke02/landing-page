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
import React, { useState } from "react";

const SignUp = () => {
  const labelStyle = { sx: { color: "text.dark" }, color: "primary" };
  const [Details, setDetails] = useState({});
  const [Success, setSuccess] = useState(false);

  const update = e => {
    const { name, value } = e.target;
    if (name === "notify")
      setDetails(x => ({ ...x, [name]: e.target.checked }));
    else setDetails(x => ({ ...x, [name]: value }));
  };

  const signup = async () => {
    const url = "http://127.0.0.1:8000/api/notification/";
    let body = JSON.stringify(Details);
    let res = await fetch(url, {
      method: "POST",
      body,
      headers: [["Content-Type", "application/json"]],
    });
    let data = await res.json();
    let success = res.status == 201;
    console.log(success, data.notify);
    setSuccess(success && data.notify);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#06021B",
        color: "#fff",
        width: { xs: "80%", md: "70%" },
        borderRadius: "30px",
        boxShadow: "#05031680 0 0 20px 25px",
        scale: "0.85",
        translate: "0 -5%",
      }}>
      <Typography
        variant='h1'
        sx={{ p: ".5em 1em", mb: 0, textAlign: "center" }}>
        Signup
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          placeItems: "center",
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
          onChange={update}
          name='first_name'
          disabled={Success}
        />
        <TextField
          id='lname'
          label='Last Name'
          variant='filled'
          fullWidth
          InputLabelProps={labelStyle}
          onChange={update}
          name='last_name'
          disabled={Success}
        />
        <TextField
          id='phone'
          label='Phone no.'
          variant='filled'
          sx={{ gridColumn: "1 / -1" }}
          InputLabelProps={labelStyle}
          onChange={update}
          name='phone_number'
          fullWidth
          disabled={Success}
        />
        <TextField
          id='email'
          label='Email'
          variant='filled'
          sx={{ gridColumn: "1 / -1" }}
          fullWidth
          type='email'
          InputLabelProps={labelStyle}
          onChange={update}
          name='email_id'
          disabled={Success}
        />
        <FormControlLabel
          value='end'
          control={
            <Checkbox
              sx={{ color: "#b98ce4", fontSize: "32px" }}
              color='secondary'
              size='medium'
              onChange={update}
              name='notify'
            />
          }
          label={
            <Typography variant='h3' sx={{ fontSize: "28px" }}>
              I agree to recieve updates regarding LOC 5.0!
            </Typography>
          }
          labelPlacement='end'
          sx={{ gridColumn: "1 / -1" }}
        />
        <Button
          variant='contained'
          sx={{
            fontSize: "32px",
            gridColumn: "1 / -1",
            borderRadius: "10px",
            "&:hover": { color: "#fff" },
            width: "40%",
          }}
          onClick={signup}
          color='secondary'>
          Sign Up
        </Button>

        {Success ? (
          <Typography variant='h2' sx={{ gridColumn: "1 / -1" }}>
            Thank for subscribing for updates!
          </Typography>
        ) : null}
      </Box>
    </Box>
  );
};

export default SignUp;
