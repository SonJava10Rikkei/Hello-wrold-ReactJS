import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Detail_Section from './components/Detail_Section';
import Products_Section from './components/Products_Section';
import Find_Section from './components/Find_Section';
import Client_Section from './components/Client_Section';
import Sign_Section from './components/Sign_Section';
import Info_Section from './components/Info_Section';
import Footer_Section from './components/Footer_Section';


function App() {
  return (
    <div >
      <Header />
      <Detail_Section />
      <Products_Section />
      <Find_Section />
      <Client_Section />
      <Sign_Section />
      <Info_Section></Info_Section>
      <Footer_Section></Footer_Section>
    </div>
  );
}

export default App;
