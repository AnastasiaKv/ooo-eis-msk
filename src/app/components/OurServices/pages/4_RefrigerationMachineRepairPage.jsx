import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {Typography} from '@material-ui/core';
import image4 from '../../../../assets/img/services/4.png';
import '../../../../assets/css/pages-text.css';
import Paper from '@mui/material/Paper';
import DoneIcon from '@mui/icons-material/AcUnit';
import SEO from '../../SEO';

export default function RefrigerationMachineRepairPage() {
 return (
  <form style={{height: '100%'}}>
   <SEO
    title='Ремонт холодильных машин и компрессоров'
    description='Ремонт холодильных машин и компрессоров от 4000 руб.'
    name='ООО ЭИС'
   />
   <Paper elevation={4} sx={{bgcolor: '#f7f7f7', width: '31.2em'}}>
    <Stack
     direction='column'
     spacing={0}
     sx={{color: '#1a202c', paddingLeft: '2em', paddingBottom: '2em'}}
    >
     <p
      style={{
       paddingTop: '45px',
       paddingLeft: '0.5em',
       width: '600px',
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
        margin: '19px -109px 13px 0px',
       }}
       loading='lazy'
       component='img'
       alt='Ремонт холодильных машин и компрессоров'
       src={image4}
      />
      <h1 style={{paddingTop: '20px'}}>
       <Typography variant='h4' component='h1' style={{fontFamily: 'Furore', fontSize: '28px'}}>
        Ремонт холодильных машин и компрессоров от 4000 руб.
       </Typography>
      </h1>
     </p>
     <br />
     <h6>
      <Typography variant='h6' style={{paddingRight: '9em', paddingBottom: '1em'}}>
       Выполняем следующие технологические операции:
      </Typography>
     </h6>
     <Stack
      direction='column'
      spacing={1}
      component='ul'
      style={{fontSize: '16px', textAlign: 'left'}}
     >
      <Stack direction='row' spacing={3}>
       <DoneIcon color='primary' style={{margin: '3px -24px 0px 0em', height: '18px'}} />
       <h5>
        <Typography
         variant='h5'
         style={{color: '#1a202c', paddingLeft: '10px', fontSize: '16px', marginLeft: 0}}
        >
         Тщательная диагностика и дефектовка холодильного компрессора
        </Typography>
       </h5>
      </Stack>
      <Stack direction='row' spacing={3}>
       <DoneIcon
        color='primary'
        style={{margin: '3px -24px 0px 0em', height: '18px', color: 'sky'}}
       />
       <h5>
        <Typography
         variant='h5'
         style={{color: '#1a202c', paddingLeft: '10px', fontSize: '16px', marginLeft: 0}}
        >
         Оценка уровня изношенности
        </Typography>
       </h5>
      </Stack>

      <Stack direction='row' spacing={3}>
       <DoneIcon color='primary' style={{margin: '3px -24px 0px 0em', height: '18px'}} />
       <h5>
        <Typography
         variant='h5'
         style={{color: '#1a202c', paddingLeft: '10px', fontSize: '16px', marginLeft: 0}}
        >
         Перемотка статора фреоностойким проводом высочайшего качества
        </Typography>
       </h5>
      </Stack>
      <Stack direction='row' spacing={3}>
       <DoneIcon color='primary' style={{margin: '3px -24px 0px 0em', height: '18px'}} />
       <h5>
        <Typography
         variant='h5'
         style={{color: '#1a202c', paddingLeft: '10px', fontSize: '16px', marginLeft: 0}}
        >
         Вакуумная пропитка
        </Typography>
       </h5>
      </Stack>
      <Stack direction='row' spacing={3}>
       <DoneIcon color='primary' style={{margin: '3px -24px 0px 0em', height: '18px'}} />
       <h5>
        <Typography
         variant='h5'
         style={{color: '#1a202c', paddingLeft: '10px', fontSize: '16px', marginLeft: 0}}
        >
         Сборка холодильного компрессора
        </Typography>
       </h5>
      </Stack>
      <Stack direction='row' spacing={3}>
       <DoneIcon color='primary' style={{margin: '3px -24px 0px 0em', height: '18px'}} />
       <h5>
        <Typography
         variant='h5'
         style={{color: '#1a202c', paddingLeft: '10px', fontSize: '16px', marginLeft: 0}}
        >
         Испытание компрессора под максимальной нагрузкой
        </Typography>
       </h5>
      </Stack>
     </Stack>
    </Stack>
   </Paper>
  </form>
 );
}
