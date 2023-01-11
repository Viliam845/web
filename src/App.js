
import './App.css';
import Home from './Home';
import Insert from './Insert';
import Sekcia_zmena from './Sekcia_zmena';
import Vypis_udajov from './Vypis_udajov';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Insert' element={<Insert />} />
          <Route path='/Vypis_udajov' element={<Vypis_udajov />} />

          <Route path='/Sekcia_zmena' element={<Sekcia_zmena />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
