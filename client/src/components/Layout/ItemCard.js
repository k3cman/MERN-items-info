import React from 'react'
import {Paper, Typography, withStyles,IconButton} from '@material-ui/core';
import ArrowDownward from '@material-ui/icons/ArrowDownward'

function ItemCard(props) {
    const {classes} = props;
  return (
    <div>
      <Paper className={classes.root}>
      <div className={classes.left}>
      <Typography variant="h6" component="h3">
            {props.title}
          </Typography>
          <Typography component="p">
          {props.brand}
          </Typography>
      </div>
          <div className={classes.right}>
          <a href={props.url} target="_blank">
          <IconButton variant="fab" color="default" aria-label="Download">
            <ArrowDownward />
          </IconButton>
          </a>
          </div>
      </Paper>
    </div>
  )
}

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      display:'flex',
      justifyContent:'space-between'
    },
  });

export default withStyles(styles)(ItemCard)
