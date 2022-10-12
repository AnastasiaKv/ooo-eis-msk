import {Link, BrowserRouter as Router, Route, IndexRoute, Redirect} from 'react-router-dom';
import React from 'react';
import App from '../app/App';

const RouteLayout = () => {
 return (
  <section className='RouteLayout'>
   <Router>
    <Route path='/' element={<App />}>
     <IndexRoute />
     <Route path='test' />
     <Route path='posts(/:page)' />
     <Route path='article/:hrefTitle' />
     <Route path='tags/:tagName' />
     <Route path='tags/pages/(:page)' />
     <Route path='archive(/:searchKey)' />
     <Redirect path='*' to='/' />
    </Route>
   </Router>
  </section>
 );
};
export default RouteLayout;
