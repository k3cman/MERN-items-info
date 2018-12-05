import React, { Component } from "react";
import {
  withStyles,
  List,
  ListItemSecondaryAction,
  Checkbox,
  ListItemText,
  ListItem
} from "@material-ui/core";
import { connect } from "react-redux";
import { updateCategories } from "../../actions/ItemActions";

class CategoriesList extends Component {
  state = {
    checked: []
  };
  handleToggle = cat => {
    const { checked } = this.props;
    const currentIndex = checked.indexOf(cat);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(cat);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    this.props.updateCategories(newChecked);
  };

  render() {
    const { classes } = this.props;

    return (
      <List dense className={classes.root}>
        {this.props.cats.map((cat, index) => (
          <ListItem key={index} button>
            <ListItemText primary={cat} />
            <ListItemSecondaryAction>
              <Checkbox
                onChange={() => this.handleToggle(cat)}
                checked={this.props.checked.indexOf(cat) !== -1}
              />
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

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { updateCategories }
)(withStyles(styles)(CategoriesList));
