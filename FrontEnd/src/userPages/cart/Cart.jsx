import React from "react";

import { Link } from "react-router-dom";

import styles from "./cart.module.css";
import img1 from "../../assets/img1.jpg";
import { Add, DeleteOutline, Remove } from "@mui/icons-material";

const exampleProduct = {
    id: 1,
    img: img1,
    productName: "White T-shirt men",
    tags: ["MEN'S CLOTHING", "T-shirt"],
    oldprice: 200,
    newprice: 109.95,
    currency: "vnd",
    quantity: 5,
    size: 37.5,
    color: "black",
    description: "A T-shirt, or tee, is a style of fabric shirt named after the T shape of its body and sleeves.",
};

const cart = {
    cartNumber: 4,
    wishlistNumber: 1,
    products: [exampleProduct],
}

export const Cart = () => {
    let bill = calcBill();
    
    return (
        <div className={styles.cart}>
            <h1 className={styles.cartTitle}>YOUR CART</h1>
            <div className={styles.top}>
                <Link to={"/"} className={styles.continueShopping}>
                    CONTINUE SHOPPING
                </Link> 
                <button className={styles.removeAll}>
                    <DeleteOutline /><span> Remove all</span>
                </button>
            </div>
            <div className={styles.bottom}>
                <div className={styles.bottomInfo}>
                    {cart.products.map((product) => {
                        return (
                            <div className={styles.product} key={product.id}>
                                <div className={styles.productDetail}>
                                    <img src={product.img} alt="productImg" width={"200px"}/>
                                    <div className={styles.details}>
                                        <div><b>Product: </b>{product.productName}</div>
                                        <div><b>ID: </b>{product.id}</div>
                                        <div>
                                            <b>Color: </b>
                                            {/* Want to show one dot have same background color with product.color */}
                                            <span className={styles.colorDot} style={{backgroundColor:`${product.color}`}}></span>
                                        </div>
                                        <div><b>Size: </b>{product.size}</div>
                                    </div>
                                </div>
                                <div className={styles.priceDetail}>
                                    <div className={styles.productAmountContainer}>
                                        <Add className={styles.icon} disable/>
                                        <span className={styles.productAmount}>{product.quantity}</span>
                                        <Remove className={styles.icon} />
                                    </div>
                                    <div className={styles.productPrice}>
                                        <span className={styles.priceItem}>{product.currency} </span>
                                        <span className={styles.priceItem}>{product.newprice}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/* Need more fix , connect to database */}
                <div className={styles.bottomSummary}>
                    <h2 className="summaryTitle">Bill information</h2>
                    <div className={styles.summaryItem}>
                        <span className="summaryItemText">Estimated total ({bill.allProductItems} products)</span>
                        <span className="summaryItemPrice">Vnd {bill.allProductPrice}</span>
                    </div>
                    <div className={styles.summaryItem}>
                        {/* hard code */}
                        <span className="summaryItemText">Shipping</span>
                        <span className="summaryItemPrice">Vnd 1500</span>
                    </div>
                    <div className={styles.summaryItem}>
                        {/* hard code */}
                        <span className="summaryItemText">Discount</span>
                        <span className="summaryItemPrice">Vnd  500</span>
                    </div>
                    <div className={styles.summaryTotal}>
                        {/* hard code */}
                        <span className="summaryItemText">Total: </span>
                        <span className="summaryItemPrice">Vnd {bill.allProductPrice}</span>
                    </div>
                    <button className={styles.checkoutBtn}>CHECK OUT ({bill.allProductItems}   )</button>
                </div>
            </div>
        </div>
    );
}

function calcBill () {
    let allProductItems = 0;
    let allProductPrice = 0;  
    cart.products.map(item => {
        allProductItems += item.quantity;
        allProductPrice += item.quantity * item.newprice;
    });

    return {
        allProductItems,
        allProductPrice,
    }
}