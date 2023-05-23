import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

import { Button, Container, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const PrincipaleButton = styled(Button)(({ theme }) => ({
  marginTop: "20px",
  marginBottom: "20px",
  backgroundColor: "#fff",
  border: 0,
  borderRadius: "56px",
  color: "#0078d0",
  cursor: "pointer",
  display: "inline-block",
  fontFamily:
    "system-ui,-apple-system,system-ui,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif",
  fontSize: "18px",
  fontWeight: 600,
  outline: 0,
  padding: "16px 21px",
  position: "relative",
  textAlign: "center",
  textDecoration: "none",
  userSelect: "none",
  WebkitUserSelect: "none",
  touchAction: "manipulation",
  "&:hover": {
    backgroundColor: "#fff",
    color: "#0078d0",
    boxShadow:
      "rgba(255, 255, 255, .2) 0 3px 15px inset, rgba(0, 0, 0, .1) 0 3px 5px, rgba(0, 0, 0, .1) 0 10px 13px",
    transform: "scale(1.05)",
  },
}));

export default function InitButton() {
  return (
    <Fragment>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Link to="/form">
            <PrincipaleButton> to form</PrincipaleButton>
          </Link>
        </Box>
      </Container>
    </Fragment>
  );
}
