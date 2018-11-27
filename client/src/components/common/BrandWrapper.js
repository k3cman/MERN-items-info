import React, { Component, Fragment } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import SingleItem from "./SingleItem";
import { connect } from "react-redux";
import { getBrands } from "../../actions/getItems";

class BrandWrapper extends Component {
  state = {
    data: []
  };

  componentWillMount = () => {
    fetch("http://localhost:5000/api/brands")
      .then(res => res.json())
      .then(data => this.setState({ data }));

    this.props.getBrands();
  };
  render() {
    console.log(this.props.brands);
    if (this.props.brands.loading === false) {
      return (
        <Fragment>
          {this.props.brands.brands.map((o, index) => {
            return (
              <div key={index} style={{ marginTop: 40 }}>
                <img src={o.brand_img} height="20" alt="BrandLogo" />
                <Grid
                  style={{ marginTop: 10 }}
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  spacing={8}
                >
                  <SingleItem brand={o.id} />
                </Grid>
              </div>
            );
          })}
        </Fragment>
      );
    } else {
      return (
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "200px"
          }}
        >
          <CircularProgress style={{ width: 100, height: 100 }} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  brands: state.items
});

export default connect(
  mapStateToProps,
  { getBrands }
)(BrandWrapper);
