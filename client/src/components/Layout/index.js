import React, { Component } from "react";
import { withStyles, CssBaseline } from "@material-ui/core";
import NavBar from "./NavBar";
import Main from "./Main";
import SideBar from "./SideBar";

class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <NavBar />
        <Main />
        <SideBar />
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    display: "flex"
  }
});

export default withStyles(styles)(Layout);
