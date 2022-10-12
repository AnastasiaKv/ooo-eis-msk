import React, {useState} from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import {Link, Outlet, useMatch, useMatches} from 'react-router-dom';

export default function LinkButton(props) {
 console.log('ClickClick: ', this);
 return (
  <ButtonBase
   sx={{minWidth: '100px', minHeight: '25px'}}
   component={Link}
   onClick={(event) => {
    event.preventDefault();
   }}
   {...props}
  />
 );
}
