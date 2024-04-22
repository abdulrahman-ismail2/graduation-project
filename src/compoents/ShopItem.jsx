const ShopItem = (props) => {
  return (
    <div className="item">
      <img src="" alt="" />
      <div className="info">
        <span className="name"> {props.title} </span>
      </div>
    </div>
  );
};

export default ShopItem;
