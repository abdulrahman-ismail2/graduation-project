import icon from "./assets/icons/set.png";
import icon1 from "./assets/icons/bread-icon.png";
import icon2 from "./assets/icons/chicken.png";
import icon3 from "./assets/icons/grainfood-icon.png";
import icon4 from "./assets/icons/dairy.png";
import icon5 from "./assets/icons/fruit-icon.png";
import icon6 from "./assets/icons/seafood-icon.png";
import icon7 from "./assets/icons/softdrinks.png";
import icon8 from "./assets/icons/cleaner.png";
import icon9 from "./assets/icons/vegetables.png";
import CategoryItem from "./compoents/CategoryItem";
import NavBar from "./compoents/NavBar";
import Footer from "./compoents/Footer";

const Categories = () => {
  return (
    <>
      <NavBar />
      <div className="category">
        <div className="container">
          <div className="category-header">
            <h2 className="section-head">categories</h2>
          </div>
          <div className="category-content">
            <CategoryItem title="all the categories "  name="all categories" icon={icon} />
            <CategoryItem title="bread" name="bread" icon={icon1} />
            <CategoryItem title="chicken and meat " name="poultry" icon={icon2} />
            <CategoryItem title="beans , pasta, breakfast , cereals , rice" name="grainfood" icon={icon3} />
            <CategoryItem title="milk, cheese, yogurt" name="dairy" icon={icon4} />
            <CategoryItem title="vegetables"  name="vegetables" icon={icon9} />
            <CategoryItem title="sea food" name="sea food" icon={icon6} />
            <CategoryItem title="fruit" name="fruit" icon={icon5} />
            <CategoryItem title="drinks" name="drinks" icon={icon7} />
            <CategoryItem title="cleaners"  name="cleaners" icon={icon8} />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Categories;
