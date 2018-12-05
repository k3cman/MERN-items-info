import React, { Fragment } from "react";
import { CssBaseline, withStyles } from "@material-ui/core";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Main from "./Main";
import { BrowserRouter, Route } from "react-router-dom";
import DetailsWrapper from "./DetailsWrapper";

const Layout = props => {
  const { classes } = props;
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <CssBaseline />
        <Navbar />
        <Route
          exact
          path="/"
          render={() => (
            <Fragment>
              <Main />
              <Sidebar />
            </Fragment>
          )}
        />
        <Route exact path={`/details/:title`} component={DetailsWrapper} />
      </div>
    </BrowserRouter>
  );
};

const styles = theme => ({
  root: {
    display: "flex"
  }
});

export default withStyles(styles)(Layout);
