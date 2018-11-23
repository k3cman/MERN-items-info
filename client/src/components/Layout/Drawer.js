import React, {Fragment, Component} from 'react'
import {Drawer,List,ListItem,ListItemIcon,ListItemText,ListSubheader,Collapse,withStyles} from '@material-ui/core'
import CategoryIcon from '@material-ui/icons/Category'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {connect} from 'react-redux'
import {getFilters} from '../../actions/FilterActions'

class DrawerRight extends Component {
    state={
        openCat:false,
        openBrand:false
    }
    handleClick = () => {
        this.setState({ openCat: !this.state.openCat });
      };
      handleClick2 = () => {
        this.setState({openBrand: !this.state.openBrand});
      };
    componentDidMount = () => {
        this.props.getFilters()
    }
    render(){
        const brands = this.props.filter[1].map((brand, index) => (<ListItem button key={brand}>
            <ListItemText primary={brand} />
        </ListItem>))
        const {classes} = this.props;
      return (
        <Fragment>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor="right"
          >
            <div className={classes.toolbar} />
            <List dense component="nav" subheader={<ListSubheader component="div">FILTER</ListSubheader>}>
                <ListItem button onClick={this.handleClick}>
                    <ListItemIcon>
                        <CategoryIcon/>
                    </ListItemIcon>
                    <ListItemText inset primary="KATEGORIJE" />
                    {this.state.open ? <ExpandLess /> : <ExpandMore/>} 
                </ListItem>
                <Collapse in={this.state.openCat} timeout="auto" unmountOnExit>
                    <List dense component="div" disablePadding>
                        {this.props.filter[0].map((text, index) => (
                            <ListItem button key={index}>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Collapse>
                <ListItem button onClick={this.handleClick2}>
                    <ListItemIcon>
                        <CategoryIcon/>
                    </ListItemIcon>
                    <ListItemText inset primary="Brand" />
                    {this.state.openBrand ? <ExpandLess /> : <ExpandMore/>} 
                </ListItem>
                <Collapse in={this.state.openBrand} timeout="auto" unmountOnExit>
                    <List component="div" dense disablePadding>
                        {brands}
                    </List>
                </Collapse>
            </List>
          </Drawer>
        </Fragment>
      )
    }
}

const styles = theme => ({
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
    filter: state.filters
})

export default connect(mapStateToProps,{getFilters})(withStyles(styles)(DrawerRight))
