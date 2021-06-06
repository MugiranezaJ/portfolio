// import { Typography } from '@material-ui/core';
// import React from 'react';
// import js from '../assets/js.png'
// import java from '../assets/java.png'
// import python from '../assets/python.png'
// import react from '../assets/logo192.png'
// import android from '../assets/android.png'
// // import php from '../assets/php.png'
// import solidworks from '../assets/solidworks.png'
// import unity from '../assets/unity.png'
// import photoshop from '../assets/photoshop.png'
// import { makeStyles } from '@material-ui/core/styles';

// export function About(){
//     const classes = useStyles();
//     return(
//         <div className={classes.container} id='about'>
//             <div className={classes.aboutInner}>
//                 <div className={classes.InnerBox}>
//                     <div className={classes.description}>
//                         <Typography variant={'h4'} style={{ marginBottom:'10px'}}>ABOUT MYSELF</Typography> 
//                         <Typography>
//                          a full-stack engeer with more than 2 years of experience in real world projects including maintenance for already existing projects or fresh new projects on market. I am passionate about software engineering and project delivery time is main my priority
//                         </Typography>
//                     </div>
//                     <div className={classes.skills}>
//                         <div className={classes.skill}>
//                             <div >
//                                 <img src={js} alt='JS' className={classes.skillLogo}/>
//                             </div>
//                             <Typography>JavaScript</Typography>
//                         </div>
//                         <div className={classes.skill}>
//                             <div >
//                                 <img src={python} alt='Java' className={classes.skillLogo}/>
//                             </div>
//                             <Typography>Python</Typography>
//                         </div>
//                         <div className={classes.skill}>
//                             <div >
//                                 <img src={java} alt='JS' className={classes.skillLogo}/>
//                             </div>
//                             <Typography>Java</Typography>
//                         </div>
//                         <div className={classes.skill}>
//                             <div >
//                                 <img src={react} alt='React' className={classes.skillLogo}/>
//                             </div>
//                             <Typography>React</Typography>
//                         </div>
//                         <div className={classes.skill}>
//                             <div >
//                                 <img src={react} alt='React native' className={classes.skillLogo}/>
//                             </div>
//                             <Typography>React Native</Typography>
//                         </div>
//                         <div className={classes.skill}>
//                             <div >
//                                 <img src={android} alt='Android' className={classes.skillLogo}/>
//                             </div>
//                             <Typography>Android</Typography>
//                         </div>
//                         {/* <div className={classes.skill}>
//                             <div >
//                                 <img src={php} alt='Php' className={classes.skillLogo}/>
//                             </div>
//                             <Typography>Php</Typography>
//                         </div> */}
//                         <div className={classes.skill}>
//                             <div >
//                                 <img src={solidworks} alt='Solidworks' className={classes.skillLogo}/>
//                             </div>
//                             <Typography>SolidWorks</Typography>
//                         </div>
//                         <div className={classes.skill}>
//                             <div >
//                                 <img src={unity} alt='Unity' className={classes.skillLogo}/>
//                             </div>
//                             <Typography>Unity</Typography>
//                         </div>
//                         <div className={classes.skill}>
//                             <div >
//                                 <img src={photoshop} alt='Photoshop' className={classes.skillLogo}/>
//                             </div>
//                             <Typography>Photoshop</Typography>
//                         </div>
                        
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// const useStyles = makeStyles({
//     container:{
//         background: 'whitesmoke',
//         height:'500px',
//         alignItems: 'flex-start',
//         paddingTop:'66px',
//         '@media(max-width: 900px)':{
//             height:'auto',
//         },
//         '@media(max-width: 800px) and (min-width: 600px)':{
//             paddingTop:'100px',
//             margin:'unset !important'
//         },
//         '@media(max-width: 600px)':{
//             marginTop:'-40px'
//         },
//         '@media(max-width: 280px)':{
//             marginTop:'-100px'
//         },
//     },
//     aboutInner:{
//         color:'black',
//         position:'relative',
//         margin:'auto', 
//         height:'500px',
//         padding:'10px', 
//         paddingTop:'20px', 
//         display:'flex', 
//         flexDirection:'row', 
//         justifyContent: 'center',
//         '@media(max-width: 900px)':{
//             maxHeight:'inherit',
//             height:'auto',
//           }
//       },
//       InnerBox:{
//           display:'flex',
//           flexDirection:'row',
//           width:'1152px',
//           '@media(max-width: 900px)':{
//             flexDirection:'column',
//             alignItems:'center',
//           },
//           '@media(max-width: 720px)':{
//             width:'100%',
//           },
//       },
//       description:{
//         width:'50%',
//         height:'200px',
//         textAlign:'left',
//         padding:'10px',
//         '@media(max-width: 900px)':{
//             width:'700px'
//           },
//           '@media(max-width: 720px)':{
//             width:'95%',
//           },
//           '@media(max-width: 500px)':{
//             width:'320px',
//             marginBottom:'40px'
//           },
//           '@media(max-width: 400px)':{
//             width:'95%',
//           },'@media(max-width: 300px)':{
//             height:'inherit',
//           },
//       },
//       skills:{
//           display:'flex',
//           flexFlow: 'row wrap',
//           justifyContent: 'space-between',
//           width:'50%',
//           textAlign:'left',
//           padding:'10px',
//           '@media(max-width: 900px)':{
//             width:'700px',
//             justifyContent:'start'
//           },
//           '@media(max-width: 720px)':{
//             width:'95%',
//           },
//           '@media(max-width: 500px)':{
//             width:'320px',
//           },
//           '@media(max-width: 400px)':{
//             width:'95%',
//             boxSizing:'border-box',
//           },
//       },
//       skill:{
//           display:'flex',
//           flexDirection:'column',
//           alignItems:'center',
//           width:'100px',
//           height:'150px',
//           boxSizing:'border-box',
//           '@media(max-width: 900px)':{
//           },
//           '@media(max-width: 300px)':{
//             height:'90px',
//           },
//       },
//       skillLogo: {
//           width:'100px',
//           height:'100px',
//           '@media(max-width: 900px)':{
//             height:'70px',
//             width:'70px',
//           },
//           '@media(max-width: 300px)':{
//             height:'40px',
//             width:'40px'
//           },
//       }
// })