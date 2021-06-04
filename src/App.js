// import logo from './logo.svg';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '@fontsource/roboto';
import './App.css'; 
import logo from './assets/IMG_6521.JPG';
import {About} from './components/About'
import { Experience } from './components/Experience'
import { Facebook, GitHub, HomeOutlined, LinkedIn, MailOutline, PhoneOutlined, Twitter } from '@material-ui/icons';
import { Services } from './components/Services';
import { Footer } from './components/footer';
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import SideDrawer from './components/Drawer';
import { Helmet } from 'react-helmet'

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      {/* <Helmet>
        <title>MugiranezaJ</title>
      </Helmet> */}
      <AppBar position='sticky' className={classes.appBar}>
            <Toolbar style={{display:'flex', justifyContent:'space-between'}}>
              
              <Typography className={classes.siteName}>
                MugiranezaJ
              </Typography>
              <IconButton edge="end" color="inherit" aria-label="menu">
                <Router>
                  <SideDrawer/>
                </Router>
              </IconButton>
            </Toolbar>
          </AppBar>
          <div className={classes.navigation}>
            <div className={classes.siteName} >MugiranezaJ</div>
            <div className={classes.buttonContainer}>
              <Router>
                <Link to="/#home" className={classes.linkText}><Button className={classes.navButton}>Home</Button></Link>
                <Link to="/#about" className={classes.linkText}><Button className={classes.navButton}>About</Button></Link>
                <Link to="/#experience" className={classes.linkText}><Button className={classes.navButton}>Experience</Button></Link>
                <Link to="/#services" className={classes.linkText}><Button className={classes.navButton}>Services</Button></Link>
                <Link to="/#contact" className={classes.linkText}><Button className={classes.navButton}>Contact</Button></Link>
              </Router>
            </div>
          </div>
      <div className={classes.home} id='home'>
        
        <div className={classes.homeInner}>
          
          <Box boxShadow={10} className={classes.HomeCard}>
            
            <div className={classes.cardLeft}>
              <img src={logo} alt='Me' className={classes.MyImage}/>
            </div>
            <div className={classes.cardRight}>
              <p>HELLO EVELYONE, I AM</p>
              <Typography className={classes.name} variant={'h3'} paragraph>MUGIRANEZA JACKSON</Typography>
              <Typography variant={'h6'} paragraph>FULL-STACK DEVELOPER</Typography>
              <Typography paragraph style={{display:'flex', }}>Client satisfaction and project delivery time is the main priority. Feel free to join me.</Typography>
              <Typography paragraph style={{display:'flex', }}>
                <PhoneOutlined color={'primary'} style={{marginRight:'15px'}}/> (+250) 780712835
              </Typography>
              <Typography paragraph style={{display:'flex', }}>
                <MailOutline color={'primary'} style={{marginRight:'15px'}}/> jackswalter7@gmail.com
              </Typography>
              <Typography paragraph style={{display:'flex', }}>
                <HomeOutlined color={'primary'} style={{marginRight:'15px'}}/> KK712 st Kigarama, Kigali, Rwanda
              </Typography>
              <div>
                <IconButton href={'https://www.facebook.com/MugiranezaJofficial'}><Facebook/></IconButton>
                <IconButton href={'https://twitter.com/MugiranezaJ_'}><Twitter/></IconButton>
                <IconButton href={'https://www.linkedin.com/in/mugiraneza-jackson-9a7a181b8/'}><LinkedIn/></IconButton>
                <IconButton href={'https://github.com/MugiranezaJ'}><GitHub/></IconButton>
              </div>
            </div>
          </Box>
        </div>
      </div>
      <About/>
      <Experience/>
      <Services/>
      <Footer/>
    </div>
  );
}
const useStyles = makeStyles({
  home: {
    background: 'whitesmoke',
    height:'900px',
    alignItems: 'flex-start',
    '@media(max-width: 900px) and (min-width:720px)':{
      height:'1070px',
    },
    '@media screen and (max-width: 720px) and (min-width:601px)':{
      height:'1000px',
    },
    
  },
  homeInner:{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    position:'relative',
    margin:'auto', 
    height:'700px',
    padding:'10px', 
    paddingTop:'20px', 
    color:'#fff', 
    display:'flex', 
    flexDirection:'column', 
    alignItems:'center', 
    justifyContent:'space-between',
    '@media(max-width: 900px)':{
      height:'740px',
    },
    '@media screen and (max-width: 800px) and (min-width:720px)':{
      height:'1060px',
    },
  },
  navigation:{
    background: '#071e26',
    position:'fixed',
    width:'100%', 
    padding:'10px 20px', 
    paddingTop:'20px', 
    color:'#fff', 
    display:'flex', 
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'space-between',
    boxSizing:'border-box',
    zIndex:'100',
    '@media(max-width:900px)':{
      display:'none',
    },
    '@media(max-width: 720px)':{
      width:'95%',
    },
  },
  siteName:{
    display:'flex',
    width:'100px', 
    fontSize:'24px', 
    fontWeight:'bold',
  },
  buttonContainer:{
    color:'#fff', 
    display:'flex',
    '@media(max-width: 720px)':{
      display:'none',
    }
  },
  navButton:{
    margin:'0 12px 0 12px',
    color:'#fff',
    fontWeight:'bold'
  },
  HomeCard:{
    position:'absolute',
    display:'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    bottom:-90,
    height:'700px',
    maxWidth:'1152px',
    width:'80%',
    backgroundColor:'#fff',
    borderRadius: 3,
    color: 'black',
    padding:'30px',
    boxSizing:'border-box',
    '@media(max-width: 900px)':{
      width:'700px',
      bottom:'inherit',
      flexDirection:'column',
      alignItems:'center',
      height:'auto',
      overflow:'auto',
    },
    '@media(max-width: 720px)':{
      width:'95%',
    },
    '@media(max-width: 500px)':{
      width:'90%',
    },
    
  },
  cardLeft:{
    width:'60%',
    fontWeight:'bold',
    borderRadius:'10px',
    '@media(max-width: 900px)':{
      width:'unset',
    }
  },
  name:{
    fontWeight:'bold',
    fontSize:'36px',
    '@media(max-width: 720px)':{
      fontSize:'25px',
      fontWeight:'bold'
    },
    '@media(max-width: 500px)':{
      fontSize:'20px',
      fontWeight:'bold'
    }
  },
  cardRight:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    width:'40%',
    padding:'5px 25px',
    textAlign:'left',
    boxSizing:'border-box',
    '@media(max-width: 900px)':{
      width:'unset',
    }
  },
  MyImage:{
    width:'100%',
    height:'100%',
    borderRadius:5

  },
  appBar:{
    display:'none',
    position:'sticky',
    backgroundColor:'#071e26',
    '@media(max-width:900px)':{
      display:'block',
    }
  },
    linkText:{
      textDecoration:'none',
    }
});

export default App;
