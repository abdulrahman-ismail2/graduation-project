import NavBar from "./compoents/NavBar";
import { Link } from "react-router-dom";
import Footer from "./compoents/Footer";

const SignUp = () => {
  return (
    <>
      <NavBar />
      <div className="Sing-form">
        <div className="container">
          <h1 className="logo gradient-text">Bisku</h1>
          <h2 className="head">Sign up to your Bisku Account</h2>
          <form action="">
            <div className="text-input">
              <label>user name</label>
              <input type="text" placeholder="enter your user name" />
            </div>
            <div className="text-input">
              <label>password</label>
              <input type="password" placeholder="enter your password" />
            </div>
            <button type="submit">sing up</button>
          </form>
          <p>already have an account ?</p>
          <button className="signup-btn">
            <Link to="/Singin">sign in</Link>
          </button>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default SignUp;
