import NavBar from "./compoents/NavBar";
import SearchBar from "./SearchBar";
import icon from "./assets/icons/set.png";
import icon1 from "./assets/icons/bread-icon.png";
import icon2 from "./assets/icons/chicken.png";
import icon3 from "./assets/icons/grainfood-icon.png";
import icon4 from "./assets/icons/dairy.png";
import CategoryItem from "./compoents/CategoryItem";
import Product from "./compoents/Product";
import Footer from "./compoents/Footer";

const ShopDetails = () => {
  return (
    <>
      <NavBar />
      <div className="shop-landing">
        <div className="container">
          <div className="shop-img">
            <img src="" alt="" />
          </div>
          <div className="shop-text">
            <SearchBar shopName="shop number 1" />
            <div className="category">
              <div className="category-header">
                <h2 className="section-head">categories</h2>
              </div>
              <div className="category-content">
                <CategoryItem
                  title="all the categories section"
                  name="all categories"
                  icon={icon}
                />
                <CategoryItem title="bread" name="bread" icon={icon1} />
                <CategoryItem
                  title="chicken and meat section"
                  name="poultry"
                  icon={icon2}
                />
                <CategoryItem
                  title="beans , pasta, breakfast , cereals , rice"
                  name="grainfood"
                  icon={icon3}
                />
                <CategoryItem
                  title="milk, cheese, yogurt"
                  name="dairy"
                  icon={icon4}
                />
              </div>
            </div>
          </div>
          <div className="section-head">
            <h2>browse our Products</h2>
          </div>
          <div className="products">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ShopDetails;
