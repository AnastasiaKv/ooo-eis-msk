import React from 'react';
import image from '../../assets/img/Decor/left.png'
import styled from 'styled-components';

const Img = styled.img`
width: 70px;
position: fixed;
bottom: 25px;
`;
const leftPadding = {
     paddingTop: 3,
     paddingRight: "48cm"
};
export default function DecorLeft() {
     return (
          <div style={leftPadding}>
               <Img src={image} alt="" />
          </ div>
     );
}
