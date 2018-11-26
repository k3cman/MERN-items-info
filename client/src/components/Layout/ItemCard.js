import React from 'react'
import {Paper, Typography, withStyles,IconButton, FormHelperText} from '@material-ui/core';
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import AddCircleIcon from '@material-ui/icons/AddCircle'

function ItemCard(props) {
    const {classes} = props;
  return (
    <div className={classes.root}>
      {/* <Paper className={classes.root}>
      <div className={classes.left}>
      <Typography variant="subtitle1" style={{fontWeight:'bold'}}>
            {props.title}
          </Typography>
          <img src={props.brandImg} style={{height:'15px', width:'auto'}} />
      </div>
          <div className={classes.right}>
          <a href={props.url} target="_blank">
          <IconButton variant="fab" color="default" aria-label="Download">
            <ArrowDownward />
          </IconButton>
          </a>
          </div>
      </Paper> */}
      
        <hr />
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <Typography variant="h6" style={{paddingLeft:'8px'}}>
        {props.title}
        </Typography>
        <IconButton style={{padding:4}} variant="fab" color="primary" aria-label="Download">
            <ArrowDownward fontSize="small" />
          </IconButton>
      </div>
      
      <img src={props.brandImg} style={{height:'15px', width:'auto', paddingLeft:'8px'}} />
      
    </div>
  )
}

const styles = theme => ({
  root:{
    marginBottom:10
  }
})

// const styles = theme => ({
//     root: {
//       ...theme.mixins.gutters(),
//       paddingTop: theme.spacing.unit * 2,
//       paddingBottom: theme.spacing.unit * 2,
//       display:'flex',
//       justifyContent:'space-between'
//     },
//   });

export default withStyles(styles)(ItemCard)
