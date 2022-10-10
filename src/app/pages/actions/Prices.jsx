import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Grid from '@material-ui/core/Grid';
import {Stack} from '@mui/system';
import image1 from '../../../assets/img/actions/PricePage/Нам доверяют.png';
import image2 from '../../../assets/img/actions/PricePage/Карточки услуг.png';
import image3 from '../../../assets/img/actions/PricePage/Ремонт генератора.png';
import image4 from '../../../assets/img/actions/PricePage/Ремонт электродвигателей.png';
import SimpleTable from '../../components/SimpleTable';
import JobsType from '../../components/JobsType';
import JobsStepper from '../../components/JobsStepper';
import TrustedBox from './components/TrustedBox';
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';

import RepairMotorsPage from '../../pages/services/1_RepairMotorsPage';
import GeneratorRepairPage from '../../pages/services/2_GeneratorRepairPage';
import RepairTransformersPage from '../../pages/services/3_RepairTransformersPage';
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
 color: '#3c3c3c',
 paddingTop: '15px',
 paddingBottom: '0px',
 paddingRight: '18em',
 paddingLeft: '0px',
};
const textStyle = {
 fontFamily: 'NeoSansPro',
 display: 'block',
 textAlign: 'justify',
 maxWidth: '1000px',
 fontSize: 13,
 lineHeight: '1.5',
};
export default function Prices() {
 return (
  <main className='ees-content'>
   <div style={componentStyle}>
    <div className='block1' style={componentStyle}>
     <br />
     <TrustedBox />
     <p>
      <Typography
       variant='body2'
       component='p'
       style={{fontSize: '15px', paddingLeft: '40px', textAlign: 'justify'}}
      >
       Ремонт и замена обмотки двигателя - кропотливый, системный, скрупулёзный процесс.
       <br />И перед выдачей двигателя клиенту он проходит 5 ступенчатый контроль качества, что
       позволяет нам быть уверенными в его стабильной работе. Гарантия качества работ. <br />
       Ремонт и замена обмотки двигателя - кропотливый, системный, скрупулёзный процесс. Ремонт и
       замена обмотки двигателя - кропотливый, системный, скрупулёзный процесс. <br />И перед
       выдачей двигателя клиенту он проходит 5 ступенчатый контроль качества, что позволяет нам быть
       уверенными в его стабильной работе.
      </Typography>
     </p>
    </div>
    <br /> <br />
    <div className='block2' style={{paddingLeft: '2em'}}>
     <h2>
      <Typography variant='h4' component='h2' style={{fontSize: '30px', paddingRight: '376px'}}>
       Виды работ
      </Typography>
     </h2>
     <br />
     <JobsType />
    </div>
    <br />
    <br />
    <h2>
     <Typography variant='h4' component='h2' sx={{fontSize: '30px', paddingRight: '343px'}}>
      Прейскурант цен
     </Typography>
    </h2>
    <br />
    <br />
    <div style={{paddingLeft: '10px', paddingBottom: '20px'}}>
     <Accordion sx={{width: '36em'}}>
      <AccordionSummary
       expandIcon={<ExpandMoreIcon style={{marginRight: '2em'}} />}
       aria-controls='panel1a-content'
       id='panel1a-header'
      >
       <Typography variant='h4' component='h4' style={{fontSize: '28px'}}>
        Ремонт генератора
       </Typography>
      </AccordionSummary>
      <AccordionDetails>
       <GeneratorRepairPage />
      </AccordionDetails>
     </Accordion>
     <br />
     <Accordion sx={{width: '36em'}}>
      <AccordionSummary
       aria-controls='panel2a-content'
       id='panel2a-header'
       expandIcon={<ExpandMoreIcon style={{marginRight: '2em'}} />}
      >
       <Typography variant='h4' component='h4' style={{fontSize: '28px'}}>
        Ремонт электродвигателя
       </Typography>
      </AccordionSummary>
      <AccordionDetails>
       <RepairMotorsPage />
      </AccordionDetails>
     </Accordion>
    </div>
   </div>
  </main>
 );
}
