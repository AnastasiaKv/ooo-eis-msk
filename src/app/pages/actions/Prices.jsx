import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';
import {Stack} from '@mui/system';
import image1 from '../../../assets/img/actions/PricePage/Нам доверяют.png';
import image2 from '../../../assets/img/actions/PricePage/Карточки услуг.png';
import image3 from '../../../assets/img/actions/PricePage/Ремонт генератора.png';
import image4 from '../../../assets/img/actions/PricePage/Ремонт электродвигателей.png';

const componentStyle = {
 paddingTop: '15px',
 paddingBottom: '0px',
 paddingRight: '20em',
 paddingLeft: '0px',
};

export default function Prices() {
 return (
  <div style={componentStyle}>
   <div className='block1' style={componentStyle}>
    <br />
    <Box
     sx={{
      float: 'right' /* Выравнивание по правому краю  */,
      margin: '7px 0 7px 20px' /* Отступы вокруг картинки */,
      height: '250px',
     }}
     component='img'
     alt='Нам доверяют'
     src={image1}
    />
    <p>
     <Typography variant='body2'>
      Ремонт и замена обмотки двигателя - кропотливый, системный, скрупулёзный процесс. И перед
      выдачей двигателя клиенту он проходит 5 ступенчатый контроль качества, что позволяет нам быть
      уверенными в его стабильной работе. Гарантия качества работ. Ремонт и замена обмотки двигателя
      - кропотливый, системный, скрупулёзный процесс. Ремонт и замена обмотки двигателя -
      кропотливый, системный, скрупулёзный процесс. И перед выдачей двигателя клиенту он проходит 5
      ступенчатый контроль качества, что позволяет нам быть уверенными в его стабильной работе.
     </Typography>
    </p>
   </div>
   <br /> <br />
   <div className='block2'>
    <h2>
     <Typography variant='h4' component='h2' sx={{paddingRight: '376px'}}>
      Виды работ
     </Typography>
    </h2>
    <Box
     component='img'
     alt='Этапы работ'
     src={image2}
     sx={{
      height: '271px',
      paddingRight: '340px',
     }}
    />
   </div>
   <br />
   <div className='block3'>
    <h2>
     <Typography variant='h4' component='h2' sx={{paddingRight: '376px'}}>
      Прейскурант цен
     </Typography>
    </h2>
    <Box component='img' alt='Этапы работ' src={image3} />
    <br />
    <Box component='img' alt='Этапы работ' src={image4} />
   </div>
  </div>
 );
}
