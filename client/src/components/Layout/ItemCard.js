import React from 'react'
import {Paper, Typography, withStyles} from '@material-ui/core';

function ItemCard(props) {
    const {classes} = props;
  return (
    <div>
      <Paper className={classes.root}>
          <Typography variant="h6" component="h3">
            NASLOV
          </Typography>
          <Typography component="p">
          Paper can be used to build surface or other elements for your application.
          </Typography>
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
