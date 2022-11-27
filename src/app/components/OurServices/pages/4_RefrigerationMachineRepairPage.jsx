import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {Typography} from '@material-ui/core';
import image4 from '../../../../assets/img/services/4.png';
import '../../../../assets/css/pages-text.css';
import Paper from '@mui/material/Paper';
import DoneSvg from '@mui/icons-material/AcUnit';
import SEO from '../../SEO';

export default function RefrigerationMachineRepairPage() {
 return (
  <div className='eis-service-page'>
   <form style={{height: '100%'}}>
    <SEO
     title='Ремонт холодильных машин и компрессоров'
     description='Ремонт холодильных машин и компрессоров от 4000 руб.'
     name='ООО ЭИС'
     keywords=''
     href='https://eis-msk.ru/services/refrigeration-machine-repair-page'
    />
    <Paper elevation={4} sx={{backgroundColor: '#f7f7f7', width: '31.2em'}}>
     <Stack mt={2} spacing={1} sx={{color: '#1a202c', paddingLeft: '2em', paddingBottom: '2em'}}>
      <p
       style={{
        paddingLeft: '0.5em',
        width: '600px',
        height: '211px',
        textAlign: 'left',
        paddingBottom: '0',
       }}
      >
       <img
        style={{
         paddingTop: '18px',
         width: '8em',
         height: '7em',
         float: 'right' /* Выравнивание по правому краю  */,
         margin: '-27px -111px 13px 0px',
        }}
        alt='Ремонт холодильных машин и компрессоров'
        src={image4}
       />
       <h1 style={{paddingTop: '20px'}}>
        <Typography variant='h4' component='h1' style={{fontFamily: 'Furore', fontSize: '28px'}}>
         Ремонт холодильных машин и компрессоров от 4000 руб.
        </Typography>
       </h1>
      </p>

      <Typography
       variant='h7'
       style={{textAlign: 'justify', marginRight: '15em', fontSize: '20px', paddingBottom: '0.5em'}}
      >
       <b> Выполняем следующие технологические операции: </b>
      </Typography>

      <Stack component='ul' spacing={1} style={{fontSize: '16px', textAlign: 'left'}}>
       <Typography>
        <DoneSvg color='primary' style={{margin: '0px 10px -4px 0em', height: '18px'}} />
        Тщательная диагностика и дефектовка холодильного компрессора
       </Typography>

       <Typography>
        <DoneSvg color='primary' style={{margin: '0px 10px -4px 0em', height: '18px'}} />
        Оценка уровня изношенности
       </Typography>

       <Typography>
        <DoneSvg color='primary' style={{margin: '0px 10px -4px 0em', height: '18px'}} />
        Перемотка статора фреоностойким проводом высочайшего качества
       </Typography>

       <Typography>
        <DoneSvg color='primary' style={{margin: '0px 10px -4px 0em', height: '18px'}} />
        Вакуумная пропитка
       </Typography>

       <Typography>
        <DoneSvg color='primary' style={{margin: '0px 10px -4px 0em', height: '18px'}} />
        Сборка холодильного компрессора
       </Typography>

       <Typography>
        <DoneSvg color='primary' style={{margin: '0px 10px -4px 0em', height: '18px'}} />
        Испытание компрессора под максимальной нагрузкой
       </Typography>
      </Stack>
     </Stack>
    </Paper>
   </form>
  </div>
 );
}
