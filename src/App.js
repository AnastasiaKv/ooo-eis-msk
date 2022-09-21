import './App.css';
import Header from './layouts/Header'
import Footer from './layouts/Footer';
import { color } from '@mui/system';

const bodyStyle = {
  backgroundColor: "white"
};
function App() {
  return (
    <div className="App">
      <Header />
      <body style={bodyStyle} className="App-header">

      </body>
      <Footer />
    </div >
  );
}

export default App;
