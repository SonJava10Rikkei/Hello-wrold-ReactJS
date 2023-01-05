import logo from './logo.svg';
import './App.css';
import ControlledForm from './components/ControlledForm';
import UncontroledForm from './components/UncontroledForm';


function App() {
  return (
    <div className="App">
      <ControlledForm></ControlledForm>
      <UncontroledForm></UncontroledForm>
    </div>
  );
}

export default App;
