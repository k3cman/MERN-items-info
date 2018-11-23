import React, { Component } from 'react'
import {withStyles,CssBaseline,AppBar,Toolbar, Typography,Grid, LinearProgress } from '@material-ui/core';
import ItemCard from './ItemCard'
import DrawerRight from './Drawer'
import {connect} from 'react-redux';
import {getItems} from '../../actions/ItemActions';

class Layout extends Component {
    state={
        
        items:[],
        loading:true
    }
    componentDidMount = () => {
        fetch('https://enmon-nl-server.herokuapp.com/items/')
        .then(res => res.json())
        .then(data => this.setState({items:data, loading:false}))
        .catch(err => console.log(err))

        this.props.getItems();
        console.log(this.props.items.loading)
    }

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
            {this.props.items.loading ? <LinearProgress variant="query" /> : this.props.items.items.map((item,index)=> (<Grid key={index} item xs={2}>
                    <ItemCard
                        title={item.Naziv}
                        brand={item.Brand}
                        url={item.Url}
                    />
                </Grid>))}
                
            </Grid>
      </main>
      <DrawerRight />
      {/* <Drawer
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
      </Drawer> */}
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

const mapStateToProps = state => ({
    items:state.items
})

export default connect(mapStateToProps,{getItems})(withStyles(styles)(Layout));
