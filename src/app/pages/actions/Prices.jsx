import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';
import {Stack} from '@mui/system';
import image1 from '../../../assets/img/actions/PricePage/Нам доверяют.png';
import image2 from '../../../assets/img/actions/PricePage/Карточки услуг.png';
import image3 from '../../../assets/img/actions/PricePage/Ремонт генератора.png';
import image4 from '../../../assets/img/actions/PricePage/Ремонт электродвигателей.png';
import SimpleTable from '../../components/SimpleTable';
import JobsType from '../../components/JobsType';

const data = [
 {
  name: 'Замена щеточного узла (для некоторых моделей)',
  price: 'от 900 руб.',
 },
 {
  name: 'Замена реле-регулятора напряжения',
  price: 'от 1300 руб.',
 },
 {
  name: 'Замена диодного моста',
  price: 'от 1600 руб.',
 },
 {
  name: 'Замена диодов',
  price: 'от 550 руб.',
 },
 {
  name: 'Замена роторных колец',
  price: 'от 900 руб.',
 },
 {
  name: 'Замена подшипников',
  price: 'от 700 руб.',
 },
 {
  name: 'Замена или ремонт ротора',
  price: 'от 2000 руб.',
 },
 {
  name: 'Замена статорной обмотки',
  price: 'от 1800 руб.',
 },
 {
  name: 'Замена проставок под подшипники — только работа',
  price: 'от 500 руб.',
 },
 {
  name: 'Замена шкива',
  price: 'от 700 руб.',
 },
 {
  name: 'Замена обгонной муфты (для некоторых моделей)',
  price: 'от 2300 руб.',
 },
];

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
   <div className='block2' style={{paddingLeft: '4em'}}>
    <h2>
     <Typography variant='h4' component='h2' sx={{paddingRight: '376px'}}>
      Виды работ
     </Typography>
    </h2>
    <br />
    <JobsType />
   </div>
   <br />
   <br />
   <div className='block3'>
    <h2>
     <Typography variant='h4' component='h2' sx={{paddingRight: '376px'}}>
      Прейскурант цен
     </Typography>
    </h2>
    <br />
    <p style={{textAlign: 'left', float: 'left'}}>
     <p style={{paddingLeft: '12rem'}}>
      <h4>
       <Typography variant='h4' component='h4'>
        Ремонт генератора
       </Typography>
      </h4>
      <h6>
       <span>
        <Typography variant='h6' component='span'>
         от 500 руб.
        </Typography>
       </span>
      </h6>
     </p>
     <br />
     <SimpleTable data={data} />
    </p>
    <br />
    <p style={{textAlign: 'left', float: 'left'}}>
     <p style={{paddingLeft: '12rem'}}>
      <h4>
       <Typography variant='h4' component='h4'>
        Ремонт електродвигателя
       </Typography>
      </h4>
      <h6>
       <span>
        <Typography variant='h6' component='span'>
         от 500 руб.
        </Typography>
       </span>
      </h6>
     </p>
     <br />
     <SimpleTable data={data} />
    </p>
   </div>
  </div>
 );
}
