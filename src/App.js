import './App.scss';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Tab from './components/Tab';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container bg_white ">
        <div className='df'> 
          <Tab/>
          <div>

          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
