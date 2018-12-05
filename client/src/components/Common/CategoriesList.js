import React from "react";
import {
  withStyles,
  List,
  ListItemSecondaryAction,
  Checkbox,
  ListItemText,
  ListItem
} from "@material-ui/core";

function CategoriesList(props) {
  const { classes } = props;
  return (
    <List dense className={classes.root}>
      <ListItem button>
        <ListItemText primary="TEXT" />
        <ListItemSecondaryAction>
          <Checkbox checked />
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}

const styles = theme => ({
  root: {
    width: "100%"
  }
});

export default withStyles(styles)(CategoriesList);
