import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';
import {Stack} from '@mui/system';
import image1 from '../assets/img/actions/PaperPage/Фото.png';
import image2 from '../assets/img/actions/PaperPage/paper_page.png';
import image3 from '../assets/img/actions/PaperPage/Статья1.png';
import image4 from '../assets/img/actions/PaperPage/Статья2.png';
import image5 from '../assets/img/actions/PaperPage/Статья3.png';
import GridItem from '../app/modules/common/GridItem';
import CircleIcon from '@mui/icons-material/Circle';

const componentStyle = {
 color: '#3c3c3c',
 paddingTop: '15px',
 paddingBottom: '15px',
 paddingRight: '53rem',
 paddingLeft: '37px',
};

const headerStyle = {
 fontFamily: 'Furore',
 fontSize: '23px',
 color: '#292929',
};
const bodyStyle = {
 fontFamily: 'Roboto',
 fontSize: '14px',
 display: 'block',
 textAlign: 'justify',
 maxWidth: '1000px',
};

const body2Style = {
 fontFamily: 'Roboto',
 fontSize: '14px',
 display: 'block',
 textAlign: 'justify',
 maxWidth: '1000px',
};

export default function News() {
 return (
  <main className='ees-content'>
   <div>
    <p
     style={{
      textAlign: 'left',
      paddingLeft: '0px',
      paddingTop: '20px',
      margin: '5px 0',
      width: '24cm',
     }}
     className='blocktext'
    >
     <Typography
      variant='body2'
      component='span'
      sx={{flexGrow: 1}}
      style={{
       fontFamily: 'Roboto',
       fontSize: '14px',
       position: 'relative',
       justifyContent: 'space-around',
       textAlign: 'justify',
       color: '#292929',
      }}
     >
      Даже самые мощные и надежные электрические машины имеют ограниченный во времени
      эксплуатационный ресурс. <br />
      Наступает день, когда силовые агрегаты нуждаются в ремонте. Задачей номер один по степени
      приоритетности следует считать создание таких условий, чтобы устранение неисправности прошло
      не только в предельно сжатые сроки, но и в максимально безопасном режиме.
     </Typography>
     <br />
     <br />
    </p>
    <div style={componentStyle}>
     <div className='block1'>
      <h2>
       <Typography variant='h6' component='p' sx={{flexGrow: 1}} style={headerStyle}>
        Ремонт электрических машин: основы техники безопасности
       </Typography>
      </h2>
      <p>
       <Typography
        variant='body2'
        component='span'
        style={{
         fontFamily: 'Roboto',
         display: 'block',
         textAlign: 'justify',
         maxWidth: '1000px',
         paddingTop: '10px',
        }}
       >
        К ремонту моторов допускают электромонтеров с квалификационной группой не ниже III, перед
        началом проведения работ проходит
       </Typography>
       <Box
        sx={{
         height: '12em',
         float: 'right' /* Выравнивание по правому краю  */,
         margin: '7px 0 7px 25px' /* Отступы вокруг картинки */,
        }}
        component='img'
        alt='Изображение неведомой детали'
        src={image1}
       />
       <Typography variant='body2' component='span' style={bodyStyle}>
        инструктаж по технике безопасности (ответственный за его проведение – начальник
        электротехнической службы хозяйства). К устранению неисправностей привлеченные исполнители
        приступают лишь при наличии у них специальных защитных cредств для работы с установками под
        напряжением до 1000 В – речь ведется о диэлектрических перчатках, инструментарии с
        диэлектрическими ручками, переносном заземлении (закоротке). К числу дополнительных защитных
        средств относят изолирующие подставки, галоши, материал изготовления которых обладает
        диэлектрическими характеристиками.
       </Typography>
      </p>
      <br />
      <h2 style={{float: 'left', marginTop: '-44px'}}>
       <Typography variant='h6' component='p' sx={{flexGrow: 1}} style={headerStyle}>
        Основы техники безопасности
       </Typography>
      </h2>
      <p style={{paddingTop: '11px'}}>
       <Typography variant='body2' component='span' style={bodyStyle}>
        Перед началом проведения ремонта электродвигателей необходимо проверить исправность защитных
        средств, особое внимание обращают на дату их последней проверки. Принципиально важно, чтобы
        установки были отключены от питающих сетей. Между губками и ножками отключающего рубильника
        помещают лист материала-диэлектрика, на его рукоятку вешают предупреждающий плакат "Не
        включать. Работают люди". Отвечающим за ремонт электрических установок специалистам
        необходимо принять меры для предупреждения вращения электрического двигателя от машины.
       </Typography>
      </p>
     </div>
     <br />
     <div className='block2'>
      <p>
       <Box
        sx={{
         height: '6em',
         float: 'left' /* Выравнивание по правому краю  */,
         margin: '7px 32px 7px 0' /* Отступы вокруг картинки */,
        }}
        component='img'
        alt='Запрещается снимать во время работы'
        src={image2}
       />
       <Typography style={body2Style} variant='body2' component='span'>
        Обслуживание щеточного аппарата двигателя допускается проводить (в единоличном порядке)
        специально обученному сотруднику с группой допуска по электробезопасности не ниже III. При
        этом необходимо соблюдать ряд требований. К ремонту моторов допускают электромонтеров с
        квалификационной группой не ниже III, перед началом проведения работ проходит инструктаж по
        технике безопасности (ответственный за его проведение – начальник электротехнической службы
        хозяйства). Обслуживание щеточного аппарата двигателя допускается проводить (в единоличном
        порядке) специально обученному сотруднику с группой допуска по электробезопасности не ниже
        III.
        <br />
        При этом необходимо соблюдать ряд требований:
       </Typography>
      </p>
     </div>
     <br />
     <div className='block3'>
      <ul style={{paddingLeft: '100px', textAlign: 'left', listStyle: 'none'}}>
       <Stack direction='row' spacing={3}>
        <CircleIcon style={{margin: '5px 0px 0px 0px', height: 10, color: '#f12b29'}} />
        <Typography variant='caption' component='span' style={{marginLeft: 0}}>
         Находиться в головном уборе, полностью застегнутой спецодежде (остерегаясь ее захвата
         вращающимися частями двигателя);
        </Typography>
       </Stack>
       <Stack direction='row' spacing={3}>
        <CircleIcon style={{margin: '5px 0px 0px 0px', height: 10, color: '#f12b29'}} />
        <Typography variant='caption' component='span' style={{marginLeft: 0}}>
         Пользоваться диэлектрическими галошами и ковриками;
        </Typography>
       </Stack>
       <Stack direction='row' spacing={3}>
        <CircleIcon style={{margin: '5px 0px 0px 0px', height: 10, color: '#f12b29'}} />
        <Typography variant='caption' component='span' style={{marginLeft: 0}}>
         Не касаться (одновременно) токоведущих заземленных частей или двух полюсов.
        </Typography>
       </Stack>
      </ul>
      <p style={{paddingTop: '20px'}}>
       <Typography variant='caption' component='span' style={body2Style}>
        Отвечающим за ремонт электрических установок специалистам необходимо принять меры для
        предупреждения вращения электрического двигателя от машины. Принципиально важно, чтобы
        установки были отключены от питающих сетей.
       </Typography>
      </p>
     </div>

     <br />
     <div className='block4' style={{paddingRight: '120px'}}>
      <h2 style={{paddingBottom: '15px'}}>
       <Typography
        variant='body2'
        component='span'
        sx={{flexGrow: 1}}
        style={{
         fontFamily: 'Furore',
         position: 'relative',
         fontSize: 24,
         textAlign: 'left',
         color: '#292929',
        }}
       >
        Это интересно
       </Typography>
      </h2>

      <Stack direction='row' spacing={1} sx={{display: 'inline-flex'}}>
       <Grid sx={{width: '98%', mt: 8}} container>
        <Grid sx={{m: 'auto'}} container spacing={5}>
         <GridItem image={image3} />
         <GridItem image={image4} />
         <GridItem image={image5} />
        </Grid>
       </Grid>
      </Stack>
     </div>
    </div>
   </div>
  </main>
 );
}
