import React, {Fragment, Component} from 'react'
import {Drawer,List,ListItem,ListItemIcon,ListItemText,ListSubheader,Collapse,withStyles, ListItemSecondaryAction, Checkbox,InputBase} from '@material-ui/core'
import CategoryIcon from '@material-ui/icons/Category'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search'
import {connect} from 'react-redux'
import {getFilters,updateItems} from '../../actions/FilterActions'

class DrawerRight extends Component {
    state={
        openCat:false,
        openBrand:false,
        checked:[]
    }
    handleClick = () => {
        this.setState({ openCat: !this.state.openCat });
      };
      handleClick2 = () => {
        this.setState({openBrand: !this.state.openBrand});
      };
    componentDidMount = () => {
        this.props.getFilters();
        sessionStorage.setItem('checked',this.props.filter[0])
        const checked = sessionStorage.getItem('checked');
        this.setState({checked:checked})
    }

    handleToggle = value => () => {
        const  checked  = sessionStorage.getItem('checked');
        const arr = checked.split(',')
        
        const currentIndex = arr.indexOf(value);
        const newChecked = [...arr];
    
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
        sessionStorage.setItem('checked',newChecked)
        this.setState({checked: sessionStorage.getItem('checked')})
        this.props.updateItems(sessionStorage.getItem('checked'))
      };
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
            <List dense component="div" disablePadding>
                        {this.props.filter[0].map((text, index) => (
                            <ListItem button key={index} onClick={this.handleToggle(text)}>
                                <ListItemText primary={text} />
                                <ListItemSecondaryAction>
                                    <Checkbox
                                        onChange={this.handleToggle(text)}
                                        checked={this.state.checked.indexOf(text) !== -1}
                                         />
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
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
    toolbar:theme.mixins.toolbar,
    
})

const mapStateToProps = state => ({
    filter: state.filters
})

export default connect(mapStateToProps,{getFilters,updateItems})(withStyles(styles)(DrawerRight))
