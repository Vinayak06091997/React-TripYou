import './App.css';
import {Route, Routes} from 'react-router-dom';


import Home from './Components/routes/Home.js';
import Contact from './Components/routes/Contact';
import Service from './Components/routes/Service';
import About from './Components/routes/About';
import Travel from './Components/Travelplan/Travel';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/travel" element={<Travel/>}/>
      </Routes>
    </div>

  );
}
export default App;