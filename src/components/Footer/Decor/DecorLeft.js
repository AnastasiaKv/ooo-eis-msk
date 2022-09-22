import React from 'react';
import image from '././../../../assets/img/Decor/left.png'
import styled from 'styled-components';
import './DecorLeft.css';


export default function DecorLeft() {
     return (
          <img width="90" className="leftbox" src={image} alt="DecorLeft" />
     );
}
