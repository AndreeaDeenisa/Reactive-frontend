import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from "./Nav";
import Experiente from "./Components/Experiente";
import Acasa from './Components/Acasa';
import CreeazaCont from './Components/CreeazaCont';
import Login from './Components/Login';
import ReseteazaParola from './Components/ReseteazaParola';
import SetariCont from './Components/SetariCont';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Acasa />}></Route>
        <Route path="/creeazaCont" element={<CreeazaCont />}></Route>
        <Route path="/setariCont" element={<SetariCont />}></Route>
        <Route path="/logare" element={<Login />}></Route>
        <Route path="/reseteazaParola" element={<ReseteazaParola />}></Route>
        <Route path="/experiente" element={<Experiente />}></Route>
        <Route path="/experiente/:experienteId" element={null}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
