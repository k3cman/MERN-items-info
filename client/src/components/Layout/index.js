import React, { Component } from "react";
import { CssBaseline, withStyles } from "@material-ui/core";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Main from "./Main";

const Layout = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <Main />
      <Sidebar />
    </div>
  );
};

const styles = theme => ({
  root: {
    display: "flex"
  }
});

export default withStyles(styles)(Layout);
