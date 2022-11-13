import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';
import sliderimg1 from '../../assets/img/Sliders/slider_img_1.png';
import sliderimg2 from '../../assets/img/Sliders/slider_img_2.png';
import sliderimg3 from '../../assets/img/Sliders/WhatsApp Image 2022-10-28 at 08.05.25.png';
import Pagination from './Pagination/Pagination';
import Box from '@mui/material/Box';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
 root: {borderRadius: 3, position: 'relative', height: '19rem', top: '5px'},
 slide: {
  marginRight: 0,
  display: 'flex',
  width: 886,
  height: 476,
  padding: 0,
  color: '#fff',
 },
 slide1: {
  backgroundColor: '#FEA900',
 },
 slide2: {
  backgroundColor: '#B3DC4A',
 },
 slide3: {borderRadius: 3, backgroundColor: '#6AC0FF'},

 image1: {
  objectFit: 'clip',
  width: 886,
  height: 326,
 },
 image2: {
  objectFit: 'cover',
  width: 886,
  height: 326,
 },
 //  image3: {
 //   objectFit: 'clip',
 //   width: 886,
 //   height: 326,
 //  },
 dots: {display: ''},
};

class Slider extends React.Component {
 state = {
  index: 0,
 };

 handleChangeIndex = (index) => {
  this.setState({
   index,
  });
 };

 render() {
  const {index} = this.state;

  return (
   <Box sx={{borderRadius: 3}}>
    <div style={styles.root}>
     <AutoPlaySwipeableViews autoplay index={index} onChangeIndex={this.handleChangeIndex}>
      <div style={Object.assign({}, styles.slide)}>
       <img style={styles.image1} src={sliderimg1} alt='Поезд' loading='lazy' />
      </div>
      <div style={Object.assign({}, styles.slide)}>
       <img style={styles.image2} src={sliderimg2} alt='Деталь' loading='lazy' />
      </div>
      <div style={Object.assign({}, styles.slide)}>
       <img style={styles.image1} src={sliderimg3} alt='Производство' loading='lazy' />
      </div>
     </AutoPlaySwipeableViews>
     <div style={styles.dots}>
      <Pagination dots={3} index={index} onChangeIndex={this.handleChangeIndex} />
     </div>
    </div>
   </Box>
  );
 }
}

export default Slider;
