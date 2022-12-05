import React from 'react';
import {Stack} from '@mui/system';
import SEO from '../../components/SEO';

const Error404 = () => {
 return (
  <main className='ees-content'>
   <SEO title='Страница не найдена' />
   <Stack sx={{paddingTop: '3em', paddingLeft: '13em'}}>
    <h3>Page Not Found</h3>
    <div className='mb-15'>
     The page you looked not found! <br /> 404
    </div>
   </Stack>
  </main>
 );
};

export default Error404;
