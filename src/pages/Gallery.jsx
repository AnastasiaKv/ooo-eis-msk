import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';
import {Stack} from '@mui/system';

import image1 from '../assets/img/gallery/Gallery_ASIG.png';
import image3 from '../assets/img/gallery/Gallery_Frezer.png';
import image4 from '../assets/img/gallery/Gallery_istochnik_pitaniya.png';
import image6 from '../assets/img/gallery/Gallery_Nikita_izmeryet.png';
import image7 from '../assets/img/gallery/Gallery_Ruslan.png';
import image8 from '../assets/img/gallery/Gallery_SBS.png';
import image9 from '../assets/img/gallery/Gallery_Stend_peremotki.png';
import image10 from '../assets/img/gallery/Gallery_Stol_electronika.png';
import image12 from '../assets/img/gallery/Gallery_Takarniy_stanok.png';

const itemData = [
 {
  id: 1,
  image: image1,
  title: 'Послеремонтные испытания на универсальном стендовом оборудовании',
  featured: true,
 },

 {
  id: 2,
  image: image3,
  title: 'Обработка металлических деталей на фрезерном станке',
  featured: true,
 },
 {
  id: 3,
  image: image4,
  title: 'Предремонтные испытания',
  featured: true,
 },
 {
  id: 4,
  image: image6,
  title: 'Работа с высокоточным измерительным оборудованием',
  featured: true,
 },
 {
  id: 5,
  image: image7,
  title: 'Ремонт производиться профессионалами',
  featured: true,
 },
 {
  id: 6,
  image: image8,
  title: 'Балансировка роторов электрических машин',
  featured: true,
 },
 {
  id: 7,
  image: image9,
  title: 'Замена обмоток в ручную',
  featured: true,
 },
 {
  id: 8,
  image: image10,
  title: 'Ремонт плат, процессоров и электронных блоков',
  featured: true,
 },
 {
  id: 9,
  image: image12,
  title: 'Обработка деталей на токарном станке',
  featured: true,
 },
];

export default function Gallery() {
 return (
  <main className='ees-content'>
   {/* <Stack
    spacing={1}
    sx={{
     textAlign: 'justify',
     width: '46em',
     paddingTop: '1em',
     paddingBottom: '1em',
     paddingRight: '7.8em',
    }}
   >
    <ImageList
     sx={{
      width: 500,
      height: 450,

      transform: 'translateZ(0)',
     }}
     style={{whiteSpace: 'pre-line'}}
     rowHeight={200}
     gap={2}
    >
     {itemData.map((item) => {
      const cols = item.featured ? 1 : 1;
      const rows = item.featured ? 3 : 1;

      return (
       <ImageListItem key={item.image} cols={cols} rows={rows} whiteSpace='pre-line'>
        <img {...srcset(item.image, 250, 200, rows, cols)} alt={item.title} loading='lazy' />
        <ImageListItemBar
         style={{}}
         sx={{
          background:
           'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
           'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
         }}
         title={item.title}
         position='top'
        />
       </ImageListItem>
      );
     })}
    </ImageList>
   </Stack> */}
  </main>
 );
}
