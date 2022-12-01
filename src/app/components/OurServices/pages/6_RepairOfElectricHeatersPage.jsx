import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {Typography} from '@material-ui/core';
import image6 from '../../../../assets/img/services/6.png';
import ReportProblemSvg from '@mui/icons-material/ReportProblemRounded';
import Paper from '@mui/material/Paper';
import SEO from '../../SEO';
import '../../../../assets/css/browser-typography.css';
import {isSafari, isMobileSafari, isChrome, isFirefox, isDesktop} from 'react-device-detect';
import {textAlign} from '@mui/system';

export default function RepairOfElectricHeatersPage() {
 return (
  <form style={{height: '100%'}}>
   <SEO
    title='Ремонт электронагревателей'
    description='Ремонт электронагревателей от 500 руб.'
    siteTitle='ООО "ЭИС"'
    keywords=''
    href='https://eis-msk.ru/services/repair-of-electric-heaters-page'
   />
   <Paper elevation={4} style={{backgroundColor: '#f7f7f7', width: '31.2em'}}>
    <Stack
     mt={2}
     direction='column'
     style={{color: '#1a202c', paddingBottom: '1em', paddingTop: '0em'}}
    >
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
        width: '8em',
        height: '6em',
        float: 'right' /* Выравнивание по правому краю  */,
        margin: '-1em -112px 13px -29px',
       }}
       loading='lazy'
       component='img'
       alt='Ремонт электронагревателей'
       src={image6}
      />
      <h1>
       <Typography
        variant='h4'
        component='h4'
        style={{marginLeft: '1em', fontFamily: 'Furore', fontSize: '28px'}}
       >
        Ремонт электронагревателей от 500 руб.
       </Typography>
      </h1>
     </p>
    </Stack>
    <Typography variant='' className={isMobileSafari ? 'safari-subtitle2' : 'subtitle2'}>
     Виды поломок
    </Typography>
    <div className={isMobileSafari ? 'safari-medium2' : 'medium2'}>
     <Typography variant=''>
      Несмотря на относительную простоту конструкции, ремонт электрических
      <br /> водонагревателей может потребоваться в нескольких случаях:
     </Typography>
    </div>
    {isMobileSafari ? <br /> : <></>}
    <Stack component='ul' spacing={isMobileSafari ? 1 : 1} style={{marginLeft: '2em', textAlign: 'left'}}>
     <Typography variant='' className={isMobileSafari ? 'safari-medium' : 'medium'}>
      <ReportProblemSvg
       style={{
        margin: '0px 10px -4px 0em',
        width: '25px',
        height: '26px',
        color: '#f44336',
       }}
      />
      Выход из строя нагревательного элемента
     </Typography>

     <Typography variant='' className={isMobileSafari ? 'safari-medium' : 'medium'}>
      <ReportProblemSvg
       style={{
        margin: '0px 10px -4px 0em',
        width: '25px',
        height: '26px',
        color: '#f44336',
       }}
      />
      Поломка терморегулятора
     </Typography>

     <Typography variant='' className={isMobileSafari ? 'safari-medium' : 'medium'}>
      <ReportProblemSvg
       style={{
        margin: '0px 10px -4px 0em',
        width: '25px',
        height: '26px',
        color: '#f44336',
       }}
      />
      Ухудшение эксплуатационных параметров, связанное с образованием накипи
     </Typography>

     <Typography variant='' className={isMobileSafari ? 'safari-medium' : 'medium'}>
      <ReportProblemSvg
       style={{
        margin: '0px 10px -4px 0em',
        width: '25px',
        height: '26px',
        color: '#f44336',
       }}
      />
      Возникновение коррозионных процессов.
     </Typography>
    </Stack>
    <div className={isMobileSafari ? 'safari-medium2' : 'medium2'}>
     <Typography variant=''>
      <i>
       *Наши специалисты устранят любые поломки электрических водонагревателей,
       <br />
       ремонт которых оправдан из экономических соображений.
      </i>
     </Typography>
    </div>
    <br />
   </Paper>
  </form>
 );
}
