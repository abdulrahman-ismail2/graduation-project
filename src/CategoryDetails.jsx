import NavBar from "./compoents/NavBar";
import Product from "./compoents/Product";
import Footer from "./compoents/Footer";

const CategoryDetails = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="section-head">
          <h2>section Products</h2>
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
      <Footer/>
    </>
  );
};

export default CategoryDetails;
