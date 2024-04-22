import Product from "./compoents/Product";

const Products = () => {
  return (
    <>
      <div className="products-content">
        <div className="container">
          <div className="products-header">
            <h2 className="section-head">lastest products</h2>
          </div>
          <div className="products">
            <Product />
            <Product />
            <Product />
            <Product />  
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
