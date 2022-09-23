import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import FirstRow from "../containers/FirstRow";
import SecondRow from "../containers/SecondRow";
import ThirdRow from "../containers/ThirdRow";
import FourthRow from "../containers/FourthRow";
import { Stack } from "@mui/system";
import Button from '@mui/material/Button';



const useStyles = styled((theme) => ({
     Item: {

          padding: theme.spacing(1),
          textAlign: "center",
          color: theme.palette.text.secondary
     }
}));

function StackItem1({ classes }) {
     return (
          // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
          // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
          // From 960px wide and above, I take up 25% of the device (3/12), so 7 columns fit the screen.
          <Stack direction='row' spacing={1}>
               {FirstRow.map((work) => (
                    <Paper sx={{ boxShadow: 'none' }} className={classes.Item}>
                         <Button>
                              <Box
                                   sx={{ height: '250px', width: '250px' }}
                                   component='img'
                                   alt='button'
                                   src={work.image}
                              />
                         </Button>
                    </Paper>
               ))}
          </Stack>
     );
}
function StackItem2({ classes }) {
     return (
          <Stack direction='row' spacing={1}>
               {SecondRow.map((work) => (
                    <Paper sx={{ boxShadow: 'none' }} className={classes.Item}>
                         <Button>
                              <Box
                                   sx={{ height: '250px', width: '250px' }}
                                   component='img'
                                   alt='button'
                                   src={work.image}
                              />
                         </Button>
                    </Paper>
               ))}
          </Stack>
     );
} function StackItem3({ classes }) {
     return (
          <Stack direction='row' spacing={1}>
               {ThirdRow.map((work) => (
                    <Paper sx={{ boxShadow: 'none' }} className={classes.Item}>
                         <Button>
                              <Box
                                   sx={{ height: '250px', width: '250px' }}
                                   component='img'
                                   alt='button'
                                   src={work.image}
                              />
                         </Button>
                    </Paper>
               ))}
          </Stack>
     );
} function StackItem4({ classes }) {
     return (
          <Stack direction='row' spacing={1}>
               {FourthRow.map((work) => (
                    <Paper sx={{ boxShadow: 'none' }} className={classes.Item}>
                         <Button>
                              <Box
                                   sx={{ height: '250px', width: '250px' }}
                                   component='img'
                                   alt='button'
                                   src={work.image}
                              />
                         </Button>
                    </Paper>
               ))}
          </Stack>
     );
}
export default function ResponsiveGridService() {
     const classes = useStyles();
     return (
          <div>
               <p style={{ paddingLeft: '35px', paddingTop: '14px', paddingBottom: '4px' }}>
                    <Typography
                         variant="body2"
                         component="span"
                         sx={{ flexGrow: 1 }} style={{
                              position: "relative",
                              fontSize: 26,
                              textAlign: "center", color: "#292929",
                         }}

                    >
                         Наши услуги
                    </Typography>
               </p>
               <Box sx={{ flexGrow: 1 }}>
                    <StackItem1 classes={classes} />
                    <StackItem2 classes={classes} />
                    <StackItem3 classes={classes} />
                    <StackItem4 classes={classes} />
               </Box>

               <p
                    style={{
                         textAlign: 'left',
                         paddingLeft: '0px',
                         paddingTop: '20px',
                         margin: '0px 0',
                         width: '21cm',
                    }}
                    className='blocktext'
               >
                    <Typography
                         variant='body2'
                         component='span'
                         sx={{ flexGrow: 1 }}
                         style={{
                              position: 'relative',
                              justifyContent: 'space-around',
                              fontSize: 12,
                              color: '#292929',
                         }}
                    >
                         Также как перспективное планирование предоставляет широкие возможности
                         для системы массового участия. Следует отметить, что сложившаяся
                         структура организации позволяет оценить значение поставленных
                         обществом задач. Каждый из нас понимает очевидную вещь: консультация с
                         широким активом позволяет выполнить важные задания по разработке
                         распределения внутренних резервов и ресурсов.
                    </Typography>
               </p>
          </div>
     );
}
