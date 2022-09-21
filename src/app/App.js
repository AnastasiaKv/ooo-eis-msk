import * as React from 'react';

import './App.css';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';


const bodyStyle = {
  backgroundColor: "white"
};

function App() {
  return (
   
        <div className="container">
          <div className="header">
            <Header />
          </div>

          <div className="content">
            <main>MAIN CONTENT</main>
            <aside class="left-sidebar">LEFT SIDEBAR</aside>
            <aside class="right-sidebar">RIGHT SIDEBAR</aside>
          </div>

          <div className="footer">
            <Footer />
          </div>
        </div>
  );
}

export default App;
