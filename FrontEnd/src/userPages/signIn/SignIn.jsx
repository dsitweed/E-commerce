import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import imgLeft from "../../assets/signInLeft.jpg";
import "./signIn.css";
import { loginSuccess } from "../../redux/userSlice";

export const SignIn = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signIn = async () => {
    console.log(account, password);
    dispatch(loginSuccess({
      userInfo: {account}, 
      isAdmin: false,
    }));
    navigate("/");
  }
  
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
          <div className="signInForm">
            <label>
              User's name or Email
              <input type="text" className="signInUsername" 
                value={account}
                onChange={(e) => setAccount(e.target.value)}
              />
            </label>
            <label>
              Password
              <input type="password" className="signInPassword" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <Link to={"/"} className="signInForgotPass">
              Forgot password?
            </Link>
            <button className="signInBtn" onClick={() => signIn()}>Sign in</button>
            <div className="textCenterLine">
                <span>OR</span>
            </div>
            <div className="signInOAuth2">
                <p>Sign with Google</p>
                <p>Sign with Github</p>
            </div>
            <span className="toSignUp">
                Need an account? <Link to={"/signup"}>Sign up</Link>
            </span>
          </div>
        </div>
      </div>{/* end signInWrapper */}
    </div>
  );
};
