import React from 'react';
import GServices3 from '../app/components/OurServices/Services';
import SEO from '../app/components/SEO';

export default function services() {
 return (
  <div className='ees-content-card'>
   <SEO
    title='Главная'
    description='Качество нашего ремонта проверено годами непрерывной работы, 
    и вы получите гарантию на устройство после ремонта'
    name='ООО "ЭИС"'
    keywords=''
    href='https://eis-msk.ru/'
   />
   <GServices3 />
  </div>
 );
}
