import React from 'react';
import {Paper, Box, Stack, Typography} from '@mui/material';
import SEO from '../../SEO';
import image6 from '../../../../assets/img/services/8.png';
import ComputerSvg from '@mui/icons-material/Computer';
import '../../../../assets/css/browser-typography.css';
import {isMobileSafari} from 'react-device-detect';

export default function RepairOfBoardsAndBlocksPage() {
 return (
  <form style={{height: '100%'}}>
   <SEO
    title='Ремонт плат и электронных блоков'
    description='Ремонт плат от автомобильной электроники'
    siteTitle='ООО "ЭИС"'
    keywords=''
    href='https://eis-msk.ru/services/repair-of-boards-and-blocks-page'
   />
   <Paper
    elevation={4}
    style={{
     backgroundColor: '#f7f7f7',
     paddingLeft: '2em',
     paddingBottom: '0.6em',
     width: '31.2em',
    }}
   >
    <Stack mt={2} direction='column' style={{paddingLeft: '0em', textAlign: 'left'}}>
     <p
      style={{
       paddingTop: '0em',
       width: '23em',
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
        margin: '-1em -127px 16px 6px',
       }}
       loading='lazy'
       component='img'
       alt='Ремонт плат и электронных блоков'
       src={image6}
      />
      <h1>
       <Typography
        variant='h4'
        component='h4'
        style={{fontFamily: 'Furore', textAlign: 'left', fontSize: '25px', paddingTop: '1em'}}
       >
        Ремонт плат и электронных блоков
       </Typography>
      </h1>
     </p>

     <Typography variant='' className={isMobileSafari ? 'safari-subtitle3' : 'subtitle3'}>
      Список ремонтируемой электроники:
     </Typography>
     <Stack
      component='ul'
      spacing={1}
      style={{textAlign: 'left'}}
      className={isMobileSafari ? 'safari-medium3' : 'medium3'}
     >
      <Typography
       variant='caption'
       component='h5'
       style={{
        color: '#1a202c',
        fontFamily: 'Roboto',
        paddingLeft: '10px',
        fontSize: '16px',
        marginLeft: 0,
       }}
      >
       <ComputerSvg color='action' style={{margin: '0px 10px -4px 0em', height: '20px'}} />
       Ремонт плат от бытовой техники
      </Typography>

      <Typography
       variant='caption'
       component='h5'
       style={{
        color: '#1a202c',
        fontFamily: 'Roboto',
        paddingLeft: '10px',
        fontSize: '16px',
        marginLeft: 0,
       }}
      >
       <ComputerSvg color='action' style={{margin: '0px 10px -4px 0em', height: '20px'}} />
       Ремонт плат от автомобильной электроники
      </Typography>

      <Typography
       variant='caption'
       component='h5'
       style={{
        color: '#1a202c',
        fontFamily: 'Roboto',
        paddingLeft: '10px',
        fontSize: '16px',
        marginLeft: 0,
       }}
      >
       <ComputerSvg color='action' style={{margin: '0px 10px -4px 0em', height: '20px'}} />
       Ремонт электронных блоков управления
      </Typography>

      <Typography
       variant='caption'
       component='h5'
       style={{
        color: '#1a202c',
        fontFamily: 'Roboto',
        paddingLeft: '10px',
        fontSize: '16px',
        marginLeft: 0,
       }}
      >
       <ComputerSvg color='action' style={{margin: '0px 10px -4px 0em', height: '20px'}} />
       Ремонт микропроцессорных печатных плат
      </Typography>

      <Typography
       variant='caption'
       component='h5'
       style={{
        color: '#1a202c',
        fontFamily: 'Roboto',
        paddingLeft: '10px',
        fontSize: '16px',
        marginLeft: 0,
       }}
      >
       <ComputerSvg color='action' style={{margin: '0px 10px -4px 0em', height: '20px'}} />
       Ремонт микроэлектроники специального назначения
      </Typography>

      <Typography
       variant='caption'
       component='h5'
       style={{
        color: '#1a202c',
        fontFamily: 'Roboto',
        paddingLeft: '10px',
        fontSize: '16px',
        marginLeft: 0,
       }}
      >
       <ComputerSvg color='action' style={{margin: '0px 10px -4px 0em', height: '20px'}} />
       Ремонт электронных модулей
      </Typography>

      <Typography
       variant='caption'
       component='h5'
       style={{
        color: '#1a202c',
        fontFamily: 'Roboto',
        paddingLeft: '10px',
        fontSize: '16px',
        marginLeft: 0,
       }}
      >
       <ComputerSvg color='action' style={{margin: '0px 10px -4px 0em', height: '20px'}} />
       Ремонт компьютеризованных панелей управления
      </Typography>

      <Typography
       variant='caption'
       component='h5'
       style={{
        color: '#1a202c',
        fontFamily: 'Roboto',
        paddingLeft: '10px',
        fontSize: '16px',
        marginLeft: 0,
       }}
      >
       <ComputerSvg color='action' style={{margin: '0px 10px -4px 0em', height: '20px'}} />
       Ремонт различных источников питания (в т.ч. специального назначения)
      </Typography>
     </Stack>
    </Stack>
   </Paper>
  </form>
 );
}
