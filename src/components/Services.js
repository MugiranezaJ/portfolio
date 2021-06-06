// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Box, Typography } from '@material-ui/core';
// import { Android, Wallpaper, Web } from '@material-ui/icons';

// export function Services(){
//     const classes = useStyles();
//     return(
//         <div className={classes.container} id='services'>
//             <Typography variant={'h3'}>Services</Typography>
//             <Typography>Below are some of the services offered.</Typography>
//             <Typography>Feel free to reach out if you need to know more about all services offered</Typography>
//             <div className={classes.servicesInner}>
//                 <Box boxShadow={10} className={classes.card}>
//                     <div className={classes.icon}><Web style={{fontSize:'80px', color:'steelblue'}}/></div>
//                     <Typography variant={'h4'} style={{fontWeight:'bold'}}>Web Design</Typography>
//                     <Typography>If you what full website, back-end or front-end then you are in the right place. I can also maintain and debug your already running website.</Typography>
//                 </Box>
//                 <Box boxShadow={10} className={classes.card}>
//                     <div className={classes.icon}><Android style={{fontSize:'80px', color:'steelblue'}}/></div>
//                     <Typography variant={'h4'} style={{fontWeight:'bold'}}>Android apps</Typography>
//                     <Typography>If you want an android and ios(app) then I can deliver it for you with respect to your derired architecture.</Typography>
//                 </Box>
//                 <Box boxShadow={10} className={classes.card}>
//                     <div className={classes.icon}><Wallpaper style={{fontSize:'80px', color:'steelblue'}}/></div>
//                     <Typography variant={'h4'} style={{fontWeight:'bold'}}>3D Art</Typography>
//                     <Typography>Convert your story into a real world thing. Hire me for 3d art for your assets either for animation or for 3d printing </Typography>
//                 </Box>
//             </div>
//         </div>
//     )
// }
// const useStyles = makeStyles(theme => ({
//     container:{
//         minHeight:'700px',
//         height:'auto',
//         padding:'20px',
//         paddingTop:'66px',
//         '@media(max-width: 900px)':{
//             height:'auto',
//           },
//           '@media(max-width: 300px)':{
//               padding:'0'
//           }
//     },
//     servicesInner:{
//         display:'flex',
//         flexFlow: 'row wrap',
//         justifyContent: 'center',
//         textAlign:'left',
//         padding:'10px',

//         color:'black',
//         position:'relative',
//         margin:'auto', 
//         marginTop:'30px',
//         minHeight:'500px',
//         paddingTop:'20px', 
//         flexDirection:'row', 
//         '@media(max-width: 900px)':{
//             height:'unset',
//             width:'min-content',
//             alignItems:'center',
//             justifyContent:'start'
//           },
//           '@media(max-width: 400px)':{
//             padding:'0',
//           },
//       },
//       card:{
//           width:'350px',
//           height:'300px',
//           margin:'5px',
//           textAlign:'left',
//           padding:'30px',
//           boxSizing:'border-box',
//           '@media(max-width: 900px)':{
//             // width:'250px',
//           },
//           '@media(max-width: 500px)':{
//             width:'300px',
//           },
//           '@media(max-width: 400px)':{
//             width:'280px',
//             height:'350px',
//           },
//           '@media(max-width: 300px)':{
//             width:'270px',
//           },
//       },
//       icon:{
//           height:'40%',
//       }
// }))