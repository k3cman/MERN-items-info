import React, { Component } from "react";
import {
  withStyles,
  Drawer,
  List,
  ListSubheader,
  ListItemIcon,
  ListItem,
  ListItemText,
  Collapse
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import InboxIcon from "@material-ui/icons/Inbox";
import CategoriesList from "../Common/CategoriesList";
import { connect } from "react-redux";

class Sidebar extends Component {
  state = {
    open: false
  };
  handleClick = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    const { classes } = this.props;
    const { brands, categories, checked } = this.props.sidebar;
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
        <CategoriesList cats={categories} checked={checked} />
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText inset primary="Brendovi" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {brands.map((brand, index) => (
              <ListItem key={index} dense button>
                <ListItemText inset primary={brand} />
              </ListItem>
            ))}
          </List>
        </Collapse>
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
  toolbar: theme.mixins.toolbar,
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

const mapStateToProps = state => ({
  sidebar: state.all
});

export default connect(
  mapStateToProps,
  {}
)(withStyles(styles)(Sidebar));
