import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Restlist from './components/Restlist';
import Viewrest from './components/Viewrest';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

function App() {



  return (
    <div className="App">

        <header className="App-header">
          <Header />
        </header>
        <Routes>
          <Route path='/' element={<Restlist />}/>
          <Route path='/viewrest/:id' element={<Viewrest/>} />
        </Routes>
        <Footer />

    </div>
  );
}

export default App;
