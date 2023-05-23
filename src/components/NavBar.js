import * as React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import logo from "../assets/Syone_logo.jpeg";
import { List } from "@mui/material";

import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <img className="image-logo" src={logo} alt="logo" />
        <List>
        <Button component={Link} to="/" variant="contained" color="primary"  style={{ border: 'none', marginLeft :'8px', padding: '15px 20px', fontSize: '1rem' }} >
            Home
          </Button>
        <Button component={Link} to="/form" variant="contained" color="primary"  style={{ border: 'none', marginLeft :'8px', padding: '15px 20px', fontSize: '1rem' }} >
            Form
          </Button>
        </List>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
