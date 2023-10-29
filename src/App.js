import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Acceuil from "./components/acceuil.component";
import Search from "./components/search.component"
import Affichage from './components/affichage.component';
import './index.css';



function App() {
  return (
    <Router>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
         
        </div>
      </nav>
      <div className="App">
      </div>
      <Routes>
        <Route path="/acceuil" element={<Acceuil />} />
        <Route path="/search" element={<Search />} />
        <Route path="/affichage" element={<Affichage />} />
      </Routes>
    </Router>
  );
}

export default App;
