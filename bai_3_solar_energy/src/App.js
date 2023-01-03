import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import About from './components/About';
import Service from './components/Service';
import Team from './components/Team';
import FAQs from './components/FAQs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Back_to_Top from './components/Back_to_Top';

function App() {
  return (
    <div data-spy="scroll" data-target=".navbar" data-offset="51">
      <Navbar />
      <Carousel />
      <About />
      <Service></Service>
      <Team />
      <FAQs />
      <Contact />
      <Footer />
      <Modal />
      <Back_to_Top />
    </div>
  );
}

export default App;
