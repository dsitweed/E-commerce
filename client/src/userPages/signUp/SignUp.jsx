import React from "react";
import { Link } from "react-router-dom";

import imgLeft from "../../assets/signUpLeft.jpg";
import "./signUp.css";

export const SignUp = () => {
    return (
        <div className="signUp">
            <div className="signUpWrapper">
                <div className="signUpLeft">
                    <img src={imgLeft} alt="imageLeft" />
                </div>
                <div className="signUpRight">
                    <div className="signUpTitle">
                        <h1 className="webName">Ecommerce Web</h1>
                        <h2 className="signUpWelcome">Welcome to Ecommerce</h2>
                    </div>
                    <form className="signUpForm">
                        <label>
                            Email
                            <input type="text"/>
                        </label>
                        <label>
                            Password
                            <input type="password"/>
                        </label>
                        <label>
                            Confirm password
                            <input type="password"/>
                        </label>
                        <button className="signUpBtn">Sign up</button>
                        <div className="textCenterLine">
                            <span>OR</span>
                        </div>
                        <div className="signInOAuth2">
                            <p>Sign in with Google</p>
                            <p>Sign in with Github</p>
                        </div>
                        <Link to={"/signin"} className="toSignIn">
                            Already a user? <span>Sign in</span>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}