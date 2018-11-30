import React, { Component } from "react";
import { withStyles, Grid } from "@material-ui/core";

class Main extends Component {
  render() {
    const { classes } = this.props;
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container spacing={8} />
      </main>
    );
  }
}

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  toolbar: theme.mixins.toolbar
});

export default withStyles(styles)(Main);
