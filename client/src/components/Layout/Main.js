import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { getItems } from "../../actions/ItemActions";

import RenderItemCards from "../Common/RenderItemCards";

class Main extends Component {
  state = {
    data: [],
    loading: true
  };
  componentDidMount = () => {
    fetch("http://localhost:5000/collections/all")
      .then(res => res.json())
      .then(data => this.setState({ data: data.all, loading: false }));

    this.props.getItems();
  };

  render() {
    const { classes } = this.props;
    const { loading, data } = this.props.data;
    if (loading) {
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
          {data.map((brand, index) => (
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
  toolbar: {
    marginTop: 20
  }
});

const mapStateToProps = state => ({
  data: state.all
});

export default connect(
  mapStateToProps,
  { getItems }
)(withStyles(styles)(Main));
