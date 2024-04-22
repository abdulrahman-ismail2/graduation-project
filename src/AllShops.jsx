import Footer from "./compoents/Footer";
import NavBar from "./compoents/NavBar";
import ShopItem from "./compoents/ShopItem";
import { Link } from "react-router-dom";


const AllShops = () => {
  return (
    <>
      <NavBar />
      <div className="shops">
        <div className="container">
          <div className="shops-header">
            <h2 className="section-head">our shops</h2>
          </div>
          <div className="items">
          <Link to="/ShopDetails">
            <ShopItem title="shop number 1" />
          </Link>
          <Link to="/ShopDetails">
            <ShopItem title="shop number 2" />
          </Link>
          <Link to="/ShopDetails">
            <ShopItem title="shop number 3" />
          </Link>
          <Link to="/ShopDetails">
            <ShopItem title="shop number 4" />
          </Link>
          <Link to="/ShopDetails">
            <ShopItem title="shop number 5" />
          </Link>
          <Link to="/ShopDetails">
            <ShopItem title="shop number 6" />
          </Link>
          <Link to="/ShopDetails">
            <ShopItem title="shop number 7" />
          </Link>
          <Link to="/ShopDetails">
            <ShopItem title="shop number 8" />
          </Link>
          <Link to="/ShopDetails">
            <ShopItem title="shop number 9" />
          </Link>
          <Link to="/ShopDetails">
            <ShopItem title="shop number 10" />
          </Link>
          <Link to="/ShopDetails">
            <ShopItem title="shop number 11" />
          </Link>
          <Link to="/ShopDetails">
            <ShopItem title="shop number 12" />
          </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default AllShops;
