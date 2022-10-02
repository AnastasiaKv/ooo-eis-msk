import React from 'react';
import {Routes, Route, NavLink, Outlet} from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import TopMediaBlock from '../../components/containers/TopMediaBlock';
import BottomMediaBlock from '../../components/containers/BottomMediaBlock';
import GridServices from '../../components/GridServices';

const Layout = () => {
 return (
  <>
   <header>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/blog'>Blog</NavLink>
    <NavLink to='/about'>About</NavLink>
   </header>
   <main>
    <GridServices />
    <Outlet />
   </main>
   <footer>Copyright 2021</footer>
  </>
 );
};

export default Layout;
