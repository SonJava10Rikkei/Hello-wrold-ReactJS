import logo from './logo.svg';
import './App.css';
// Cach 1 duong dan anh import truc tiep
import image1 from "./assets/image/about.jpg";
// Cach 2 duong dan anh tao file image.js
import { images } from './components/image';
function App() {
  return (
    <div className="App">
      {/* Cach 1 duong dan anh*/}
      <img src={image1} alt="" />
      {/* Cach 2 duong dan anh tao file image.js*/}
      <img src={images.image100} alt="" />
      {/* Cach 3 duong dan anh de file image o phan public*/}
      <img src="image/team-1.jpg" />
    </div>
  );
}

export default App;
