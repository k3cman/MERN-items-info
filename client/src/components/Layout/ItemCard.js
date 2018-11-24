import React from 'react'
import {Paper, Typography, withStyles,IconButton} from '@material-ui/core';
import ArrowDownward from '@material-ui/icons/ArrowDownward'

function ItemCard(props) {
    const {classes} = props;
    const brandLogo = () => {
      if(props.brand === 'Marazzi'){
        return (<img src="./img/marazzi.png" height="20" />);
      }else if(props.brand === 'Hispania'){
        return (<img src="./img/hispania.jpg" height="20" />)
      }else {
        return (<Typography variant="p">{props.brand}</Typography>)
      }
    }
  return (
    <div>
      <Paper className={classes.root}>
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
