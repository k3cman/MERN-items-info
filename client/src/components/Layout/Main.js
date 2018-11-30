import React, { Component } from "react";
import { withStyles, Grid, Typography, IconButton } from "@material-ui/core";

import BrandHeading from "../Common/BrandHeading";
import RenderItemCards from "../Common/RenderItemCards";

class Main extends Component {
  state = {
    data: []
  };
  componentWillMount = () => {
    fetch("http://localhost:5000/collections/all")
      .then(res => res.json())
      .then(data => {
        Object.keys(data).forEach(key => {
          this.setState({
            data: [
              {
                key: [...data[key]]
              }
            ]
          });
          console.log(key, data[key]);
        });
      });
  };

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <RenderItemCards />
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
