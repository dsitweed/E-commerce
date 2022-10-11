import { CloseOutlined, Menu, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../redux/userSlice";

import "./navbar.css";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const user = useSelector((state) => state.user);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logOut());
  }

  return (
    <div className="navbar">
      <div className="navbarLeft">
        <div className="navbarLogo">
          <Link to={"/"}>
            <img src="./../logo_bear.png" alt="logo" className="logoImg" />
          </Link>
        </div>
        <div className="navbarLinks">
          <Link to={"/products"} className="navbarLink">
            Products
          </Link>
          <Link to={"/"} className="navbarLink">
            Brands
          </Link>
          <Link to={"/"} className="navbarLink">
            About
          </Link>
          <Link to={"/"} className="navbarLink">
            Support
          </Link>
        </div>
      </div>
      <div className="navbarRight">
        <Link to={"/cart"} className="navbarIcon">
          {/* hard code - need update */}
          <Badge badgeContent={cart.products.length} color="error">
            <ShoppingCartOutlined />
          </Badge>
        </Link>
        {user.userInfo ? (
          <>
            <div className="navbarUserInfoWrapper">{user.userInfo.account}</div>
            <div className="navbarSignout" onClick={() => dispatch(logout())}>
              Sign out
            </div>
          </>
        ) : (
          <>
            <Link to={"/signin"} className="navbarSignin link">
              Sign in
            </Link>
            <Link to={"/signup"} className="navbarSignup link">
              Sign up
            </Link>
          </>
        )}
      </div>
      {/* responsive - side menu*/}
      <div className="navbarMenu">
        {toggleMenu ? (
          <CloseOutlined
            onClick={() => setToggleMenu(false)}
            className="navbarMenuIcon"
          />
        ) : (
          <Menu
            onClick={() => setToggleMenu(true)}
            className="navbarMenuIcon"
          />
        )}
        {toggleMenu && (
          <div className="navbarMenuContainer">
            <div className="navbarMenuLinks">
              <Link to={"/"} className="navbarLink">
                Products
              </Link>
              <Link to={"/"} className="navbarLink">
                Brands
              </Link>
              <Link to={"/"} className="navbarLink">
                About
              </Link>
              <Link to={"/"} className="navbarLink">
                Support
              </Link>
            </div>
            <div className="navbarMenuSign">
              <Link to={"/cart"} className="navbarIcon">
                {/* hard code - need update */}
                <Badge badgeContent={4} color="error">
                  <ShoppingCartOutlined />
                </Badge>
              </Link>
              {/* user is logined ? */}

              {user.userInfo ? (
                <>
                  <div className="navbarUserInfoWrapper">
                    {user.userInfo.account}
                  </div>
                  <Link to={"/signout"} className="navbarSignin link">
                    Sign out
                  </Link>
                </>
              ) : (
                <>
                  <Link to={"/signin"} className="navbarSignin link">
                    Sign in
                  </Link>
                  <Link to={"/signup"} className="navbarSignup link">
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
