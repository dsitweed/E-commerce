import React from "react";

import "./collectionItem.css";

export const CollectionItem = ({ item }) => {
    return (
        <div className="collection">
            <img className="collectionImg" src={item.img} alt="collectionImg" />
            <div className="collectionInfo">
                <h2 className="collectionTitle">
                    {item.title}
                </h2>
                <button className="collectionBtn">
                    SHOP NOW
                </button>
            </div>
        </div>
    );
} 