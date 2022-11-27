import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {Typography} from '@material-ui/core';
import CustomizedTables from '../../../modules/common/CustomizedTables';
import image5 from '../../../../assets/img/services/5.png';
import Paper from '@mui/material/Paper';
import BoltSvg from '@mui/icons-material/Bolt';
import SEO from '../../SEO';

export default function RewindingMotorsPage() {
 return (
  <form style={{height: '100%'}}>
   <SEO
    title='Ремонт и перемотка двигателей'
    description=' Разборка и очистка,  Расчет и подбор материалов для обмотки, Устранение дефектов ротора и/или статора с обработкой пазов,  Намотка катушек'
    name='ООО ЭИС'
   />
   <Paper elevation={4} style={{backgroundColor: '#f7f7f7', width: '31.2em'}}>
    <Stack mt={2} direction='column' spacing={0} style={{paddingLeft: '2em', paddingBottom: '2em'}}>
     <p
      style={{
       paddingTop: '0em',
       width: '646px',
       height: '211px',
       textAlign: 'left',
       paddingBottom: '0',
      }}
     >
      <Box
       style={{
        paddingTop: '18px',
        paddingLeft: '20px',
        width: '7em',
        height: '7em',
        float: 'right' /* Выравнивание по правому краю  */,
       }}
       loading='lazy'
       component='img'
       alt='Ремонт и перемотка двигателей'
       src={image5}
      />
      <h1 style={{paddingTop: '0em'}}>
       <Typography variant='h4' style={{fontFamily: 'Furore', fontSize: '28px'}}>
        Ремонт и перемотка двигателей
       </Typography>
      </h1>
     </p>
     <br />

     <p style={{paddingBottom: 10}}>
      <span style={{fontSize: 20}}>
       <b>При выходе из строя электрообмоток производятся следующие работы:</b>
      </span>
     </p>

     <div style={{display: 'flex', alignItems: 'center', justifyContent: 'left', paddingBottom: 7}}>
      <BoltSvg style={{width: '25px', height: '26px', color: '#ffcf40'}} />
      <span style={{fontSize: '16px', marginLeft: 0}}>Разборка и очистка</span>
     </div>
     <div style={{display: 'flex', alignItems: 'center', justifyContent: 'left', paddingBottom: 7}}>
      <BoltSvg style={{width: '25px', height: '26px', color: '#ffcf40'}} />
      <span style={{fontSize: '16px', marginLeft: 0}}>Расчет и подбор материалов для обмотки</span>
     </div>
     <div style={{display: 'flex', alignItems: 'center', justifyContent: 'left', paddingBottom: 7}}>
      <BoltSvg style={{width: '25px', height: '26px', color: '#ffcf40'}} />
      <span style={{fontSize: '16px', marginLeft: 0}}>
       Устранение дефектов ротора и/или статора с обработкой пазов
      </span>
     </div>
     <div style={{display: 'flex', alignItems: 'center', justifyContent: 'left', paddingBottom: 7}}>
      <BoltSvg style={{width: '25px', height: '26px', color: '#ffcf40'}} />
      <span style={{fontSize: '16px', marginLeft: 0}}>Намотка катушек</span>
     </div>
     <div style={{display: 'flex', alignItems: 'center', justifyContent: 'left', paddingBottom: 7}}>
      <BoltSvg style={{width: '25px', height: '26px', color: '#ffcf40'}} />
      <span style={{fontSize: '16px', marginLeft: 0}}>
       Подготовка изоляции с последующей установкой обмотки
      </span>
     </div>
     <div style={{display: 'flex', alignItems: 'center', justifyContent: 'left', paddingBottom: 7}}>
      <BoltSvg style={{width: '25px', height: '26px', color: '#ffcf40'}} />
      <span style={{fontSize: '16px', marginLeft: 0}}>Пропитка токоведущих элементов</span>
     </div>
     <div style={{display: 'flex', alignItems: 'center', justifyContent: 'left', paddingBottom: 7}}>
      <BoltSvg style={{width: '25px', height: '26px', color: '#ffcf40'}} />
      <span style={{fontSize: '16px', marginLeft: 0}}>
       Просушка изоляции и тестирование обмоток
      </span>
     </div>
     <div style={{display: 'flex', alignItems: 'center', justifyContent: 'left'}}>
      <BoltSvg style={{width: '25px', height: '26px', color: '#ffcf40'}} />
      <span style={{fontSize: '16px', marginLeft: 0}}>Сборка и испытание электродвигателя</span>
     </div>

     <CustomizedTables />
    </Stack>
   </Paper>
  </form>
 );
}
