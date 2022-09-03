import React, { useEffect, useState } from "react";

import "./slideShow.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";

export const SlideShow = () => {
    let slideIndex = 1;
    const listImgs = [{
            id: "1",
            img: img1,
            caption: "somte text",
        }, {
            id: "2",
            img: img2,
            caption: "some text",
        }, {
            id: "3",
            img: img3,
            caption: "some text",
        }, {
            id: "4",
            img: img4,
            caption: "some text",
        },
    ];

    // Next/previous controls 
    // slideIndex - 1 or + 1
    const changeSlide = (n) => {
        showSlide(slideIndex += n);
    }

    // Thumbnail image controls
    const currentSlide = (n) => {
        showSlide(slideIndex = n);
    }

    useEffect(() => {
        currentSlide(slideIndex);
    }, []);

    const showSlide = (n) => {
        let i;
        let slides = document.getElementsByClassName("slideItem");
        let dots = document.getElementsByClassName("slideShowDot");
        if (n > slides.length) slideIndex = 1;
        if (n < 1) slideIndex = slides.length;

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        // slides from 0, but slideIndex from 1 so have to -1
        slides[slideIndex - 1].style.display= "block";
        dots[slideIndex - 1].className += " active";
    }

    return (
        <div className="slideShow">
            <div className="slideShowContainer">
                {
                    listImgs.map((item) => {
                        return (
                            <div className="slideItem fade" key={item.id}>
                                <img className="slideItemImg" 
                                    alt="imageSlideShow" 
                                    src={item.img} 
                                    width={"100%"}
                                />
                                <div className="slideImgCaption">{item.caption}</div>
                            </div>
                        );
                    })
                }
                {/* <!-- Next and previous buttons --> */}
                <a className="slideShowPrev" onClick={() => changeSlide(-1)}>&#10094;</a>
                <a className="slideShowNext" onClick={() => changeSlide(1)}>&#10095;</a>
            </div>
            {/* <!-- The dots/circles --> */}
            <div className="slideShowDots">
                {/* each DOT not DOTS */}
                <span className="slideShowDot"
                    // onClick={}
                >
                </span>
            </div>
        </div>
    );
}