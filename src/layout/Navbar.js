import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

function Navbar(props) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#FFFFFF" }} elevation={0}>
        <Toolbar>
          <img
            src={require("../assets/logo.png")}
            alt=""
            width={172}
            height={54}
          />
        </Toolbar>
      </AppBar>
      <Box component="nav"></Box>
      <Box
        component="main"
        sx={{ p: 3, marginLeft: "auto", marginRight: "auto" }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

export default Navbar;
