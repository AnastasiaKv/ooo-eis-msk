import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import image4 from '../../../assets/img/services/Ремонт холодильных машин1.png';
import DoneIcon from '@mui/icons-material/Done';
import Paper from '@mui/material/Paper';

export default function RefrigerationMachineRepairPage() {
 return (
  <>
   <Paper elevation={4} sx={{marginBottom: 5}}>
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
       }}
       component='img'
       alt='Изображение неведомой детали'
       src={image4}
      />
      <h4 style={{paddingTop: '20px'}}>
       <Typography variant='h4' component='h4' style={{fontSize: '28px'}}>
        Ремонт холодильных машин и компрессоров
       </Typography>
      </h4>
      <Typography variant='h4' component='h4' style={{fontSize: '28px'}}>
       от 4000 руб.
      </Typography>
     </p>
     <br />
     <Typography
      variant='caption'
      style={{fontSize: '19px', paddingRight: '5em', paddingBottom: '15px'}}
     >
      Выполняем следующие технологические операции:
     </Typography>

     <ul style={{textAlign: 'left', listStyle: 'none'}}>
      <Stack direction='row' spacing={3}>
       <DoneIcon color='primary' style={{margin: '1px 0px 0px 0px', height: '22px'}} />
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
        style={{margin: '1px 0px 0px 0px', height: '22px', color: 'sky'}}
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
       <DoneIcon color='primary' style={{margin: '1px 0px 0px 0px', height: '22px'}} />
       <Typography
        variant='caption'
        component='span'
        style={{paddingLeft: '10px', fontSize: '16px', marginLeft: 0}}
       >
        Выпрессовка статоров любого типа и любых размеров (проводится наспециальном стенде)
       </Typography>
      </Stack>
      <Stack direction='row' spacing={3}>
       <DoneIcon color='primary' style={{margin: '1px 0px 0px 0px', height: '22px'}} />
       <Typography
        variant='caption'
        component='span'
        style={{paddingLeft: '10px', fontSize: '16px', marginLeft: 0}}
       >
        Перемотка статора фреоностойким проводом высочайшего качества
       </Typography>
      </Stack>
      <Stack direction='row' spacing={3}>
       <DoneIcon color='primary' style={{margin: '1px 0px 0px 0px', height: '22px'}} />
       <Typography
        variant='caption'
        component='span'
        style={{paddingLeft: '10px', fontSize: '16px', marginLeft: 0}}
       >
        Вакуумная пропитка
       </Typography>
      </Stack>
      <Stack direction='row' spacing={3}>
       <DoneIcon color='primary' style={{margin: '1px 0px 0px 0px', height: '22px'}} />
       <Typography
        variant='caption'
        component='span'
        style={{paddingLeft: '10px', fontSize: '16px', marginLeft: 0}}
       >
        Металлообработка различного уровня сложности
       </Typography>
      </Stack>
      <Stack direction='row' spacing={3}>
       <DoneIcon color='primary' style={{margin: '1px 0px 0px 0px', height: '22px'}} />
       <Typography
        variant='caption'
        component='span'
        style={{paddingLeft: '10px', fontSize: '16px', marginLeft: 0}}
       >
        Сборка холодильного компрессора
       </Typography>
      </Stack>
      <Stack direction='row' spacing={3}>
       <DoneIcon color='primary' style={{margin: '1px 0px 0px 0px', height: '22px'}} />
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
