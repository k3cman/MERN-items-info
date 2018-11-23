import React from 'react'
import {Paper, Typography, withStyles,IconButton} from '@material-ui/core';
import ArrowDownward from '@material-ui/icons/ArrowDownward'

function ItemCard(props) {
    const {classes} = props;
    console.log(props)
  return (
    <div>
      <Paper className={classes.root}>
          <Typography variant="h6" component="h3">
            {props.title}
          </Typography>
          <Typography component="p">
          {props.brand}
          </Typography>
          <a href={props.url} target="_blank">
          <IconButton variant="fab" color="default" aria-label="Download">
            <ArrowDownward />
          </IconButton>
          </a>
      </Paper>
    </div>
  )
}

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
  });

export default withStyles(styles)(ItemCard)
