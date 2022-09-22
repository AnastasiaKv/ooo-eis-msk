import * as React from 'react'
import { LayoutProvider } from './layouts/LayoutProvider'
import './App.css'
import Header from '../components/Header'
import Footer from '../components/Footer/Footer'
import Slider from '../components/Slider'

function App() {
  return (
    <LayoutProvider>
      <div className="ees-parent">
        <div className="ees-container">
          <div className="ees-container-helper">
            <div className="ees-pillar">
              <Header />
              <div className="ees-main">
              <Slider/>
                <div className="ees-main-row">
                  <aside className="ees-sidebar-left">LEFT SIDEBAR</aside>
                  <main className="ees-content"> </main>
                  <aside className="ees-sidebar-right">RIGHT SIDEBAR</aside>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </LayoutProvider>
  );
}

export default App;
