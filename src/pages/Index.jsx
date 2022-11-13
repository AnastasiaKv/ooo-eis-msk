import React from 'react';
import GridServices from '../app/components/OurServices/GridServices';

import SEO from '../app/components/SEO';

export default function Index() {
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
