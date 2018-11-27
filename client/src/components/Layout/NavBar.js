import React from "react";
import { withStyles, AppBar, Toolbar } from "@material-ui/core";

function NavBar(props) {
  const { classes } = props;
  return (
    <div>
      <AppBar position="fixed" color="default" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <img
              src="http://www.enmongroup.com/assets/images/logo-big.png"
              alt="enmon logo"
              height="40px"
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const styles = theme => ({
  appBar: {
    boxShadow: "none",
    borderBottom: "1px solid rgba(0,0,0,0.12)",
    background: "#FAFAFA",
    display: "flex",
    zIndex: theme.zIndex.drawer + 1,
    justifyContent: "space-between",
    alignItems: "space-between"
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between"
  }
});

export default withStyles(styles)(NavBar);
