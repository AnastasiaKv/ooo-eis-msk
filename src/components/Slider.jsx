import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import sliderimg1 from '../assets/img/slider_img_1.png'
import sliderimg2 from '../assets/img/slider_img_2.png'
import Pagination from '../components/Pagination/Pagination';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
     root: {
          position: 'relative',
          height: '19rem',
          top: '15px'
     },
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
     slide3: {
          backgroundColor: '#6AC0FF',
     },

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
     dots: {

     }
};

class Slider extends React.Component {
     state = {
          index: 0,
     };

     handleChangeIndex = index => {
          this.setState({
               index,
          });
     };

     render() {
          const { index } = this.state;

          return (
               <div style={styles.root}>
                    <AutoPlaySwipeableViews autoplay={false} index={index} onChangeIndex={this.handleChangeIndex} >
                         <div style={Object.assign({}, styles.slide)}>
                              <img style={styles.image1} src={sliderimg1} alt="train" />
                         </div>
                         <div style={Object.assign({}, styles.slide)}>
                              <img style={styles.image2} src={sliderimg2} alt="2" />
                         </div>
                    </AutoPlaySwipeableViews>
                    {/* <div style={styles.dots}> */}
                    <Pagination dots={3} index={index} onChangeIndex={this.handleChangeIndex} />
                    {/* </div> */}

               </div>
          );
     }
}

export default Slider;
