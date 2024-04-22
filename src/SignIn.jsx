import { useState } from "react";
import NavBar from "./compoents/NavBar";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./compoents/Footer";

const SignIn = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const naviggate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validation()) {
      console.log("proceed");
      //   GO TO HOME PAGE
      //   wait the api
      naviggate("/");
    }
  };

  const validation = () => {
    let result = true;
    if (Username === "" || Username === null) {
      result = false;
      toast.warning("Please Enter User Name");
    }
    if (Password === "" || Password === null) {
      result = false;
      toast.warning("Please Enter password");
    }
    return result;
  };

  return (
    <>
      <NavBar />
      <div className="Sing-form">
        <div className="container">
          <h1 className="logo gradient-text">Bisku</h1>
          <h2 className="head">Sign in to your Bisku Account</h2>
          <form action="" onSubmit={handleSubmit}>
            <div className="text-input">
              <label>user name</label>
              <input
                type="text"
                placeholder="enter your user name"
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="text-input">
              <label>password</label>
              <input
                type="password"
                placeholder="enter your password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">sing in</button>
          </form>
          <p>don't have an account ?</p>
          <button className="signup-btn">
            <Link to="/SingUp">sing up</Link>
          </button>
          <ToastContainer />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default SignIn;
