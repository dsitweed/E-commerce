import React from "react";

import { SlideShow } from "../../userComponents/slideShow/SlideShow";
import { Collections } from "../../userComponents/collections/Collections";
import { ProductCategory } from "../../userComponents/productCategory/ProductCategory";
import { CTA } from "../../userComponents/cta/CTA";
import "./homeUser.css";

export const HomeUser = () => {
    return (
        <div className="homeUser">
            <SlideShow />
            <Collections />
            <ProductCategory />
            <CTA />
        </div>
    );
}