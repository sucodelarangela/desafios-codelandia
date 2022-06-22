import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
