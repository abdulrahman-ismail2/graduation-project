const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <div className="container">
        <h1>hello there !</h1>
        <form action="">
          <div className="wrapper">
            <input
              type="text"
              // eslint-disable-next-line react/prop-types
              placeholder={`what would you like to buy from ${props.shopName} today?`}
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
