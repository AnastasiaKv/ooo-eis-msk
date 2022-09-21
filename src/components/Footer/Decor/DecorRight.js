import React from 'react';
import image from '././../../../assets/img/Decor/right.png'
import styled from 'styled-components';
import './DecorRight.css';

export default function DecorRight() {
     return (
          <div className="rightbox">
               <img src={image} alt="DecorRight" />
          </div>
     );
}