import React, { Component } from "react";
import {
  Drawer,
  List,
  ListSubheader,
  withStyles,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  ListItem
} from "@material-ui/core";
import { array } from "prop-types";

class SideBar extends Component {
  state = {
    categories: [],
    checked: []
  };
  componentWillMount = () => {
    fetch("http://localhost:5000/api/categories")
      .then(res => res.json())
      .then(categories => this.setState({ categories }))
      .then(cats =>
        this.setState({ checked: this.state.categories.map(o => o.category) })
      );
  };
  // handleToggle = e => () => {
  //   let checked = this.state.checked;
  //   checked = checked.filter(item => {
  //     return item !== e;
  //   });
  //   this.setState({ checked });
  //   console.log(checked);
  // };
  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  };
  render() {
    console.log(this.state.checked);
    const { classes } = this.props;
    return (
      <Drawer
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
        variant="permanent"
        anchor="right"
      >
        <div
          style={{ marginTop: 64, borderTop: "1px solid rgba(0,0,0,0.12)" }}
        />
        <List
          dense
          component="nav"
          subheader={<ListSubheader component="div">KATEGORIJE</ListSubheader>}
        >
          <List dense component="div" disablePadding>
            {this.state.categories.map((o, index) => {
              return (
                <ListItem
                  button
                  key={index}
                  onClick={this.handleToggle(o.category)}
                >
                  <ListItemText primary={o.category} />
                  <ListItemSecondaryAction>
                    <Checkbox
                      color="primary"
                      onChange={this.handleToggle(o.category)}
                      checked={this.state.checked.indexOf(o.category) !== -1}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        </List>
      </Drawer>
    );
  }
}

const styles = theme => ({
  drawer: {
    width: 300,
    flexShrink: 0,
    backgroundColor: "#FAFAFA",
    zIndex: "3000"
  },
  drawerPaper: {
    width: 300,
    backgroundColor: "#FAFAFA"
  },
  toolbar: theme.mixins.toolbar
});

export default withStyles(styles)(SideBar);
