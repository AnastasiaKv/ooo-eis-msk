import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import image6 from '../../../../assets/img/services/Ремонт электронагревателей1.png';
import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded';
import Paper from '@mui/material/Paper';
import SEO from '../../SEO';

export default function RepairOfElectricHeatersPage() {
 return (
  <form style={{height: '100%', width: '33.1em', marginTop: '0em', marginRight: '0em'}}>
   <SEO
    title='Ремонт электронагревателей'
    description='Ремонт электронагревателей от 500 руб.'
    name='ООО ЭИС'
   />
   <Paper elevation={4} sx={{bgcolor: '#f7f7f7', marginBottom: 5}}>
    <Stack direction='column' sx={{color: '#1a202c', paddingBottom: '1em', paddingTop: '0em'}}>
     <Stack direction='row' sx={{paddingLeft: '2em', textAlign: 'left'}}>
      <p
       style={{
        paddingTop: '45px',
        width: '26em',
        height: '211px',
        textAlign: 'left',
        paddingBottom: '0',
       }}
      >
       <Box
        sx={{
         paddingTop: '18px',
         width: '8em',
         height: '7em',
         float: 'right' /* Выравнивание по правому краю  */,
         margin: '1em -83px 13px 0px',
        }}
        loading='lazy'
        component='img'
        alt='Ремонт электронагревателей'
        src={image6}
       />
       <h1>
        <Typography variant='h4' component='h4' style={{fontFamily: 'Furore', fontSize: '28px'}}>
         Ремонт электронагревателей от 500 руб.
        </Typography>
       </h1>
      </p>
     </Stack>
     <Stack sx={{paddingLeft: '2em', marginRight: '2em'}}>
      <h4>
       <Typography
        variant='h6'
        sx={{textAlign: 'center', paddingRight: '20px', paddingBottom: '1em'}}
       >
        Виды поломок
       </Typography>
      </h4>
      <Stack direction='column' spacing={0} alignItems='flex-start'>
       <Typography
        variant='caption'
        component='p'
        sx={{textAlign: 'left', fontSize: '17px', color: '#1a202c'}}
       >
        Несмотря на относительную простоту конструкции, ремонт электрических
        <br /> водонагревателей может потребоваться в нескольких случаях:
       </Typography>
       <ul>
        <Stack sx={{paddingLeft: '1.5em', marginRight: '2em'}}>
         <Stack direction='row' spacing={3} sx={{paddingTop: '1.9em'}}>
          <ReportProblemRoundedIcon
           style={{
            margin: '0px 0px 0px 0px',
            width: '25px',
            height: '26px',
            color: '#f44336',
           }}
          />
          <Typography
           variant='caption'
           component='span'
           style={{
            paddingLeft: '10px',
            fontSize: '16px',
            marginLeft: 0,
           }}
          >
           Выход из строя нагревательного элемента
          </Typography>
         </Stack>
         <Stack direction='row' spacing={3} sx={{paddingTop: '10px'}}>
          <ReportProblemRoundedIcon
           style={{
            margin: '0px 0px 0px 0px',
            width: '25px',
            height: '26px',
            color: '#f44336',
           }}
          />
          <Typography
           variant='caption'
           component='span'
           style={{paddingLeft: '10px', fontSize: '16px', marginLeft: 0}}
          >
           Поломка терморегулятора
          </Typography>
         </Stack>
         <Stack direction='row' spacing={3} sx={{paddingTop: '10px'}}>
          <ReportProblemRoundedIcon
           style={{
            margin: '0px 0px 0px 0px',
            width: '25px',
            height: '26px',
            color: '#f44336',
           }}
          />
          <Typography
           variant='caption'
           component='span'
           style={{paddingLeft: '10px', fontSize: '16px', marginLeft: 0}}
          >
           Ухудшение эксплуатационных параметров, связанное с образованием накипи
          </Typography>
         </Stack>
         <Stack direction='row' spacing={3} sx={{paddingTop: '10px', paddingBottom: '1.5em'}}>
          <ReportProblemRoundedIcon
           style={{
            margin: '0px 0px 0px 0px',
            width: '25px',
            height: '26px',
            color: '#f44336',
           }}
          />
          <Typography
           variant='caption'
           component='span'
           style={{paddingLeft: '10px', fontSize: '16px', marginLeft: 0}}
          >
           Возникновение коррозионных процессов.
          </Typography>
         </Stack>
        </Stack>
       </ul>

       <Typography
        variant='caption'
        component='p'
        sx={{
         fontStyle: 'oblique',
         textAlign: 'justify',
         fontSize: '17px',
         color: '#1a202c',
        }}
       >
        *Наши специалисты устранят любые поломки электрических водонагревателей,
        <br />
        ремонт которых оправдан из экономических соображений.
       </Typography>
      </Stack>
     </Stack>
    </Stack>
   </Paper>
  </form>
 );
}