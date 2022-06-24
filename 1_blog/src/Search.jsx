const Search = () => {
  return (
    <form className="form">
      <label htmlFor="search" className="sr-only">Pesquisar no blog</label>
      <input id='search' type="search" placeholder="Pesquisar no blog" />
    </form>
  );
};

export default Search;