import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function SurfacingOfShaftsAndShieldsPage() {
 return (
  <div>
   <Box
    sx={{
     float: 'right' /* Выравнивание по правому краю  */,
     margin: '7px 0 7px 7px' /* Отступы вокруг картинки */,
    }}
    component='img'
    alt='Изображение неведомой детали'
   />
   <h2>
    <Typography variant='caption'>Наплавка валов и щитов</Typography>
   </h2>
   <h4>
    <Typography variant='caption'>от 4000 руб.</Typography>
   </h4>
   <br />
   <br />
   <p>
    <Typography variant='caption'>Пример наших работ:</Typography>
   </p>
   <ul>
    <li>Восстановление вала</li>
    <li>Восстановление шлицов</li>
    <li>Восстановление шпоночного паза</li>
    <li>Наплавка валов</li>
    <li>Ремонт вала</li>
   </ul>
  </div>
 );
}
