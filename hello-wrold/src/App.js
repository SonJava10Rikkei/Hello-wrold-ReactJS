import logo from './logo.svg';
import './App.css';
import ChildClass from './components/ChildClass';
import ChildFunc from './components/ChildFunc';
import StateDemo from './components/StateDemo';
import EventDemo from './components/EventDemo';

function App() {
  return (
    <div className="App">
      {/* Component Cha */}
      <h2>Lớp Java 10</h2>
      <ChildClass studentName="Trương Minh Thu">Xinh Gái</ChildClass>
      <ChildFunc studentName="Lê Văn Hoàng">Đẹp zai</ChildFunc>
      <StateDemo></StateDemo>
      <EventDemo></EventDemo>
    </div>
  );
}

export default App;