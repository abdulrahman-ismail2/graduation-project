import Category from "./Category";
import Products from "./Products";
import SearchBar from "./SearchBar";
import Shops from "./Shops";
import Footer from "./compoents/Footer";
import NavBar from "./compoents/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <SearchBar shopName="bisku" />
      <Shops />
      <Category />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
