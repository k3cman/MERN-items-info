import React, { Component } from 'react'
import {withStyles,CssBaseline,AppBar,Toolbar, Typography,Grid, LinearProgress,InputBase,Modal,CircularProgress,Grow} from '@material-ui/core';
import ItemCard from './ItemCard'

import SearchIcon from '@material-ui/icons/Search'
import DrawerRight from './Drawer'
import {connect} from 'react-redux';
import {getItems} from '../../actions/ItemActions';
import {searchItems} from '../../actions/FilterActions';

class Layout extends Component {
    state={
        searchInput:'',
        loading:false
    }
    componentDidMount = () => {
        this.props.getItems();
        if(this.props.items.loading === false){
            this.setState({loading:true})
        }
        
    }
    onInputChange = (e) => {
        this.setState({[e.target.name]:e.target.value})

        // this.props.searchItems(this.state.searchInput);
    }

  render() {
      const {classes} = this.props;
      console.log(this.props.items.loading)
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" color="default" style={{boxShadow:'none', borderBottom:'1px solid rgba(0,0,0,0.12)', background:'#FAFAFA'}} className={classes.appBar}>
            <Toolbar style={{display:'flex', justifyContent:'space-between'}}>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <img src="http://www.enmongroup.com/assets/images/logo-big.png" alt="enmon logo" height="40px" />
            <Typography variant="h6" color="primary">NewsLetter</Typography>
            </div>
                
                {this.props.items.loading ? <LinearProgress style={{width:'400px'}} /> : null}
                <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                disabled
                name="searchInput"
                value={this.state.searchInput}
                onChange={this.onInputChange}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            </Toolbar>
        </AppBar>
        <main className={classes.content}>
        <div className={classes.toolbar} />
            <Grid container spacing={8}>
            
            {this.props.items.loading ?
                 null
                 : this.props.items.items.map((item,index)=> (<Grid key={index} item xs={3}>
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
        display:'flex',
        zIndex: theme.zIndex.drawer + 1,
        justifyContent:"space-between",
        alignItems:'space-between'
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
    toolbar:theme.mixins.toolbar,
    search: {
        position: 'relative',
        width:275,
        borderLeft:'1px solid rgba(0,0,0,0.12)',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing.unit * 3,
        },
      },
      searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
        width: '100%',
      },
      inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: 200,
        },
      },
      paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
      },
})

const mapStateToProps = state => ({
    items:state.items
})

export default connect(mapStateToProps,{getItems,searchItems})(withStyles(styles)(Layout));
