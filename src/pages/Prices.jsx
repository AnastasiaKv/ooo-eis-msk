import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import {Typography} from '@material-ui/core';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Stack} from '@mui/system';
import JobsType from '../app/components/Prices/JobsType';
import TrustedBox from '../app/components/Prices/TrustedBox';
import RepairMotorsPage from '../app/components/OurServices/pages/1_RepairMotorsPage';
import GeneratorRepairPage from '../app/components/OurServices/pages/2_GeneratorRepairPage';
import RepairTransformersPage from '../app/components/OurServices/pages/3_RepairTransformersPage';
import RewindingMotorsPage from '../app/components/OurServices/pages/5_RewindingMotorsPage';
import SEO from '../app/components/SEO';

const componentStyle = {
 color: '#3c3c3c',
 paddingTop: '0.4em',
 paddingRight: '36.3em',
 paddingBottom: '3em',
 paddingLeft: '0em',
};

export default function Prices() {
 return (
  <main className='ees-content'>
   <SEO
    title='Стоимость'
    description='В таблицах с ценами представлена минимальная стоимость заказа'
    siteTitle='ООО "ЭИС"'
    keywords='цены на ремонт, цены, Перемотка электродвигателей, Ремонт трансформаторов, Ремонт электродвигателей, Ремонт генераторов'
    href='https://eis-msk.ru/prices'
   />
   <div style={componentStyle}>
    <div className='block1' style={componentStyle}>
     <br />
     <TrustedBox />
     <p>
      <Typography
       component='p'
       style={{
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
     <h3>
      <Typography
       variant='h4'
       component='h1'
       style={{fontFamily: 'Furore', fontSize: '28px', paddingRight: '31em', paddingBottom: '2em'}}
      >
       Этапы работ
      </Typography>
     </h3>

     <br />
     <div style={{paddingLeft: '3em', paddingRight: '5em', paddingBottom: '2em'}}>
      <JobsType />
     </div>
    </div>
    <br /> <br /> <br />
    <br />
    <div className='block3' style={{paddingLeft: '0em'}}>
     <Stack sx={{}}>
      <h1>
       <Typography
        variant='h4'
        component='h1'
        style={{
         paddingRight: '31em',
         paddingBottom: '2em',
         textAlign: 'center',
         fontFamily: 'Furore',
         fontSize: '28px',
        }}
       >
        Прейскурант цен
       </Typography>
      </h1>
      <br /> <br />
      <div style={{paddingLeft: '1em', paddingBottom: '0em'}}>
       <Accordion sx={{borderRadius: 3, width: '35em'}}>
        <AccordionSummary
         expandIcon={
          <ExpandMoreIcon sx={{width: '4em', marginRight: '2em', transform: 'rotate(359deg)'}} />
         }
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
       <Accordion sx={{borderRadius: 3, width: '35em'}}>
        <AccordionSummary
         aria-controls='panel2a-content'
         id='panel2a-header'
         expandIcon={
          <ExpandMoreIcon sx={{width: '4em', marginRight: '2em', transform: 'rotate(359deg)'}} />
         }
        >
         <Typography variant='h4' component='h1' style={{fontSize: '28px'}}>
          Ремонт электродвигателей
         </Typography>
        </AccordionSummary>
        <AccordionDetails>
         <RepairMotorsPage />
        </AccordionDetails>
       </Accordion>
       <br />
       <Accordion sx={{borderRadius: 3, width: '35em'}}>
        <AccordionSummary
         aria-controls='panel2a-content'
         id='panel2a-header'
         expandIcon={
          <ExpandMoreIcon sx={{width: '4em', marginRight: '2em', transform: 'rotate(359deg)'}} />
         }
        >
         <Typography variant='h4' component='h1' style={{fontSize: '28px'}}>
          Ремонт трансформаторов
         </Typography>
        </AccordionSummary>
        <AccordionDetails>
         <RepairTransformersPage />
        </AccordionDetails>
       </Accordion>
       <br />
       <Accordion sx={{borderRadius: 3, width: '35em'}}>
        <AccordionSummary
         aria-controls='panel2a-content'
         id='panel2a-header'
         expandIcon={
          <ExpandMoreIcon sx={{width: '4em', marginRight: '2em', transform: 'rotate(359deg)'}} />
         }
        >
         <Typography variant='h4' component='h1' style={{fontSize: '28px'}}>
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
