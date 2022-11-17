import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Stack} from '@mui/system';
import Paper from '@mui/material/Paper';

import image1 from '../assets/img/gallery/Gallery_ASIG.png';
import image3 from '../assets/img/gallery/Gallery_Frezer.png';
import image4 from '../assets/img/gallery/Gallery_istochnik_pitaniya.png';
import image6 from '../assets/img/gallery/Gallery_Nikita_izmeryet.png';
import image7 from '../assets/img/gallery/Gallery_Ruslan.png';
import image8 from '../assets/img/gallery/Gallery_SBS.png';
import image9 from '../assets/img/gallery/Gallery_Stend_peremotki.png';
import image10 from '../assets/img/gallery/Gallery_Stol_electronika.png';
import image12 from '../assets/img/gallery/Gallery_Takarniy_stanok.png';
import SEO from '../app/components/SEO';

const itemData1 = [
 {
  id: 1,
  image: image1,
  title: 'Послеремонтные испытания',
  featured: true,
 },
 {
  id: 2,
  image: image3,
  title: 'Фрезерный станок',
  featured: true,
 },
 {
  id: 3,
  image: image4,
  title: 'Предремонтные испытания',
  featured: true,
 },
];

const itemData2 = [
 {
  id: 1,
  image: image6,
  title: 'Высокоточные измерения',
  featured: true,
 },
 {
  id: 2,
  image: image7,
  title: 'Холодильный цех',
  featured: true,
 },
 {
  id: 3,
  image: image8,
  title: 'Балансировка роторов',
  featured: true,
 },
];

const itemData3 = [
 {
  id: 1,
  image: image9,
  title: 'Замена обмоток',
  featured: true,
 },
 {
  id: 2,
  image: image10,
  title: 'Ремонт электронники',
  featured: true,
 },
 {
  id: 3,
  image: image12,
  title: 'Токарный станок',
  featured: true,
 },
];

export default function Gallery() {
 return (
  <main className='ees-content'>
   <SEO title='Галерея' description='Сотрудники, цеха, аппаратура' name='ООО "ЭИС"' />
   <Stack
    direction='column'
    spacing={3}
    sx={{paddingTop: '3em', paddingBottom: '2em', transform: 'translateZ(0)'}}
   >
    <Stack direction='row' spacing={1} sx={{paddingLeft: '1.2em'}}>
     {itemData1.map((service) => (
      <Paper key={service.id} sx={{boxShadow: 'none'}}>
       <Typography sx={{color: 'white', bgcolor: '#2d3748', opacity: '0.8'}}>
        {service.title}
       </Typography>
       <Box
        sx={{height: '290px', width: '290px'}}
        loading='lazy'
        alt={service.title}
        component='img'
        src={service.image}
       />
      </Paper>
     ))}
    </Stack>
    <Stack direction='row' spacing={1} sx={{paddingLeft: '1.2em'}}>
     {itemData2.map((service) => (
      <Paper key={service.id} sx={{boxShadow: 'none'}}>
       <Typography sx={{color: 'white', bgcolor: '#2d3748', opacity: '0.8'}}>
        {service.title}
       </Typography>
       <Box
        sx={{height: '290px', width: '290px'}}
        loading='lazy'
        alt={service.title}
        component='img'
        src={service.image}
       />
      </Paper>
     ))}
    </Stack>
    <Stack direction='row' spacing={1} sx={{paddingLeft: '1.2em'}}>
     {itemData3.map((service) => (
      <Paper key={service.id} sx={{boxShadow: 'none'}}>
       <Typography sx={{color: 'white', bgcolor: '#2d3748', opacity: '0.8'}}>
        {service.title}
       </Typography>
       <Box
        sx={{height: '290px', width: '290px'}}
        loading='lazy'
        alt={service.title}
        component='img'
        src={service.image}
       />
      </Paper>
     ))}
    </Stack>
   </Stack>
  </main>
 );
}
