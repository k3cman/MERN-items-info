import React, { Component } from "react";
import {
  withStyles,
  List,
  ListItemSecondaryAction,
  Checkbox,
  ListItemText,
  ListItem
} from "@material-ui/core";

class CategoriesList extends Component {
  render() {
    const { classes } = this.props;
    console.log(this.props.cats);
    return (
      <List dense className={classes.root}>
        {this.props.cats.map((cat, index) => (
          <ListItem key={index} button>
            <ListItemText primary={cat} />
            <ListItemSecondaryAction>
              <Checkbox checked />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  }
}

const styles = theme => ({
  root: {
    width: "100%"
  }
});

export default withStyles(styles)(CategoriesList);
