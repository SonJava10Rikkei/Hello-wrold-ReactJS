import logo from './logo.svg';
import './App.css';
import Control1 from './components/Control';
import ListStudent from './components/ListStudents';
import Form from './components/From';
function App() {
  return (
    <div className="App">
      <Control1 />
      <ListStudent></ListStudent>
      <Form></Form>
    </div>
  );
}

export default App;
