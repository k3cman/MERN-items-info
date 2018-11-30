import React, { Component, Fragment } from "react";
import { withStyles, Drawer, List, ListSubheader } from "@material-ui/core";

class Sidebar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="right"
      >
        <div className={classes.search} />
        <List
          dense
          component="nav"
          subheader={<ListSubheader component="div">FILTER</ListSubheader>}
        />
      </Drawer>
    );
  }
}

const styles = theme => ({
  drawer: {
    width: 300,
    flexShrink: 0,
    backgroundColor: "#FAFAFA"
  },
  drawerPaper: {
    width: 300,
    backgroundColor: "#FAFAFA"
  },
  search: {
    marginTop: 1,
    height: 64,
    borderBottom: "1px solid rgba(0,0,0,0.12)"
  },
  toolbar: theme.mixins.toolbar
});

export default withStyles(styles)(Sidebar);
