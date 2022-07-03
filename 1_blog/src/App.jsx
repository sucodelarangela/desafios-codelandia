// Components
import Header from './Components/Header';
import Home from './Components/Home';

// Database
import { blogs } from './data/data.js';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Home blogs={blogs} />
      </div>
    </div>
  );
}

export default App;
