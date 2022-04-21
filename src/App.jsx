import './App.css';
import ControlPainel from './components/ControlPainel';
import ScreenCounter from './components/ScreenCounter';
import { GlobaStyle } from './components/UI/GlobalStyle';
import { CounterProvider } from './context/counter'


function App () {
  return (
    <div className="App">
      <GlobaStyle />
      <CounterProvider>
        <ScreenCounter />
        <ControlPainel />
      </CounterProvider>
    </div>
  );
}

export default App;
