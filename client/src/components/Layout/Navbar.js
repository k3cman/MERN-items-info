import React from "react";
import { AppBar, Toolbar, withStyles, Typography } from "@material-ui/core";
import EnmonLogo from "../../assets/img/Enmon.png";

function Navbar(props) {
  const { classes } = props;
  return (
    <AppBar position="fixed" color="default" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <img src={EnmonLogo} height="40" alt="enmon logo" />
        <Typography color="primary" variant="body1">
          Newsletters
        </Typography>
      </Toolbar>
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
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 12
  }
});

export default withStyles(styles)(Navbar);
