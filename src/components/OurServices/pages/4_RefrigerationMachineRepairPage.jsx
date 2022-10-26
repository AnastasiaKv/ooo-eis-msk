import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import image4 from '../../../assets/img/services/Ремонт холодильных машин1.png';

import Paper from '@mui/material/Paper';
import DoneIcon from '@mui/icons-material/AcUnit';
export default function RefrigerationMachineRepairPage() {
 return (
  <>
   <Paper elevation={4} sx={{bgcolor: '#f7f7f7', marginBottom: 5}}>
    <Stack
     direction='column'
     spacing={0}
     sx={{color: '#1a202c', paddingLeft: '2em', paddingBottom: '2em'}}
    >
     <p
      style={{
       paddingTop: '45px',
       paddingLeft: '1rem',
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
        margin: '0px -129px 13px 0px',
       }}
       component='img'
       alt='Изображение неведомой детали'
       src={image4}
      />
      <h4 style={{paddingTop: '20px'}}>
       <Typography variant='h4' component='h2' style={{fontFamily: 'Furore', fontSize: '28px'}}>
        Ремонт холодильных машин и компрессоров от 4000 руб.
       </Typography>
      </h4>
     </p>
     <br />
     <Typography
      variant='caption'
      component='span'
      style={{textAlign: 'left', fontSize: '19px', paddingRight: '5em', paddingBottom: '15px'}}
     >
      Выполняем следующие технологические операции:
     </Typography>

     <ul style={{textAlign: 'left', listStyle: 'none'}}>
      <Stack direction='row' spacing={3}>
       <DoneIcon color='primary' style={{margin: '4px 0px 0px 0px', height: '18px'}} />
       <Typography
        variant='caption'
        component='span'
        style={{paddingLeft: '10px', fontSize: '16px', marginLeft: 0}}
       >
        Тщательная диагностика и дефектовка холодильного компрессора
       </Typography>
      </Stack>
      <Stack direction='row' spacing={3}>
       <DoneIcon
        color='primary'
        style={{margin: '4px 0px 0px 0px', height: '18px', color: 'sky'}}
       />
       <Typography
        variant='caption'
        component='span'
        style={{paddingLeft: '10px', fontSize: '16px', marginLeft: 0}}
       >
        Оценка уровня изношенности
       </Typography>
      </Stack>

      <Stack direction='row' spacing={3}>
       <DoneIcon color='primary' style={{margin: '4px 0px 0px 0px', height: '18px'}} />
       <Typography
        variant='caption'
        component='span'
        style={{paddingLeft: '10px', fontSize: '16px', marginLeft: 0}}
       >
        Перемотка статора фреоностойким проводом высочайшего качества
       </Typography>
      </Stack>
      <Stack direction='row' spacing={3}>
       <DoneIcon color='primary' style={{margin: '4px 0px 0px 0px', height: '18px'}} />
       <Typography
        variant='caption'
        component='span'
        style={{paddingLeft: '10px', fontSize: '16px', marginLeft: 0}}
       >
        Вакуумная пропитка
       </Typography>
      </Stack>
      <Stack direction='row' spacing={3}>
       <DoneIcon color='primary' style={{margin: '4px 0px 0px 0px', height: '18px'}} />
       <Typography
        variant='caption'
        component='span'
        style={{paddingLeft: '10px', fontSize: '16px', marginLeft: 0}}
       >
        Сборка холодильного компрессора
       </Typography>
      </Stack>
      <Stack direction='row' spacing={3}>
       <DoneIcon color='primary' style={{margin: '4px 0px 0px 0px', height: '18px'}} />
       <Typography
        variant='caption'
        component='span'
        style={{paddingLeft: '10px', fontSize: '16px', marginLeft: 0}}
       >
        Испытание компрессора под максимальной нагрузкой
       </Typography>
      </Stack>
     </ul>
    </Stack>
   </Paper>
  </>
 );
}
