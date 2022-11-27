import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CustomizedTables from '../../../modules/common/CustomizedTables';
import image5 from '../../../../assets/img/services/5.png';
import Paper from '@mui/material/Paper';
import BoltSvg from '@mui/icons-material/Bolt';
import SEO from '../../SEO';
import '../../../../assets/css/browser-typography.css';
import {isSafari, isMobileSafari, isChrome, isFirefox, isDesktop} from 'react-device-detect';

export default function RewindingMotorsPage() {
 return (
  <div>
   <form style={{height: '100%'}}>
    <SEO
     title='Ремонт и перемотка двигателей'
     description=' Разборка и очистка,  Расчет и подбор материалов для обмотки, Устранение дефектов ротора и/или статора с обработкой пазов,  Намотка катушек'
     siteTitle='ООО "ЭИС"'
     keywords=''
     href='https://eis-msk.ru/services/rewinding-motors-page'
    />
    <Paper elevation={4} sx={{backgroundColor: '#f7f7f7', width: '31.2em'}}>
     <Stack
      mt={2}
      direction='column'
      spacing={1}
      style={{paddingLeft: '2em', paddingBottom: '2em'}}
     >
      <p
       style={{
        paddingTop: '0em',
        width: '646px',
        height: '211px',
        textAlign: 'left',
        paddingBottom: '0',
       }}
      >
       <img
        style={{
         paddingTop: '18px',
         width: '6.7em',
         height: '6.9em',
         float: 'right' /* Выравнивание по правому краю  */,
         marginRight: '-2em',
        }}
        loading='lazy'
        component='img'
        alt='Ремонт и перемотка двигателей'
        src={image5}
       />
       <h1 style={{paddingTop: '1em'}}>
        <Typography variant='h4' style={{fontFamily: 'Furore', fontSize: '28px'}}>
         Ремонт и перемотка двигателей
        </Typography>
       </h1>
      </p>
      <Typography className={isMobileSafari ? 'safari-subtitle3' : 'subtitle3'}>
       При выходе из строя электрообмоток производятся следующие работы:
      </Typography>
      <Stack component='ul' spacing={1} style={{textAlign: 'left'}}>
       <Typography className={isMobileSafari ? 'safari-medium' : 'medium'}>
        <BoltSvg
         style={{margin: '0px 10px -4px 0em', width: '25px', height: '26px', color: '#ffcf40'}}
        />
        Разборка и очистка
       </Typography>

       <Typography className={isMobileSafari ? 'safari-medium' : 'medium'}>
        <BoltSvg
         style={{margin: '0px 10px -4px 0em', width: '25px', height: '26px', color: '#ffcf40'}}
        />
        Расчет и подбор материалов для обмотки
       </Typography>

       <Typography className={isMobileSafari ? 'safari-medium' : 'medium'}>
        <BoltSvg
         style={{margin: '0px 10px -4px 0em', width: '25px', height: '26px', color: '#ffcf40'}}
        />
        Устранение дефектов ротора и/или статора с обработкой пазов
       </Typography>

       <Typography className={isMobileSafari ? 'safari-medium' : 'medium'}>
        <BoltSvg
         style={{margin: '0px 10px -4px 0em', width: '25px', height: '26px', color: '#ffcf40'}}
        />
        Намотка катушек
       </Typography>

       <Typography className={isMobileSafari ? 'safari-medium' : 'medium'}>
        <BoltSvg
         style={{margin: '0px 10px -4px 0em', width: '25px', height: '26px', color: '#ffcf40'}}
        />
        Подготовка изоляции с последующей установкой обмотки
       </Typography>

       <Typography className={isMobileSafari ? 'safari-medium' : 'medium'}>
        <BoltSvg
         style={{margin: '0px 10px -4px 0em', width: '25px', height: '26px', color: '#ffcf40'}}
        />
        Пропитка токоведущих элементов
       </Typography>

       <Typography className={isMobileSafari ? 'safari-medium' : 'medium'}>
        <BoltSvg
         style={{margin: '0px 10px -4px 0em', width: '25px', height: '26px', color: '#ffcf40'}}
        />
        Просушка изоляции и тестирование обмоток
       </Typography>

       <Typography className={isMobileSafari ? 'safari-medium' : 'medium'}>
        <BoltSvg
         style={{margin: '0px 10px -4px 0em', width: '25px', height: '26px', color: '#ffcf40'}}
        />
        Сборка и испытание электродвигателя
       </Typography>
      </Stack>
      <br />

      <CustomizedTables />
     </Stack>
    </Paper>
   </form>
  </div>
 );
}
