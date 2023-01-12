import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Home from './components/Home';
import Abouts from './components/Abouts';
import Products from './components/Products';
import RikkeiSoft from './components/RikkeiSoft'
import RikkeiAcademy from './components/RikkeiAcademy'
import AboutIndex from './components/AboutIndex';
import NotFound from './components/NotFound';


function App() {
  return (
    <div className="App">
      {/* Xây dựng Menu với Link và Navlink */}
      <nav>
        <ul>
          <li><NavLink to={'/'}> Home</NavLink></li>
          <li>
            <NavLink to={'/abouts'}> Abouts Us</NavLink>

            <ul>
              <li><Link to={'/abouts/rikkeisoft'}> About RikkeiSoft</Link></li>
              <li><Link to={'/abouts/rikkeiacademy'}> About Rikkei Academy</Link></li>
            </ul>
          </li>
          <li><NavLink to={'/products'}> Product</NavLink></li>
        </ul>
      </nav>

      {/*Định nghĩa bộ định tuyến  */}
      <Routes>
        {/* Định tuyến */}
        <Route path='/' element={<Home />} />
        <Route path='/abouts' element={<Abouts />}>
          {/* Nested Route */}
          {/* Index router Abouts hiển thị mặc định khi vào route Abouts */}
          <Route index element={<AboutIndex />} />
          <Route path='/abouts/rikkeisoft' element={<RikkeiSoft />} />
          <Route path='/abouts/rikkeiacademy' element={<RikkeiAcademy />} />
        </Route>
        <Route path='/products' element={<Products />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
