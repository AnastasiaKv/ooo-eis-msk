import * as React from 'react'
import { LayoutProvider } from './layouts/LayoutProvider'
import './App.css'
import Header from '../components/Header'
import Footer from '../components/Footer/Footer'
import Slider from '../components/Slider'

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
