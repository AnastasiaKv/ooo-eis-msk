import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import RedLine from './layouts/components/RedLine';
import LeftDecor from './layouts/components/DecorLeft';
import RightDecor from './layouts/components/DecorRight';

const bodyStyle = {
  backgroundColor: "white"
};

function App() {
  return (
    <div className="App">
      <Header />
      <body style={bodyStyle} className="App-header">
        <div></div>
      </body>

      <LeftDecor />
      <RightDecor />
      <RedLine />
      <Footer />
    </div >
  );
}

export default App;
