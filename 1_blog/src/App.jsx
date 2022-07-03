// Components
import Header from './Components/Header';
import Home from './Components/Home';

// Database
import { blogs } from './data/data.js';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="cards">
        {
          blogs.map((blog) => (
            <Home key={blog.id} date={blog.date} title={blog.title} body={blog.body} like={blog.like} />
          ))
        }
      </section>
    </div>
  );
}

export default App;
