import React from 'react';
import image from '../../assets/img/Decor/right.png'
import styled from 'styled-components';

const Img = styled.img`
width: 130px;
position: fixed;
bottom: 0px;
`;
const rightPadding = {
     paddingLeft: "11cm"
};
export default function DecorRight() {
     return (
          <div style={rightPadding}>
               <Img src={image} alt="" />
          </div>
     );
}