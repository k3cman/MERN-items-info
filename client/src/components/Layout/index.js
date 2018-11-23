import React, { Component } from 'react'
import {withStyles,CssBaseline,AppBar,Toolbar, Typography,Drawer, List, ListItem,ListItemText,ListItemIcon,Divider,Grid,ListSubheader,Collapse } from '@material-ui/core';
import CategoryIcon from '@material-ui/icons/Category'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ItemCard from './ItemCard'

class Layout extends Component {
    state={
        open:false
    }
    handleClick = () => {
        this.setState(state => ({ open: !this.state.open }));
      };
  render() {
      const {classes} = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" color="default" style={{boxShadow:'none', borderBottom:'1px solid rgba(0,0,0,0.12)', background:'white'}} className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    ENMON NEWSLETTER
                </Typography>
            </Toolbar>
        </AppBar>
        <main className={classes.content}>
        <div className={classes.toolbar} />
            <Grid container spacing={8}>
                <Grid item xs={2}>
                    <ItemCard />
                </Grid>
                <Grid item xs={2}>
                    <ItemCard />
                </Grid>
                <Grid item xs={2}>
                    <ItemCard />
                </Grid>
                <Grid item xs={2}>
                    <ItemCard />
                </Grid>
                <Grid item xs={2}>
                    <ItemCard />
                </Grid>
                <Grid item xs={2}>
                    <ItemCard />
                </Grid>
                <Grid item xs={2}>
                    <ItemCard />
                </Grid>
                <Grid item xs={2}>
                    <ItemCard />
                </Grid>
                <Grid item xs={2}>
                    <ItemCard />
                </Grid>
                <Grid item xs={2}>
                    <ItemCard />
                </Grid>
                <Grid item xs={2}>
                    <ItemCard />
                </Grid>
            </Grid>
      </main>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >
        <div className={classes.toolbar} />
        <List component="nav" subheader={<ListSubheader component="div">FILTER</ListSubheader>}>
            <ListItem button onClick={this.handleClick}>
                <ListItemIcon>
                    <CategoryIcon/>
                </ListItemIcon>
                <ListItemText inset primary="KATEGORIJE" />
                {this.state.open ? <ExpandLess /> : <ExpandMore/>} 
            </ListItem>
            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {['Pločice','Sanitarija','Slavine','Kade'].map((text, index) => (
                        <ListItem button key={index}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Collapse>
        </List>
      </Drawer>
      </div>
    )
  }
}

const styles = theme => ({
    root:{
        display:'flex'
    },
    appBar:{
        zIndex: theme.zIndex.drawer + 1,
    },
    content:{
        flexGrow:1,
        padding: theme.spacing.unit * 3,
    },
    drawer:{
        width: 300,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 300,
      },
    toolbar:theme.mixins.toolbar
})

export default withStyles(styles)(Layout);
