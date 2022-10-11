import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import "./singleProduct.css";
import img1 from "../../assets/tshirt.jpg";
import { Link } from "react-router-dom";
import { addtoCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

var data = {
  id: 1,
  img: img1,
  productName: "White T-shirt men",
  tags: ["MEN'S CLOTHING", "T-shirt"],
  oldprice: 200,
  newprice: 109.95,
  currency: "vnd",
  quantity: 5,
  description:
    "A T-shirt, or tee, is a style of fabric shirt named after the T shape of its body and sleeves.",
};

// SP: single product
export const SingleProduct = () => {
  const [quantity, setQuantity] = useState(data.quantity);
  const dispatch = useDispatch();

  const addToCartHandle = () => {
    // data fetch from Database
    const buffer = {...data,
    quantity: quantity};
    dispatch(addtoCart(buffer));  
  }

  return (
    <div className="singleProduct">
      <div className="singleProductLeft">
        <img src={data.img} alt="productImg" width="100%" />
      </div>
      <div className="singleProductRight">
        <div className="singleProductTags">
          {data.tags.map((tag, index) => {
            return (
              <Link to={"/"} className="singleProductTag link" key={index}>
                {tag}
              </Link>
            );
          })}
        </div>
        <h2 className="singleProductName">{data.productName}</h2>
        <div className="productPrice">
          <span className="currency">{data.currency}</span>
          <span className="oldPrice">{data.oldprice}</span>
          <span className="newPrice">{data.newprice}</span>
        </div>
        <div className="SPOption">
          <div className="SPOptionColor">
            <label className="SPColor">
              <input type="radio" name="color" value="white" />
              <span
                className="checkmark"
                style={{ backgroundColor: "white" }}
              ></span>
            </label>
            <label className="SPColor">
              <input type="radio" name="color" value="Black" />
              <span
                className="checkmark"
                style={{ backgroundColor: "black" }}
              ></span>
            </label>
            <label className="SPColor">
              <input type="radio" name="color" value="Blue" />
              <span
                className="checkmark"
                style={{ backgroundColor: "blue" }}
              ></span>
            </label>
          </div>
          <div className="SPOptionSize">
            <select name="size" id="SPSize" defaultValue={"M"}>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>
        </div>
        <div className="SPDescription">{data.description}</div>
        <div className="SPAddContainer">
          <div className="SPAddAmount">
            <RemoveIcon
              className="SPAddIcon"
              onClick={() => {
                if (quantity > 1) setQuantity(quantity - 1);
              }}
            />
            <input
              type="text"
              name="quantity"
              step="1"
              value={quantity}
              disabled
            />
            <AddIcon
              className="SPAddIcon"
              onClick={() => setQuantity(quantity + 1)}
            />
          </div>
          <div className="SPAddAction">
            <button className="SPAddBtn" style={{ backgroundColor: "#ffb916" }}>
              Buy Now
            </button>
            <button className="SPAddBtn" style={{ backgroundColor: "#f57224" }}
              onClick={() => addToCartHandle()}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>{" "}
      {/*end right single product*/}
    </div>
  );
};
