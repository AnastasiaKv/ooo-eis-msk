import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import r1 from "../assets/img/Services/Ремонт электродвигателей.png";
import r2 from "../assets/img/Services/Ремонт генераторов.png";
import r3 from "../assets/img/Services/Ремонт трансформаторов.png";
import r4 from "../assets/img/Services/Ремонт холодильных машин.png";
import r5 from "../assets/img/Services/Ремонт электродвигателей.png";
import r6 from "../assets/img/Services/Ремонт электронагревателей.png";

import r7 from "../assets/img/Services/Ремонт электродвигателей.png";
import r8 from "../assets/img/Services/Ремонт электродвигателей.png";
import r9 from "../assets/img/Services/Ремонт электродвигателей.png";

const Item = styled(Paper)(({ theme }) => ({
     backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
     ...theme.typography.body2,
     padding: theme.spacing(13, 16),
     textAlign: 'center',
     size: theme.spacing(2),
     color: theme.palette.text.secondary
}));
const section = {

     backgroundColor: "#fff"
};
function FormRow() {
     return (
          <React.Fragment>
               <Grid item xs={1.7}>
                    <div>   <img style={{
                         height: '10em',
                         width: '10em',
                    }} src={r1} alt="1" /></div>
               </Grid>
               <Grid item xs={1.7}>
                    <div> <img style={{
                         height: '10em',
                         width: '10em',
                    }} src={r2} alt="1" /></div>
               </Grid>
               <Grid item xs={1.7} >
                    <div>  <img style={{
                         height: '10em',
                         width: '10em',
                    }} src={r3} alt="1" /></div>
               </Grid>
          </React.Fragment>
     );
}
function SingleFormRow() {
     return (
          <React.Fragment>
               <Grid item xs={1.7}>
                    <div style={section}>  <Item>Item</Item></div>
               </Grid>
          </React.Fragment>
     );
}
export default function NestedGrid() {
     return (
          <div style={{ padding: '15px' }}>
               <p style={{ paddingRight: '893px' }}>
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
                    <Grid container spacing={2}>
                         <Grid container item spacing={33}>
                              <FormRow />
                         </Grid>
                         <Grid container item spacing={33}>
                              <FormRow />
                         </Grid>
                         <Grid container item spacing={33}>
                              <FormRow />
                         </Grid>
                         <Grid container item spacing={33}>
                              <SingleFormRow />
                         </Grid>
                    </Grid>
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
