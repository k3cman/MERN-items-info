import React from "react";
import { withStyles } from "@material-ui/core";
import BrandWrapper from "../common/BrandWrapper";

function Main(props) {
  const { classes } = props;
  return (
    <main className={classes.content}>
      <div className={classes.toolbar}>
        <BrandWrapper />
      </div>
    </main>
  );
}

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    marginTop: 40
  },
  toolbar: theme.mixins.toolbar
});

export default withStyles(styles)(Main);
