import './App.css';
import Navbar from './components/navbar';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Services from './pages/services';

function App() {
  return (
    <div className="App">
      <Navbar/>
     
      <Routes>
       <Route path='/' element={<Home/>}/> 
       <Route path='/services' element={<Services/>}/> 

      </Routes>
    </div>
  );
}

export default App;
