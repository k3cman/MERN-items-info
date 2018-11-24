import React, { Component } from 'react'
import {withStyles,CssBaseline,AppBar,Toolbar, Typography,Grid, LinearProgress } from '@material-ui/core';
import ItemCard from './ItemCard'
import DrawerRight from './Drawer'
import {connect} from 'react-redux';
import {getItems} from '../../actions/ItemActions';

class Layout extends Component {
    componentDidMount = () => {
        this.props.getItems();
        
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
            {this.props.items.loading ? <LinearProgress variant="query" color="secondary" style={{paddingTop:'200px'}} /> : this.props.items.items.map((item,index)=> (<Grid key={index} item xs={3}>
                    <ItemCard
                        title={item.Naziv}
                        brand={item.Brand}
                        url={item.Url}
                        brandImg={item.brandImg}
                    />
                </Grid>))}
                
            </Grid>
      </main>
      <DrawerRight />
     
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
