// query and newQuery props come from App.jsx
const Search = ({ query, newQuery }) => {
  return (
    <form className="form">
      <label htmlFor="search" className="sr-only">Pesquisar no blog</label>
      <input id='search' type="text" placeholder="Pesquisar no blog" value={query} onChange={(e) => newQuery(e.target.value)} />
    </form>
  );
};

export default Search;