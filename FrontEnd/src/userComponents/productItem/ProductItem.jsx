import React from "react";

import "./productItem.css";
import { Link, useNavigate } from "react-router-dom";

export const ProductItem = ({ item }) => {
    const navigate = useNavigate();


    return (
        // wapper of product is a Link => click => to /product/:productId
        // take data from database => ?
        <div className="productItem" onClick={() => navigate("/product/" + item.id)}>
            <img src={item.img} alt="product Image" className="productImg" />
            <div className="productFilter">
                <Link to={"/"} className="link productItemLink">
                    Uniqlo
                </Link>
                <Link to={"/"} className="link productItemLink">
                    T-Shirt
                </Link>
                <Link to={"/"} className="link productItemLink">
                    Summmer
                </Link>
            </div>
            <div className="productName">
                U AIRism Cotton Oversized Crew Neck T-Shirt
            </div>
            <div className="productPrice">
                <span className="currency">{item.currency}</span>
                <span className="oldPrice">{item.oldPrice}</span>
                <span className="newPrice">{item.newPrice}</span>
            </div>
        </div>
    );
}