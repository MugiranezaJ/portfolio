import React from 'react'
import { IconButton, Drawer, List, ListItem, Typography, Box } from "@material-ui/core"
import { Menu } from "@material-ui/icons"
import { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Divider from '@material-ui/core/Divider'
import { HashLink as Link } from 'react-router-hash-link';


const SideDrawer = ({navLinks}) => {
  const classes = useStyles()
  const [state, setState] = useState({ right: false })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setState({ [anchor]: open })
  }

  const sideDrawerList = anchor => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component="nav">
            <Box className={classes.adminBox}>
                <Typography>MugiranezaJ</Typography>
            </Box>
            <Divider/>
            <Link className={classes.a} to='/#home' >
              <ListItem className={classes.linkBox}>
                  <Typography>Home</Typography>
              </ListItem>
            </Link>
            <Link className={classes.a} to='/#about'>
              <ListItem className={classes.linkBox}>
                  About
              </ListItem>
            </Link>
            <Link className={classes.a} to='/#experience'>
              <ListItem className={classes.linkBox}>
                  Experience
              </ListItem>
            </Link>
            <Link className={classes.a} to='/#services' >
              <ListItem className={classes.linkBox}>
                  Services
              </ListItem>
            </Link>
            <Link className={classes.a} to='/#contact' >
              <ListItem className={classes.linkBox}>
                  Contact
              </ListItem>
            </Link>
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <IconButton 
      edge="start" 
      aria-label="menu"
      onClick={toggleDrawer("left", true)}
      >
        <Menu fontSize='medium' className={classes.menuIcon}/>
      </IconButton>
      <Drawer
        anchor="right"
        open={state.left}
        onOpen={toggleDrawer("left", true)}
        onClose={toggleDrawer("left", false)}       
      >
        {sideDrawerList("right")}
    </Drawer>
    </React.Fragment>
  )
}

const useStyles = makeStyles({
  list: {
    width: 250,
    height:'100%',
    backgroundColor:'#071e26'
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: 'black'
  },
  menuIcon: {
    color: 'white'
  },
  container: {
    width: 250,
    position: 'absolute',
    top: 64,
    bottom: 0,
    backgroundColor:'#EAF4FB',
    overflow:'auto'
},
adminBox:{
    display:'flex',
    justifyContent:'space-evenly',
    alignItems:'center',
    height:70,
    color:'#fff'
},
linkBox: {
  display:'flex',
  padding:'10px',
  color:'#43A0D6',
  '&:hover':{
      background: '#ABD5ED',
      borderLeft: '6px solid  #257AAA'
    }
},
a:{
    textDecoration:'none',
    color:'#43A0D6',
    
},
})

export default SideDrawer