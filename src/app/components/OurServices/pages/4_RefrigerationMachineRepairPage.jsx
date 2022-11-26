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
     mt={1}
     direction='column'
     spacing={0}
     style={{color: '#1a202c', paddingLeft: '2em', paddingBottom: '2em'}}
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
     <p style={{paddingBottom: 10}}>
      <span style={{fontSize: 19, paddingRight: '12em', paddingBottom: '1em'}}>
       <b>Выполняем следующие технологические операции:</b>
      </span>
     </p>

     <div>
      <div
       style={{display: 'flex', alignItems: 'center', justifyContent: 'left', paddingBottom: 7}}
      >
       <DoneIcon color='primary' style={{margin: '0px -24px 0px 0em', height: '18px'}} />
       <span style={{color: '#1a202c', paddingLeft: '34px', fontSize: '16px', marginLeft: 0}}>
        Тщательная диагностика и дефектовка холодильного компрессора
       </span>
      </div>
      <div
       style={{display: 'flex', alignItems: 'center', justifyContent: 'left', paddingBottom: 7}}
      >
       <DoneIcon
        color='primary'
        style={{margin: '0px -24px 0px 0em', height: '18px', color: 'sky'}}
       />
       <span style={{color: '#1a202c', paddingLeft: '34px', fontSize: '16px', marginLeft: 0}}>
        Оценка уровня изношенности
       </span>
      </div>
      <div
       style={{display: 'flex', alignItems: 'center', justifyContent: 'left', paddingBottom: 7}}
      >
       <DoneIcon color='primary' style={{margin: '0px -24px 0px 0em', height: '18px'}} />
       <span style={{color: '#1a202c', paddingLeft: '34px', fontSize: '16px', marginLeft: 0}}>
        Перемотка статора фреоностойким проводом высочайшего качества
       </span>
      </div>
      <div
       style={{display: 'flex', alignItems: 'center', justifyContent: 'left', paddingBottom: 7}}
      >
       <DoneIcon color='primary' style={{margin: '0px -24px 0px 0em', height: '18px'}} />
       <span style={{color: '#1a202c', paddingLeft: '34px', fontSize: '16px', marginLeft: 0}}>
        Вакуумная пропитка
       </span>
      </div>
      <div
       style={{display: 'flex', alignItems: 'center', justifyContent: 'left', paddingBottom: 7}}
      >
       <DoneIcon color='primary' style={{margin: '0px -24px 0px 0em', height: '18px'}} />
       <span style={{color: '#1a202c', paddingLeft: '34px', fontSize: '16px', marginLeft: 0}}>
        Сборка холодильного компрессора
       </span>
      </div>
      <div
       style={{display: 'flex', alignItems: 'center', justifyContent: 'left', paddingBottom: 7}}
      >
       <DoneIcon color='primary' style={{margin: '0px -24px 0px 0em', height: '18px'}} />
       <span style={{color: '#1a202c', paddingLeft: '34px', fontSize: '16px', marginLeft: 0}}>
        Испытание компрессора под максимальной нагрузкой
       </span>
      </div>
     </div>
    </Stack>
   </Paper>
  </form>
 );
}
