import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Contect from './component/pages/Contect';
import Navbar from './component/layout/Navbar';
// import './App.css';

function App() {
  return (
    <>
    {/* <h1>REACT-ROUTER</h1> */}
    <BrowserRouter>
     <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contect' element={<Contect/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
