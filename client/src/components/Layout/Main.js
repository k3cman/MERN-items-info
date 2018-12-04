import React, { Component } from "react";
import { withStyles, Grid, Typography, IconButton } from "@material-ui/core";

import BrandHeading from "../Common/BrandHeading";
import RenderItemCards from "../Common/RenderItemCards";

class Main extends Component {
  state = {
    data: [],
    loading: true
  };
  componentWillMount = () => {
    fetch("http://localhost:5000/collections/all")
      .then(res => res.json())
      .then(data => this.setState({ data: data, loading: false }));
  };

  render() {
    const { classes } = this.props;
    if (this.state.loading) {
      return (
        <main className={classes.content}>
          {/* <div className={classes.toolbar} /> */}
          LOADING
        </main>
      );
    } else {
      return (
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.state.data.map((brand, index) => (
            <RenderItemCards
              key={index}
              brand={brand.brand}
              items={brand.items}
            />
          ))}
        </main>
      );
    }
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
