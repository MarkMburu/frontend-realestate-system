import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme,Grid,Badge } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import GroupIcon from '@material-ui/icons/Group';
import {withRouter} from "react-router-dom";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatIcon from '@material-ui/icons/Chat';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import TextureIcon from '@material-ui/icons/Texture';
import PersonIcon from '@material-ui/icons/Person';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PeopleIcon from '@material-ui/icons/People';
import AssessmentIcon from '@material-ui/icons/Assessment';

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawerColor:{
    background:"#231C55",
    // background: "linear-gradient(45deg, rgba(67,59,200,1) 0%, rgba(23,6,122,1) 49%, rgba(21,110,144,1) 100%);",
    // backgroundImage: "linear-gradient(to right top, #160f30, #19123a, #1c1544, #1f174f, #221a5a, #231d62, #242069, #252371, #242677, #242a7d, #222d83, #203189)",
    color:"#fff"
 },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  paper: {
    background: 'black',
    color: 'white'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
 function PermanentDrawerLeft(props) {
    const {history} = props;
   console.log(props)
    const classes = useStyles();
    const itemList = [
        {
            text:"Dashboard",
            icon:<MenuBookIcon />,
            onClick: () => history.push("/")
        },
        {
            text:"Registration",
            icon:<FormatListBulletedIcon/>,
            onClick: () => history.push("/register")
        },
        {
            text:"Transactions(Receipts)",
            icon:<ReceiptIcon/>,
            onClick: () => history.push("/transactions")
        },
        {
            text:"Project Module",
            icon:<GroupIcon/>,
            onClick: () => history.push("/projects")
        },
        {
          text:"Sales",
          icon:<ReceiptIcon/>,
          onClick: () => history.push("/sales")
      },
      {
          text:"Accounting Management",
          icon:<AccountBalanceIcon/>,
          onClick: () => history.push("/accounts")
        },
        {
            text:"Staff",
            icon:<PeopleIcon/>,
            onClick: () => history.push("/staff")  
        }
    ]
    const itemList2=[
        {
            text:"Agents Profile",
          icon:<PersonIcon/>,
          onClick: () => history.push("/agents")
        },
    
        {
            text:"Customer Statements",
            icon:<AssessmentIcon />,
            onClick: () => history.push("/reports")
          },
          {
              text:"Project Report",
            icon:<AssessmentIcon />,
            onClick: () => history.push("/reports")
          },
          {
           text:"Sales report",
            icon:<AssessmentIcon />,
            onClick: () => history.push("/reports")
          }
    ]
    
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Grid container alignItems="center">
                        <Grid item  >
                        <Typography variant="h6" noWrap>
                             R.E.M System
                           </Typography>
                         </Grid>
                         <Grid item sm></Grid>
                     <Grid item  >
                         <IconButton>
                       <Badge badgeContent={4} color="secondary">
                                <NotificationsNoneIcon fontSize="small"/>
                             </Badge>
                       </IconButton>
                             <IconButton>
                             <Badge badgeContent={3} color="primary">
                                <ChatIcon/>
                             </Badge>
                             </IconButton>

                             <IconButton>
                             <PowerSettingsNewIcon/>
                         </IconButton>
                         </Grid>
                    </Grid>
        </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
            paper: classes.drawerColor
          }}
          anchor="left"
        >
          <div className={classes.toolbar} />
          <Divider />
          <List>
               {itemList.map((item,index)=>{
                   const {text,icon,onClick} = item;
                   return(
                       <ListItem button key={text} onClick={onClick}>
                           {icon && <ListItemIcon>{icon}</ListItemIcon>}
                           <ListItemText primary={text}/>
                       </ListItem>
                   )
               })}
           </List>
          <Divider />
          <List>
               {itemList2.map((item,index)=>{
                   const {text,icon,onClick} = item;
                   return(
                       <ListItem button key={text} onClick={onClick}>
                           {icon && <ListItemIcon>{icon}</ListItemIcon>}
                           <ListItemText primary={text}/>
                       </ListItem>
                   )
               })}
           </List>
        </Drawer>
      </div>
    );
  }
  export default withRouter (PermanentDrawerLeft)