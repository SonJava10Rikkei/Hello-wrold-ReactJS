import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import Contact from './components/Contact';
import Product from './components/Product';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product' element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
