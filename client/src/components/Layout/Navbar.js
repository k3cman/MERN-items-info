import React from "react";
import { AppBar, Toolbar, withStyles } from "@material-ui/core";

function Navbar(props) {
  const { classes } = props;
  return (
    <AppBar position="fixed" color="default" className={classes.appBar}>
      <Toolbar className={classes.toolbar} />
    </AppBar>
  );
}

const styles = theme => ({
  appBar: {
    display: "flex",

    justifyContent: "space-between",
    alignItems: "space-between",
    boxShadow: "none",
    borderBottom: "1px solid rgba(0,0,0,0.12)",
    background: "#FAFAFA"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  }
});

export default withStyles(styles)(Navbar);
