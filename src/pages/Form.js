import React, { useState } from "react";

import axios from 'axios';


import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

const initialValues = {
  fullName: "",
  email: "",
  phone: "",
  date: "",
  nationality: "",
  validIdentification: "",
  residentialAddress: "",
  NIF: "",
  initialDeposit: "",
};

export default function Form() {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
 
  
    // Convert the FormData to JSON
    const jsonData = {};
    for (const [key, value] of data.entries()) {
      jsonData[key] = value;
    }

    console.log(jsonData);
  
    // Make the POST request using Axios

    // axios.post('http://localhost:3000', jsonData)
    //   .then(response => {
    //     // Handle the response data
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     // Handle any errors
    //     console.error(error);
    //   });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="fullName"
                  id="fullName"
                  label="Full Name"
                  onChange={handleInputChange}
                  value={values.fullName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={handleInputChange}
                  value={values.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  type="number"
                  label="Phone"
                  name="phone"
                  onChange={handleInputChange}
                  value={values.phone}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="date"
                  name="date"
                  type="date"
                  inputProps={{ min: "yyyy-MM-dd" }} // Add this line
                  onChange={handleInputChange}
                  value={values.date}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="nationality"
                  label="Nationality"
                  id="nationality"
                  onChange={handleInputChange}
                  value={values.nationality}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="validIdentification"
                  label="Valid Identification"
                  id="validIdentification"
                  onChange={handleInputChange}
                  value={values.validIdentification}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="residentialAddress"
                  label="residential Address"
                  id="residentialAddress"
                  onChange={handleInputChange}
                  value={values.residentialAddress}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="NIF"
                  label="NIF"
                  id="NIF"
                  onChange={handleInputChange}
                  value={values.NIF}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="number"
                  name="initialDeposit"
                  label="initial Deposit"
                  id="initialDeposit"
                  onChange={handleInputChange}
                  value={values.initialDeposit}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
            send
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
