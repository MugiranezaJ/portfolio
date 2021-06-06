// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
// import Timeline from '@material-ui/lab/Timeline';
// import TimelineItem from '@material-ui/lab/TimelineItem';
// import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
// import TimelineConnector from '@material-ui/lab/TimelineConnector';
// import TimelineContent from '@material-ui/lab/TimelineContent';
// import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
// import TimelineDot from '@material-ui/lab/TimelineDot';
// import { Typography } from '@material-ui/core';
// import Paper from '@material-ui/core/Paper';
// import { Business, Web } from '@material-ui/icons';
// export function Experience(){
//     const classes = useStyles();
//     return(
//         <div className={classes.container} id='experience'>
//             <div className={classes.experienceInner}>
//                 <Typography variant={'h4'}>Experiance</Typography>
//                 <Timeline align="alternate">
//                 <TimelineItem>
//                     <TimelineOppositeContent>
//                         <Typography variant="body2" color="textSecondary">
//                             2020 August - Present
//                         </Typography>
//                     </TimelineOppositeContent>
//                     <TimelineSeparator>
//                         <TimelineDot>
//                             <Business />
//                         </TimelineDot>
//                         <TimelineConnector />
//                     </TimelineSeparator>
//                     <TimelineContent>
//                         <Paper elevation={3} className={classes.paper}>
//                             <Typography variant="h6" component="h1">
//                             Andela Inc.
//                             </Typography>
//                             <Typography>Here I am in Atlp program as trainee but in the process I worked on different projects using NodeJs and its technology with respect to Agile</Typography>
//                         </Paper>
//                     </TimelineContent>
//                 </TimelineItem>
//                 <TimelineItem>
//                     <TimelineOppositeContent>
//                     <Typography variant="body2" color="textSecondary">
//                         2021 May
//                     </Typography>
//                     </TimelineOppositeContent>
//                     <TimelineSeparator>
//                     <TimelineDot color="primary">
//                         <Web />
//                     </TimelineDot>
//                     <TimelineConnector />
//                     </TimelineSeparator>
//                     <TimelineContent>
//                     <Paper elevation={3} className={classes.paper}>
//                         <Typography variant="h6" component="h1">
//                         Portfolio
//                         </Typography>
//                         <Typography>I made this portfolio to showcase my skills and get exposed to the World :)</Typography>
//                     </Paper>
//                     </TimelineContent>
//                 </TimelineItem>
//                 <TimelineItem>
//                     <TimelineOppositeContent>
//                         <Typography variant="body2" color="textSecondary">
//                             2021 January - March
//                         </Typography>
//                     </TimelineOppositeContent>
//                     <TimelineSeparator>
//                         <TimelineDot>
//                             <Business />
//                         </TimelineDot>
//                         <TimelineConnector />
//                     </TimelineSeparator>
//                     <TimelineContent>
//                         <Paper elevation={3} className={classes.paper}>
//                             <Typography variant="h6" component="h1">
//                             MVend ltd
//                             </Typography>
//                             <Typography>Here I was an Intern and I worked on different projects, extending from back-end to front-end</Typography>
//                         </Paper>
//                     </TimelineContent>
//                 </TimelineItem>
//                 <TimelineItem>
//                     <TimelineOppositeContent>
//                     <Typography variant="body2" color="textSecondary">
//                         2020 May - July
//                     </Typography>
//                     </TimelineOppositeContent>
//                     <TimelineSeparator>
//                     <TimelineDot color="primary">
//                         <Web/>
//                     </TimelineDot>
//                     </TimelineSeparator>
//                     <TimelineContent>
//                     <Paper elevation={3} className={classes.paper}>
//                         <Typography variant="h6" component="h1">
//                         MYCITY.RW
//                         </Typography>
//                         <Typography>Worked as most back-end engineer</Typography>
//                     </Paper>
//                     </TimelineContent>
//                 </TimelineItem>
//                 </Timeline>
//             </div>
//         </div>
//     )
// }
// const useStyles = makeStyles(theme => ({
//     container: {
//         background: 'whitesmoke',
//         height:'auto',
//         alignItems: 'flex-start',
//         paddingTop:'66px',
//       },
//     experienceInner:{
//         background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//         position:'relative',
//         margin:'auto', 
//         minHeight:'700px',
//         // width:'80%', 
//         padding:'10px', 
//         paddingTop:'20px', 
//         color:'#fff', 
//         display:'flex', 
//         flexDirection:'column', 
//         alignItems:'center', 
//         justifyContent:'space-between'
//       },
//       paper: {
//         padding: '6px 16px',
//         maxWidth:'400px'
//       },
//       secondaryTail: {
//         backgroundColor: theme.palette.secondary.main,
//       },
// }))