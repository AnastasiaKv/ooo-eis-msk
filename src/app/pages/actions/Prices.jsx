import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';
import {Stack} from '@mui/system';
import image1 from '../../../assets/img/actions/PricePage/Нам доверяют.png';
import image2 from '../../../assets/img/actions/PricePage/Карточки услуг.png';
import image3 from '../../../assets/img/actions/PricePage/Ремонт генератора.png';
import image4 from '../../../assets/img/actions/PricePage/Ремонт электродвигателей.png';

export default function Prices() {
 return (
  <>
   <div className='block1'>
    <br />
    <p>
     <Typography variant='caption'>
      Ремонт и замена обмотки двигателя - кропотливый, системный, скрупулёзный процесс. И перед
      выдачей двигателя клиенту он проходит 5 ступенчатый контроль качества, что позволяет нам быть
      уверенными в его стабильной работе. Гарантия качества работ. Ремонт и замена обмотки двигателя
      - кропотливый, системный, скрупулёзный процесс. Ремонт и замена обмотки двигателя -
      кропотливый, системный, скрупулёзный процесс. И перед выдачей двигателя клиенту он проходит 5
      ступенчатый контроль качества, что позволяет нам быть уверенными в его стабильной работе.
     </Typography>
    </p>
    <Box
     sx={{
      float: 'right' /* Выравнивание по правому краю  */,
      margin: '7px 0 7px 7px' /* Отступы вокруг картинки */,
     }}
     component='img'
     alt='Нам доверяют'
     src={image1}
    />
   </div>
   <br /> <br />
   <div className='block2'>
    <h2>
     <Typography variant='caption'>Виды работ</Typography>
    </h2>
    <Box component='img' alt='Этапы работ' src={image2} />
   </div>
   <div className='block3'>
    <h2>
     <Typography variant='caption'>Прейскурант цен</Typography>
    </h2>
    <Box component='img' alt='Этапы работ' src={image3} />
    <br />
    <Box component='img' alt='Этапы работ' src={image4} />
   </div>
  </>
 );
}
