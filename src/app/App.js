import * as React from 'react'
import { LayoutProvider } from './layouts/LayoutProvider'
import './App.css'
import Header from '../components/Header'
import Footer from '../components/Footer/Footer'
import TopMediaBlock from '../components/containers/TopMediaBlock'
import BottomMediaBlock from '../components/containers/BottomMediaBlock'


function App() {
  return (
    <LayoutProvider>
      <div className="ees-parent">
        <div className="ees-container">
          <div className="ees-container-helper">
            <div className="ees-pillar">
              <Header />
              <div className="ees-main">

                <div className="ees-main-row">
                  <main className="ees-content">
                   <TopMediaBlock />
                  </main>
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
