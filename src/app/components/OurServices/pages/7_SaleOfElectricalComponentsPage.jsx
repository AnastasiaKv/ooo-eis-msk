import React from 'react';
import {Paper, Box, Stack, Typography} from '@mui/material';
import CurrencyRubleSvg from '@mui/icons-material/CurrencyRubleRounded';
import image7 from '../../../../assets/img/services/7.png';
import SEO from '../../SEO';
import '../../../../assets/css/browser-typography.css';
import {isSafari, isMobileSafari, isChrome, isFirefox, isDesktop} from 'react-device-detect';

export default function SaleOfElectricalComponentsPage() {
 return (
  <form style={{height: '100%'}}>
   <SEO
    title='Продажа электрокомпонентов'
    description='Розничная продажа электрокомпонетов по очень выгодным ценам!'
    siteTitle='ООО "ЭИС"'
    keywords='недорогие компоненты, Электронные компоненты, Продажа электронных компонентов Купить резистор Купить транзистор Купить конденсатор, Купить электролитический конденсатор, Купить варистор, Купить диод, Купить ионистор'
    href='https://eis-msk.ru/services/sale-of-electrical-components-page'
   />
   <Paper elevation={4} style={{backgroundColor: '#f7f7f7', width: '31.2em', paddingLeft: '1em', paddingTop: '1em'}}>
    <Stack mt={2} direction='column' style={{paddingBottom: '2em'}}>
     <h1>
      <Typography
       variant='h4'
       component='h4'
       style={{fontFamily: 'Furore', paddingTop: '0em', textAlign: 'center', fontSize: '28px'}}
      >
       Продажа электрокомпонентов
      </Typography>
     </h1>
     <Stack
      direction='row-reverse'
      sx={{
       paddingTop: '2em',
       display: 'flex',
       textAlign: 'justify',
       alignItems: 'center',
       maxWidth: '800px',
       fontSize: 15,
       lineHeight: '1.5',
       color: '#292929',
      }}
     >
      <Stack direction='row' sx={{paddingRight: '1em'}}>
       <Box
        sx={{
         height: '15em',
         width: '20em',
         borderRadius: '7px',

         float: 'right' /* Выравнивание по правому краю  */,
         margin: '0px 0px 29px 9px' /* Отступы вокруг картинки */,
        }}
        loading='lazy'
        component='img'
        alt='Продажа электрокомпонентов'
        src={image7}
       />
      </Stack>

      <Stack component='ul' spacing={2} style={{paddingLeft: '10px', textAlign: 'left'}}>
       <Typography variant='' className={isMobileSafari ? 'safari-medium-large' : 'medium'}>
        <CurrencyRubleSvg
         style={{
          margin: '0px 10px -4px 0em',
          width: '25px',
          height: '22px',
          color: '#f12b21',
         }}
        />
        Осуществляем розничную продажу электрокомпонетов по очень выгодным ценам!
       </Typography>

       <Typography variant='' className={isMobileSafari ? 'safari-medium-large' : 'medium'}>
        <CurrencyRubleSvg
         style={{
          margin: '0px 10px -4px 0em',
          width: '25px',
          height: '22px',
          color: '#f44336',
         }}
        />
        Перечень деталей в наличии.
       </Typography>

       <Typography variant='' className={isMobileSafari ? 'safari-medium-large' : 'medium'}>
        <CurrencyRubleSvg
         style={{
          margin: '0px 10px -4px 0em',
          width: '25px',
          height: '22px',
          color: '#f44336',
         }}
        />
        Проффесиональная консультация по подбору.
       </Typography>
      </Stack>
     </Stack>
    </Stack>
   </Paper>
  </form>
 );
}
