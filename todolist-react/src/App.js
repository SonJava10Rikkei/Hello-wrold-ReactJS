import logo from './logo.svg';
import './App.css';
import ExUseState from './components/ExUseState';
import ExUseContext from './components/ExUseContext';
import ExUseRef from './components/ExUseRef';
import ExUseReducer from './components/ExUseReducer';
import ExUseCallBack from './components/ExUseCallBack';
import ExUseMemo from './components/ExUseMemo';

function App() {
  return (
    <div className="App">
      <ExUseState></ExUseState>
      <ExUseContext></ExUseContext>
      <ExUseRef></ExUseRef>
      <ExUseReducer></ExUseReducer>
      <ExUseCallBack></ExUseCallBack>
      <ExUseMemo></ExUseMemo>
    </div>
  );
}
export default App;
