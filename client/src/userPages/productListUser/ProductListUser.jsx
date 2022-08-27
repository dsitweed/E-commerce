import React from "react";

import { ProductCategory } from "../../userComponents/productCategory/ProductCategory.jsx";
import "./productListUser.css";


// PLU productListUser
export const ProductListUser = () => {
    return (
        <div className="PLU">
            <h1 className="PLUTitle">
                Products
            </h1>
            <div className="PLUFilters">
                <div className="PLUFilterItem">
                    <div className="PLUFilterText">
                        Filter Products:
                    </div>
                    <select name="type" id="typeSelect" className="PLUSelect" 
                        defaultValue={"Type"}
                    >
                        <option disabled>Type</option>
                        <option value="T-shirt">T-shirt</option>
                        <option value="Jeans">Jeans</option>
                        <option value="Blouson">Blouson</option>
                    </select>
                    <select name="color" id="colorSelect" className="PLUSelect" 
                        defaultValue={"Color"}
                    >
                        <option disabled>Color</option>
                        <option value="White">White</option>
                        <option value="Black">Black</option>
                        <option value="Blue">Blue</option>
                    </select>
                </div>
                <div className="PLUFilterItem">
                    <div className="PLUFilterText">
                        Sort Products:
                    </div>
                    <select name="sort" id="sortSelect" className="PLUSelect" 
                        defaultValue={"Newest"}
                    >
                        <option value="Newest" >Newest</option>
                        <option value="PriceUp">Price up</option>
                        <option value="PriceDown">Price down</option>
                    </select>
                </div>  
            </div>
            <ProductCategory className="PLUProductCategory"/>
        </div>
    );
}