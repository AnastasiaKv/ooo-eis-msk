import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GridServices from '../components/OurServices/GridServices';
import GServices from '../components/OurServices/GServices3';
import {Stack} from '@mui/system';
import SEO from '../components/SEO';

export default function Home() {
 return (
  <>
   <SEO
    title='Главная'
    description='Качество нашего ремонта проверено годами непрерывной работы, 
    и вы получите гарантию на устройство после ремонта'
    name='ООО "ЭИС"'
   />
   <GridServices />
  </>
 );
}
