import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';
import sliderimg1 from '../../../assets/img/Sliders/slider-img-1.png';
import sliderimg2 from '../../../assets/img/Sliders/slider-img-2.png';
import sliderimg3 from '../../../assets/img/Sliders/slider-img-3.png';
import Pagination from './Pagination/Pagination';
import Box from '@mui/material/Box';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
 root: {borderRadius: 3, position: 'relative', height: '19rem', top: '5px'},
 slide: {
  display: 'flex',
  marginRight: 0,
  maxWidth: 886,
  maxHeight: 476,
  width: 886,
  height: 476,
  padding: 0,
  color: '#fff',
 },
 slide1: {backgroundColor: '#FEA900'},
 slide2: {backgroundColor: '#B3DC4A'},
 slide3: {borderRadius: 3, backgroundColor: '#6AC0FF'},

 image1: {objectFit: 'clip', maxWidth: 886, maxHeight: 326, width: 886, height: 326},
 image2: {objectFit: 'cover', maxWidth: 886, maxheight: 326, width: 886, height: 326},
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
     <AutoPlaySwipeableViews
      autoplay={false}
      index={index}
      loading='lazy'
      onChangeIndex={this.handleChangeIndex}
     >
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
