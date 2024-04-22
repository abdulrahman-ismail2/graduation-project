const CartItem = () => {
  return (
    <>
      <div className="order">
        <div className="order-left">
          {/* <img src="" alt="" />  */}
          <h5>product name</h5>
        </div>
        <div className="order-right">
          <span>
            <i className="fa-solid fa-trash"></i>
          </span>
          <span>
            <i className="fa-solid fa-plus"></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default CartItem;
