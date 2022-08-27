import React from "react";
import { ProductItem } from "../productItem/ProductItem";

import "./productCategory.css";
import tshirt from "../../assets/tshirt.jpg";

const listProduct = [{
        id: 1,
        img: tshirt,
        name: "Solid Gold Product",
        oldPrice: "168", // string or number all ok
        newPrice: 150,
        currency: "vnd",
    }, {
        id: 2,
        img: tshirt,
        name: "Solid Gold Product",
        oldPrice: "168", // string or number all ok
        newPrice: 150,
        currency: "vnd",
    }, {
        id: 3,
        img: tshirt,
        name: "Solid Gold Product",
        oldPrice: "168", // string or number all ok
        newPrice: 150,
        currency: "vnd",
    }, {
        id: 4,
        img: tshirt,
        name: "Solid Gold Product",
        oldPrice: "168", // string or number all ok
        newPrice: 150,
        currency: "vnd",
    },
];

export const ProductCategory = () => {
    return (
        <div className="category">
            {listProduct.map((item) => {
                return (<ProductItem item={item} key={item.id}/>);
            })}
        </div>
    );
}