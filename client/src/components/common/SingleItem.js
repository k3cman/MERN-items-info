import React, { Component, Fragment } from "react";
import { Grid, Typography, IconButton } from "@material-ui/core";
import AddCircle from "@material-ui/icons/AddCircle";

export default class SingleItem extends Component {
  state = {
    data: []
  };
  componentWillMount = () => {
    fetch("http://localhost:5000/api/items/" + this.props.brand)
      .then(res => res.json())
      .then(data => this.setState({ data }));
  };
  render() {
    return (
      <Fragment>
        {this.state.data.map((o, index) => {
          return (
            <Grid key={index} item sm={2}>
              <hr className="myHr" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start"
                }}
              >
                <div>
                  <Typography variant="subtitle1" style={{ margin: 0 }}>
                    {o.title}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="secondary"
                    style={{ margin: 0 }}
                  >
                    -TODO BRAND -
                  </Typography>
                </div>
                <a href={o.pdf_url} target="_blank">
                  <IconButton
                    color="primary"
                    size="mini"
                    aria-label="Add to shopping cart"
                  >
                    <AddCircle size="mini" />
                  </IconButton>
                </a>
              </div>
            </Grid>
          );
        })}
      </Fragment>
    );
  }
}
