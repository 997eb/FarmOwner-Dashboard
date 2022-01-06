/* Clean this shet */

import React from 'react';
import Chart from "chart.js";
import './content.css'
import  { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import logo2 from '../../assets/GhallahBlack.png'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import PalmsTable from './Tables/palmTable'
import TasksTable from './Tables/TasksTable'
import EmployeesTable from './Tables/EmployeesTable'
import BranchesTable from './Tables/BranchesTable'
import Dashboard from './dashboard/dashboard'
import palmBlack from '../../assets/palm-tree.png'
import locationBlack from '../../assets/address.png'
import taskBlack from '../../assets/checkmark.png'
import FarmerBlack from '../../assets/farmer.png'
import palmColor from '../../assets/palm-tree-3.png'
import locationColor from '../../assets/address-2.png'
import taskColor from '../../assets/correct.png'
import farmerColor from '../../assets/farm.png'
import palmG from '../../assets/palmG.png'
import Swal from 'sweetalert2'
import infoC from '../../assets/infoC.png'
import info from '../../assets/info.png'


Chart.defaults.global.defaultFontFamily = "'Roboto', Bold 700"

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({

  MuiSvgIcon:{
    width: '1.3em',
    height: '1.3em',
  },
  logo:{
    width: '65px',
    marginTop: '5%',
    marginLeft: '70px'
  },
Stitle: {
  paddingTop:20,
    fontSize: 'large',
    fontWeight: 'bolder',
    color: 'black',
},

Sidetitle: {
  paddingTop:20,
  paddingLeft: 10,
    fontSize: 'large',
    fontWeight: 'bolder',
    color: 'black',
},

root: {
  display: 'flex',
  backgroundColor:'rgb(246, 246, 246)',
  

},

square: {
  height: 'auto',
 // backgroundColor: 'rgba(54,122,62, 0.1)',
  position:'absolute',                
  marginLeft: 'auto',
  marginRight: 'auto',
  borderRadius: '15px',
  left: 20,
  right: 20,
  textAlign: 'center',
  bottom:30,      

},

menuButton: {
  marginRight: theme.spacing(2),
},
logoContainer: {
 flexGrow: 1,

},
title:{
fontWeight: 'bold',
flexGrow: 1,
},

subTitle:{
  fontWeight: 'normal',
},

drawer: {
  [theme.breakpoints.up('sm')]: {
    width: drawerWidth,
    flexShrink: 0,
    
  },
},
appBar: {
  [theme.breakpoints.up('xs')]: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    color:'rgb(92, 91, 91)',
 // backgroundColor:'#367a3e',
 backgroundColor:'#f6f6f6',
  boxShadow:'none',
    //zIndex: theme.zIndex.drawer + 1,  

},


[theme.breakpoints.down('xs')]: {
  width: `100%`,
  marginLeft: '0px',
  backgroundColor:'#367a3e',
  color:'#fff',
 },
},
menuButton: {
  marginRight: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
},
// necessary for content to be below app bar
toolbar: theme.mixins.toolbar,
drawerPaper: {
  width: drawerWidth,
},


content: {
  flexGrow: 1,
  padding: theme.spacing(3),
},

toolbar:{
  minHeight:'40px'
},

paperAnchorDockedLeft:{
    borderRight:'0px solid rgba(0, 0, 0, 0.12)'
      },

      MuiList:{
          marginTop:'30.5px',
        },


acive:{
 backgroundColor:  'rgba(213, 213, 213, 0.2)',
  width: '90%',
  height: 'auto',
  paddingLeft:0,
  borderRadius: 5, 
  marginLeft: 'auto',
  marginRight: 'auto',
},

sub:{
  width:'200px',
},

subButton:{
  width:'170px',
  height:'35px',
  color:'white',
  fontWeight:'bold',
  fontSize:'0.8rem',
backgroundImage: 'linear-gradient(to right,  #499754, #477743 )',
  borderRadius:'30px',
  border:'0px solid rgba(0, 0, 0, 0.12)'
},
}
));

