// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
// import { IconButton, Typography } from '@material-ui/core';
// import { ContactForm } from './contactForm';
// import { Facebook, GitHub, LinkedIn, Twitter } from '@material-ui/icons';

// export function Footer(){
//     const classes = useStyles();
//     return(
//         <div className={classes.container} id='contact'>
//             <div className={classes.footerInner}>
//                 <div className={classes.card}>
//                 <Typography variant={'h4'}>Information.</Typography>
//                     <div>
//                         <Typography> Kigali, Rwanda</Typography>
//                         <Typography style={{color:'#777777'}}>Kigarama(Gikondo), Kicukiro</Typography>
//                     </div>
//                     <div>
//                         <Typography> (+250) 78 071 2835</Typography>
//                         <Typography style={{color:'#777777'}}>Sun to Fri 8 am 5 pm</Typography>
//                     </div>
//                     <div>
//                         <Typography> jackswalter7@gmail.com</Typography>
//                         <Typography style={{color:'#777777'}}>Send me query anytime</Typography>
//                     </div>
//                 </div>

//                 <div className={classes.card}>
//                 <Typography variant={'h4'}>Contact.</Typography>
//                     <ContactForm/>
//                 </div>

//                 <div className={classes.card}>
//                 <Typography variant={'h4'}>Follow Me.</Typography>
//                 <div style={{color:'white', margin:'30px 0'}}>
//                     <IconButton color='primary' href={'https://www.facebook.com/MugiranezaJofficial'}><Facebook className={classes.SocialButton}/></IconButton>
//                     <IconButton color='primary' href={'https://twitter.com/MugiranezaJ_'}><Twitter className={classes.SocialButton}/></IconButton>
//                     <IconButton color='primary' href={'https://www.linkedin.com/in/mugiraneza-jackson-9a7a181b8/'}><LinkedIn className={classes.SocialButton}/></IconButton>
//                     <IconButton color='primary' href={'https://github.com/MugiranezaJ'}><GitHub className={classes.SocialButton}/></IconButton>
//                 </div>
//                 </div>
                
//             </div>
//         </div>
//     )
// }
// const useStyles = makeStyles(theme => ({
//     container:{
//         height:'420px',
//         padding:'20px',
//         backgroundColor:'#071e26',
//         color:'#fff',
//         '@media(max-width: 900px)':{
//             height:'auto',
//           }
//     },
//     footerInner:{
//         // color:'black',
//         position:'relative',
//         margin:'auto', 
//         marginTop:'30px',
//         height:'300px',
//         padding:'10px', 
//         paddingTop:'20px', 
//         display:'flex', 
//         flexDirection:'row', 
//         justifyContent: 'center',
//         textAlign:'left',
//         boxSizing:'border-box',
//         '@media(max-width: 900px)':{
//             height:'auto',
//             flexDirection:'column',
//             alignItems:'center',
//           }
        
//       },
//       card:{
//         width:'320px',
//         height:'300px',
//         padding:'15px',
//         // backgroundColor:'yellow',
//         '@media(max-width: 900px)':{
//             width:'100%',
//             textAlign:'center'
//           }
//       },
//       SocialButton:{
//           fontSize:'50px'
//       }
// }))