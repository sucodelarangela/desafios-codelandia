// Components
import Home from './Components/Home';
import Search from './Components/Search';

// hooks
import { useState } from 'react';

// Database
import { blogs } from './data/data.js';

function App() {
  // state para o termo de pesquisa (value do input)
  // search query initial state (input value)
  const [query, setQuery] = useState('');

  // atribuindo novo valor usando setState e pegando o valor do componente-filho Search como props
  // setting new value using useState and getting it from Search child component as props
  const newQuery = (newValue) => {
    setQuery(newValue);
  };

  // filtrando os posts
  // blog filtering
  const filterBlogs = (blogs, query) => {
    // query vazia = retorna todos os valores
    // if query has empty value, return all blogs
    if (query === '') {
      return blogs;
    } else {
      // se há query, retorna o post com título ou corpo que contenha o valor da query
      // if query is not empty, returns the blog with title or body matching the query value
      return blogs.filter((blog) => {
        const postTitle = blog.title.toLowerCase();
        const postBody = blog.body.toLowerCase();
        return (postTitle.includes(query) || postBody.includes(query));
      });
    }
  };

  // salvando os valores filtrados em uma nova array
  // filtering the filtered values in a new array
  const filteredBlogs = filterBlogs(blogs, query);
  console.log(filteredBlogs);

  return (
    <div className="App">
      <section className="header">
        <div className="title">
          <h1>Codelândia</h1>
          <h2>blog</h2>
        </div>
        <Search query={query} newQuery={newQuery} />
      </section>

      <section className="cards">
        {
          // Renderiza os posts de acordo com a condição da query
          // Renders the posts according to query value condition
          filteredBlogs.map((blog) => (
            <Home key={blog.id} date={blog.date} title={blog.title} body={blog.body} like={blog.like} />
          ))
        }
      </section>
    </div>
  );
}

export default App;
