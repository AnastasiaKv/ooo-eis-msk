import * as React from 'react';
import './App.css';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import { LayoutProvider } from './layouts/LayoutProvider'

function App() {
  return (
    <LayoutProvider>
      <div className="container">

        <header>
          <Header />
        </header>

        <body>
          <content>
            <main>MAIN CONTENT</main>
            <aside className="left-sidebar">LEFT SIDEBAR</aside>
            <aside className="right-sidebar">RIGHT SIDEBAR</aside>
          </content>
        </body>

        <footer>
          <Footer />
        </footer>
        
      </div>
    </LayoutProvider>
  );
}

export default App;
