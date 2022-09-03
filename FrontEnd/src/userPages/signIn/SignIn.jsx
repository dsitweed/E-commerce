import React from "react";
import { Link } from "react-router-dom";

import imgLeft from "../../assets/signInLeft.jpg";
import "./signIn.css";

export const SignIn = () => {
  return (
    <div className="signIn">
      <div className="signInWrapper">
        <div className="signInLeft">
            <img src={imgLeft} alt="image"/>
        </div>
        <div className="signInRight">
          <div className="signInTitle">
            <h1 className="webName">Ecommerce Web</h1>
            <h3 className="signInWelcome">Welcome to E commerce</h3>
          </div>
          <form className="signInForm">
            <label>
              User's name or Email
              <input type="text" className="signInUsername" />
            </label>
            <label>
              Password
              <input type="password" className="signInPassword" />
            </label>
            <Link to={"/"} className="signInForgotPass">
              Forgot password?
            </Link>
            <button className="signInBtn">Sign in</button>
            <div className="textCenterLine">
                <span>OR</span>
            </div>
            <div className="signInOAuth2">
                <p>Sign with Google</p>
                <p>Sign with Github</p>
            </div>
            <Link to={"/signup"} className="toSignUp">
                Need an account? <span>Sign up</span>
            </Link>
          </form>
        </div>
      </div>{/* end signInWrapper */}
    </div>
  );
};
