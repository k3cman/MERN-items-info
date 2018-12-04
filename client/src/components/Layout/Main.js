import React, { Component } from "react";
import { withStyles, Grid, Typography, IconButton } from "@material-ui/core";

import BrandHeading from "../Common/BrandHeading";
import RenderItemCards from "../Common/RenderItemCards";

class Main extends Component {
  state = {
    brands: [],
    items: {}
  };
  componentWillMount = () => {
    fetch("http://localhost:5000/collections/all")
      .then(res => res.json())
      .then(data => this.setState({ brands: Object.keys(data), items: data }));
  };

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {this.state.brands.map((brand, index) => (
          <RenderItemCards brand={brand} key={index} items={this.state.items} />
        ))}
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
