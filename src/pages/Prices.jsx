import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Grid from '@material-ui/core/Grid';
import {Stack} from '@mui/system';
import SimpleTable from '../modules/common/SimpleTable';
import JobsType from '../modules/pages/prices/JobsType';
import JobsStepper from '../modules/pages/prices/stepper/JobsStepper';
import TrustedBox from '../modules/pages/prices/TrustedBox';
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';

import RepairMotorsPage from '../components/OurServices/pages/1_RepairMotorsPage';
import GeneratorRepairPage from '../components/OurServices/pages/2_GeneratorRepairPage';
import RepairTransformersPage from '../components/OurServices/pages/3_RepairTransformersPage';
import RewindingMotorsPage from '../components/OurServices/pages/5_RewindingMotorsPage';
import SEO from '../components/SEO';

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
 paddingTop: '0.4em',
 paddingRight: '36.3em',
 paddingBottom: '3em',
 paddingLeft: '0em',
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
   <SEO
    title='Стоимость'
    description='В таблицах с ценами представлена минимальная стоимость заказа по каждой позиции,
          окончательная стоимость будет сформирована после первичной дефектации.'
    name='ООО "ЭИС"'
   />
   <div style={componentStyle}>
    <div className='block1' style={componentStyle}>
     <br />
     <TrustedBox />
     <p>
      <Typography
       component='p'
       sx={{
        textIndent: '2ch',
        lineHeight: '2.6em',
        flexGrow: 1,
        fontFamily: 'Roboto',
        position: 'relative',
        justifyContent: 'space-around',
        textAlign: 'justify',
        paddingLeft: '0px',
        color: '#292929',
       }}
      >
       В таблицах с ценами представлена минимальная стоимость заказа по каждой позиции,
       окончательная стоимость будет сформирована после первичной дефектации. Действует гибкая
       система оценки стоимости ремонта, при которой вы платите только за произведённые работы без
       лишних затрат.
      </Typography>
     </p>
    </div>
    <div className='block2' style={{paddingLeft: '1em'}}>
     <h2>
      <Typography
       variant='h4'
       component='h2'
       sx={{fontFamily: 'Furore', fontSize: '28px', paddingRight: '31em', paddingBottom: '2em'}}
      >
       Этапы работ
      </Typography>
     </h2>
     <br />
     <div style={{paddingLeft: '3em', paddingRight: '5em', paddingBottom: '2em'}}>
      <JobsType />
     </div>
    </div>
    <br /> <br /> <br />
    <br />
    <div className='block3' style={{paddingLeft: '0em'}}>
     <Stack sx={{}}>
      <Typography
       variant='h4'
       component='h2'
       sx={{
        paddingRight: '31em',
        paddingBottom: '2em',
        textAlign: 'center',
        fontFamily: 'Furore',
        fontSize: '28px',
       }}
      >
       Прейскурант цен
      </Typography>
      <br /> <br />
      <div style={{paddingLeft: '3em', paddingBottom: '20px'}}>
       <Accordion sx={{borderRadius: 3, width: '33em'}}>
        <AccordionSummary
         expandIcon={<ExpandMoreIcon style={{marginRight: '2em'}} />}
         aria-controls='panel1a-content'
         id='panel1a-header'
        >
         <Typography variant='h4' component='h2' style={{fontSize: '28px'}}>
          Ремонт генераторов
         </Typography>
        </AccordionSummary>
        <AccordionDetails>
         <GeneratorRepairPage />
        </AccordionDetails>
       </Accordion>
       <br />
       <Accordion sx={{borderRadius: 3, width: '33em'}}>
        <AccordionSummary
         aria-controls='panel2a-content'
         id='panel2a-header'
         expandIcon={<ExpandMoreIcon style={{marginRight: '2em'}} />}
        >
         <Typography variant='h4' component='h2' style={{fontSize: '28px'}}>
          Ремонт электродвигателей
         </Typography>
        </AccordionSummary>
        <AccordionDetails>
         <RepairMotorsPage />
        </AccordionDetails>
       </Accordion>
       <br />
       <Accordion sx={{borderRadius: 3, width: '33em'}}>
        <AccordionSummary
         aria-controls='panel2a-content'
         id='panel2a-header'
         expandIcon={<ExpandMoreIcon style={{marginRight: '2em'}} />}
        >
         <Typography variant='h4' component='h2' style={{fontSize: '28px'}}>
          Ремонт трансформаторов
         </Typography>
        </AccordionSummary>
        <AccordionDetails>
         <RepairTransformersPage />
        </AccordionDetails>
       </Accordion>
       <br />
       <Accordion sx={{borderRadius: 3, width: '33em'}}>
        <AccordionSummary
         aria-controls='panel2a-content'
         id='panel2a-header'
         expandIcon={<ExpandMoreIcon style={{marginRight: '2em'}} />}
        >
         <Typography variant='h4' component='h2' style={{fontSize: '28px'}}>
          Перемотка электродвигателей
         </Typography>
        </AccordionSummary>
        <AccordionDetails>
         <RewindingMotorsPage />
        </AccordionDetails>
       </Accordion>
      </div>
     </Stack>
    </div>
   </div>
  </main>
 );
}
