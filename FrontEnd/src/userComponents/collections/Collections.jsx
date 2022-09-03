import React from "react";

import img1 from "../../assets/tshirt.jpg";
import { CollectionItem } from "../collectionItem/CollectionItem";
import "./collections.css";

const listItem = [
    {id: 1,img: img1,title: "SHIRT STYLE!"},
    {id: 2,img: img1,title: "LIGHT JACKETS"},
    {id: 3,img: img1,title: "TWISTER VIETNAM"},
];

export const Collections = () => {
    return (
        <div className="collections">
            {listItem.map(item => {
                return <CollectionItem item={item} key={item.id}/>
            })}
        </div>
    );
}