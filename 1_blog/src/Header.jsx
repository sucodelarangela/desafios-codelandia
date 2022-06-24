import Search from "./Search";

const Header = () => {
  return (
    <>
      <nav className="header">
        <div className="title">
          <h1>Codelândia</h1>
          <h2>blog</h2>
        </div>
        <Search />
      </nav>
    </>
  );
};

export default Header;