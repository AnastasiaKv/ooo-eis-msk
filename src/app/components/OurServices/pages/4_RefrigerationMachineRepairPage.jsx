import React from 'react';
import {Paper, Stack, Typography} from '@mui/material';
import image4 from '../../../../assets/img/services/4.png';

import DoneSvg from '@mui/icons-material/AcUnit';
import SEO from '../../SEO';
import '../../../../assets/css/browser-typography.css';
import {isMobileSafari} from 'react-device-detect';

export default function RefrigerationMachineRepairPage() {
 return (
  <div className='eis-service-page'>
   <form style={{height: '100%'}}>
    <SEO
     title='Ремонт холодильных машин и компрессоров'
     description='Ремонт холодильных машин и компрессоров от 4000 руб.'
     siteTitle='ООО "ЭИС"'
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

      <Typography variant='' className={isMobileSafari ? 'safari-subtitle3' : 'subtitle3'} style={{textAlign: 'left'}}>
       Выполняем следующие технологические операции:
      </Typography>
      <Stack component='ul' spacing={1} style={{textAlign: 'left'}}>
       <Typography variant='' className={isMobileSafari ? 'safari-medium' : 'medium'}>
        <DoneSvg color='primary' style={{margin: '0px 10px -4px 0em', height: '18px'}} />
        Тщательная диагностика и дефектовка холодильного компрессора
       </Typography>

       <Typography variant='' className={isMobileSafari ? 'safari-medium' : 'medium'}>
        <DoneSvg color='primary' style={{margin: '0px 10px -4px 0em', height: '18px'}} />
        Оценка уровня изношенности
       </Typography>

       <Typography variant='' className={isMobileSafari ? 'safari-medium' : 'medium'}>
        <DoneSvg color='primary' style={{margin: '0px 10px -4px 0em', height: '18px'}} />
        Перемотка статора фреоностойким проводом высочайшего качества
       </Typography>

       <Typography variant='' className={isMobileSafari ? 'safari-medium' : 'medium'}>
        <DoneSvg color='primary' style={{margin: '0px 10px -4px 0em', height: '18px'}} />
        Вакуумная пропитка
       </Typography>

       <Typography variant='' className={isMobileSafari ? 'safari-medium' : 'medium'}>
        <DoneSvg color='primary' style={{margin: '0px 10px -4px 0em', height: '18px'}} />
        Сборка холодильного компрессора
       </Typography>

       <Typography variant='' className={isMobileSafari ? 'safari-medium' : 'medium'}>
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
