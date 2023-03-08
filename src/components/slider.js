import Slider from 'react-slick';
import { useRef, useEffect } from "react";
import React from 'react';


const MainSlider = ({ imgs }) => {
    const sliderRef = useRef(null);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    useEffect(() => {
        sliderRef.current.slickPlay();
    })
    return (

        <div className="mx-auto bg-gray-200 ">
            <Slider {...settings} ref={sliderRef}>
                {imgs.length > 0 ? imgs.map((img, index) => {
                    return (
                        <>
                            <div key={index}>
                                <img src={img.url} className="w-full h-screen object-cover" />
                            </div>
                        </>
                    )
                }) : <div className="h-screen w-full flex items-center justify-center"><span>loading . . .</span></div>}


            </Slider>
        </div >

    )
}
export default React.memo(MainSlider);