function Content(props) {
  const { window } = props;
  const {location: {pathname}} = props
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [data, setDate] = React.useState({});
  const [picker,SetPicker] = React.useState('');
  const [dicker,SetDPicker] = React.useState('');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };


   const {match , history} = props


   const handleClose = () => {
    setAnchorEl(null);
   
  };

  const handleSignOut = () => {

    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      customClass: {
        confirmButton: 'background'
    },
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Sign Me Out!'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('auth');
        history.push("/");
        console.log("clicked")
      }
    }) 
  };

  const drawer = (

    <div>
          <Hidden smDown>
      <div className={classes.toolbar}> <img className={classes.logo} src={logo2}/>   </div>
      </Hidden>

<div className= {classes.MuiList}></div>
   <List className="MuiList">
        {match.path ==='/dashboard' ? 

<ListItem button key='Home' className={classes.acive} component={Link} to = {`/dashboard`}>

<ListItemIcon>
<img className="sideBarIcon" src={infoC}/>
</ListItemIcon>
<ListItemText primary='Dashboard'/>
</ListItem>

:

<ListItem button key='Home'  component={Link} to = {`/dashboard`}>

<ListItemIcon>
<img className="sideBarIcon" src={info}/>
</ListItemIcon>
<ListItemText primary='Dashboard'/>
</ListItem>
}

{match.path ==='/PalmTable' ? 

<ListItem button key='PalmTable' className={classes.acive} component={Link} to = {`/PalmTable`}>
<ListItemIcon>
<img className="sideBarIcon" src={palmColor}/>
</ListItemIcon>
<ListItemText primary='Palm Table'/>
</ListItem>:

<ListItem button key='PalmTable'  component={Link} to = {`/PalmTable`}>

<ListItemIcon>
<img className="sideBarIcon" src={palmBlack}/>
</ListItemIcon>
<ListItemText primary='Palm Table'/>
</ListItem>
}


{match.path ==='/TasksTable' ? 


<ListItem button key='TasksTable' className={classes.acive} component={Link} to = {'/TasksTable'}>
  <ListItemIcon>
  <img className="sideBarIcon" src={taskColor}/>

  </ListItemIcon>
  <ListItemText primary='Tasks Table'/>
 
</ListItem>

:

<ListItem button key='TasksTable' component={Link} to = {'/TasksTable'}>
  <ListItemIcon>
  <img className="sideBarIcon" src={taskBlack}/>

  </ListItemIcon>
  <ListItemText primary='Tasks Table'/>
 
</ListItem>
}

{match.path ==='/EmployeesTable' ? 
<ListItem button key='EmployeeTable' className={classes.acive} component={Link} to = {'/EmployeesTable'}>

  <ListItemIcon>
  <img className="sideBarIcon" src={farmerColor}/>  </ListItemIcon>
  <ListItemText primary='Employee Table'/>
 
</ListItem>

:
<ListItem button key='EmployeeTable' component={Link} to = {'/EmployeesTable'}>

<ListItemIcon>
<img className="sideBarIcon" src={FarmerBlack}/>  </ListItemIcon>
<ListItemText primary='Employee Table'/>

</ListItem>
}

{match.path ==='/BranchesTable' ? 
<ListItem button key='BranchesTable' className={classes.acive} component={Link} to = {'/BranchesTable'}>

  <ListItemIcon>
  <img className="sideBarIcon" src={locationColor}/>  </ListItemIcon>
  <ListItemText primary='Branches Table'/>
 
</ListItem>

:
<ListItem button key='BranchesTable' component={Link} to = {'/BranchesTable'}>

<ListItemIcon>
<img className="sideBarIcon" src={locationBlack}/>  </ListItemIcon>
<ListItemText primary='Branches Table'/>

</ListItem>
}



      </List>

      <list>
      <div  className={classes.square}>
      <img className={classes.sub} src={palmG}/>
      <button onClick={handleSignOut} className={classes.subButton}> Subscribtion</button>

         
      </div>
      </list>

    </div>

  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
    <CssBaseline />
    <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} onClick={handleDrawerToggle} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.logoContainer}>
        Farm Owner
      </Typography>
         
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="green"
              >
                < AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
              </Menu>
            </div>
       
        </Toolbar>
      </AppBar>
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
            paperAnchorDockedLeft: classes.paperAnchorDockedLeft,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>

      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
            paperAnchorDockedLeft: classes.paperAnchorDockedLeft
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>

      </Hidden>
    </nav>
    <main className={classes.content}>
      <div className={classes.toolbar} />
{match.path ==='/dashboard' && (

  <Dashboard/>


)}
     {match.path === `/PalmTable` && (

<PalmsTable/>

   
)}

{match.path === `/TasksTable` && (
       
       <TasksTable/>
   
)}

{match.path === `/EmployeesTable` && (
       
       <EmployeesTable/>
   
)}

{match.path === `/BranchesTable` && (
       
       <BranchesTable/>
   
)}


    </main>
   
  </div>
);
}



export default Content;


