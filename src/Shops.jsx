import ShopItem from "./compoents/ShopItem";
import { Link } from "react-router-dom";

const Shops = () => {
  return (
    <div className="shops">
      <div className="container">
        <div className="shops-header">
          <h2 className="section-head">our shops</h2>
          <Link to="/AllShops">all the shops</Link>
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
        </div>
      </div>
    </div>
  );
};

export default Shops;
