/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const CategoryItem = (props) => {
  return (
    <Link to='/CategoryDetails'>
      <div className="item" title={props.title}>
        <img src={props.icon} alt="" />
        <span className="name"> {props.name} </span>
      </div>
    </Link>
  );
};

export default CategoryItem;
