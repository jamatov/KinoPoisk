import './App.scss';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Tab from './components/Tab';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container bg_white ">
        {/* <div className='df'>  */}
          {/* <Tab/> */}
          <Home/>
        {/* </div> */}
        <Footer/>
      </div>
    </div>
  );
}

export default App;
