import icon from "./assets/icons/set.png";
import icon1 from "./assets/icons/bread-icon.png";
import icon2 from "./assets/icons/chicken.png";
import icon3 from "./assets/icons/grainfood-icon.png";
import icon4 from "./assets/icons/dairy.png";
// import icon6 from "./assets/icons/softdrinks.png";
import CategoryItem from "./compoents/CategoryItem";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="category">
      <div className="container">
        <div className="category-header">
          <h2 className="section-head">categories</h2>
          <Link to="/Categories">all the categories</Link>
        </div>
        <div className="category-content">
          <CategoryItem
            title="all the categories"
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
  );
};

export default Category;
