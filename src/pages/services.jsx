import React from 'react';
import GridServices from '../app/components/OurServices/GridServices';

import GServices3 from '../app/components/OurServices/GServices3';
import SEO from '../app/components/SEO';

export default function services() {
 return (
  <div className='ees-content-card'>
   <SEO
    title='Главная'
    description='Качество нашего ремонта проверено годами непрерывной работы, 
    и вы получите гарантию на устройство после ремонта'
    name='ООО "ЭИС"'
   />
   <GridServices />
  </div>
 );
}
