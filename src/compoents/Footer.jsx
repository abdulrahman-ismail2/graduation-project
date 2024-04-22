import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="social-icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-square-instagram"></i>
          </div>
          <div className="footer-links">
            <ul>
              <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/AllShops'>our shops</Link>
              </li>
              <li>
                <Link to='/Categories'>categories</Link>
              </li>
            </ul>
          </div>
          <p>
            <span>bisku</span> team 2024
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
