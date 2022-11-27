import React from 'react';
import Services from '../app/components/OurServices/Services';
import SEO from '../app/components/SEO';

export default function Main() {
 return (
  <div className='ees-content-card'>
   <SEO
    title='Главная'
    description='Качество нашего ремонта проверено годами непрерывной работы, 
    и вы получите гарантию на устройство после ремонта'
    siteTitle='ООО "ЭИС"'
    keywords='Ремонт генераторов, Ремонт электродвигателей, Ремонт трансформаторов, Ремонт компрессоров, Ремонт холодильных машин, Перемотка генераторов, Перемотка электродвигателей, Ремонт нагревателей, Ремонт электронагревателей, Ремонт печей, Ремонт обогревателей, Наплавка валов, Восстановление валов'
    href='https://eis-msk.ru/'
   />
   <Services />
  </div>
 );
}
